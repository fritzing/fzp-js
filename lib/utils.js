/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

var axios = require('axios');
var xml2js = require('xml2js');
var parseXml = xml2js.parseString;
var FZP = require('./fzp/fzp');

var _require = require('./fzp/connector'),
    FZPConnector = _require.FZPConnector,
    FZPConnectorView = _require.FZPConnectorView;

/**
 * @param {String} url
 * @return {Promise}
 */


function loadFZP(url) {
  return axios.get(url, { responseType: 'xml' }).then(function (res) {
    return parseFZP(res.data);
  });
}

/**
 * parse a fzp xml string
 * @param {String} data
 * @return {Promise}
 */
function parseFZP(data) {
  return new Promise(function (resolve, reject) {
    var fzp = new FZP();
    if (data) {
      parseXml(data, function (err, xml) {
        if (err) {
          return reject(err);
        }

        fzp.moduleId = xml.module.$.moduleId;
        fzp.fritzingVersion = xml.module.$.fritzingVersion;
        if (xml.module.version) fzp.version = xml.module.version[0];
        if (xml.module.title) fzp.title = xml.module.title[0];
        if (xml.module.description) fzp.description = xml.module.description[0];
        if (xml.module.author) fzp.author = xml.module.author[0];
        if (xml.module.date) fzp.date = xml.module.date[0];
        if (xml.module.url) fzp.url = xml.module.url[0];
        if (xml.module.label) fzp.label = xml.module.label[0];
        if (xml.module.tags) fzp.tags = xml.module.tags[0].tag;
        if (xml.module.taxonomy) fzp.taxonomy = xml.module.taxonomy;
        if (xml.module.language) fzp.language = xml.module.language;
        if (xml.module.family) fzp.family = xml.module.family;
        if (xml.module.variant) fzp.variant = xml.module.variant;
        if (xml.module.properties) {
          fzp.properties = parseProperties(xml.module.properties[0].property);
        }

        if (xml.module.views) {
          if (xml.module.views[0].iconView) {
            var iconViewLayer = xml.module.views[0].iconView[0].layers[0];
            fzp.views.icon.setImage(iconViewLayer.$.image);
            fzp.views.icon.addLayerId(iconViewLayer.layer[0].$.layerId);
          }
          if (xml.module.views[0].breadboardView) {
            var breadboardLayer = xml.module.views[0].breadboardView[0].layers[0];
            fzp.views.breadboard.setImage(breadboardLayer.$.image);
            fzp.views.breadboard.addLayerId(breadboardLayer.layer[0].$.layerId);
          }
          if (xml.module.views[0].pcbView) {
            var pcbViewLayer = xml.module.views[0].pcbView[0].layers[0];
            fzp.views.pcb.setImage(pcbViewLayer.$.image);
            for (var iLayer = 0; iLayer < pcbViewLayer.layer.length; iLayer++) {
              fzp.views.pcb.addLayerId(pcbViewLayer.layer[iLayer].$.layerId);
            }
          }
          if (xml.module.views[0].schematicView) {
            var schematicViewLayer = xml.module.views[0].schematicView[0].layers[0];
            fzp.views.schematic.setImage(schematicViewLayer.$.image);
            fzp.views.schematic.addLayerId(schematicViewLayer.layer[0].$.layerId);
          }
        }

        if (xml.module.connectors) {
          if (xml.module.connectors[0].connector) {
            for (var i = 0; i < xml.module.connectors[0].connector.length; i++) {
              var connector = xml.module.connectors[0].connector[i];

              // create the connector for the three views.
              var c = new FZPConnector();
              c.id = connector.$.id;
              c.name = connector.$.name;
              c.type = connector.$.type;
              c.description = connector.description[0];

              c.views.breadboard = parseConnectorView(connector.views[0].breadboardView[0].p[0]);
              c.views.schematic = parseConnectorView(connector.views[0].schematicView[0].p[0]);

              for (var iPcb = 0; iPcb < connector.views[0].pcbView[0].p.length; iPcb++) {
                switch (connector.views[0].pcbView[0].p[iPcb].$.layer) {
                  case 'copper0':
                    c.views.pcb.copper0 = parseConnectorView(connector.views[0].pcbView[0].p[iPcb]);
                    break;
                  case 'copper1':
                    c.views.pcb.copper1 = parseConnectorView(connector.views[0].pcbView[0].p[iPcb]);
                    break;
                }
              }
              fzp.connectors[c.id] = c;
            }
          }
        }

        return resolve(fzp);
      });
    }
  });
}

/**
 * Get the parsed xml object and map to a proper structure
 * @param {String} xml
 * @return {Object}
 */
function parseProperties(xml) {
  var data = {};
  for (var i = 0; i < xml.length; i++) {
    data[xml[i].$.name] = {
      value: xml[i]._,
      showInLabel: xml[i].$.showInLabel
    };
  }
  return data;
}

/**
 * @param {Object} xml
 * @return {FZPConnectorView}
 */
function parseConnectorView(xml) {
  var conView = new FZPConnectorView();
  conView.layer = xml.$.layer || null;
  conView.svgId = xml.$.svgId || null;
  conView.legId = xml.$.legId || null;
  conView.terminalId = xml.$.terminalId || null;
  return conView;
}
/**
 * Create a xml string of a fzp instance
 * @param {FZP} fzp
 * @return {String}
 */
function marshalToXML(fzp) {
  var builder = new xml2js.Builder();
  var data = {
    module: Object.assign({}, fzp)
  };
  data.module.$ = {
    moduleId: fzp.moduleId,
    fritzingVersion: fzp.fritzingVersion
  };
  delete data.moduleId;
  delete data.fritzingVersion;
  delete data.module.views.icon.svg;
  delete data.module.views.breadboard.svg;
  delete data.module.views.schematic.svg;
  delete data.module.views.pcb.svg;

  return builder.buildObject(data);
}

module.exports = {
  loadFZP: loadFZP,
  parseFZP: parseFZP,
  parseProperties: parseProperties,
  marshalToXML: marshalToXML
};