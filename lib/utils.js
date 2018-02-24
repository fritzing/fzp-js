'use strict';

var axios = require('axios');
var parseXml = require('xml2js').parseString;
var FZP = require('./fzp/fzp');

var _require = require('./fzp/connector'),
    FZPConnector = _require.FZPConnector;

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
          // cb(err);
          return reject(err);
        }
        // console.log(xml.module.connectors[0]);

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

        // console.log(JSON.stringify(xml.module.properties, '', '  '));
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
            fzp.views.pcb.setImage(xml.module.views[0].pcbView[0].layers[0].$.image);
            fzp.views.pcb.addLayerId(xml.module.views[0].pcbView[0].layers[0].layer[0].$.layerId);
          }
          if (xml.module.views[0].schematicView) {
            fzp.views.schematic.setImage(xml.module.views[0].schematicView[0].layers[0].$.image);
            fzp.views.schematic.addLayerId(xml.module.views[0].schematicView[0].layers[0].layer[0].$.layerId);
          }
        }

        if (xml.module.connectors) {
          if (xml.module.connectors[0].connector) {
            for (var i = 0; i < xml.module.connectors[0].connector.length; i++) {
              var connector = xml.module.connectors[0].connector[i];

              var c = new FZPConnector();
              c.id = connector.$.id;
              c.name = connector.$.name;
              c.type = connector.$.type;
              c.description = connector.description[0];
              c.views.breadboard.layer = connector.views[0].breadboardView[0].p[0].$.layer;
              c.views.breadboard.svgId = connector.views[0].breadboardView[0].p[0].$.svgId;
              c.views.breadboard.legId = connector.views[0].breadboardView[0].p[0].$.legId;
              c.views.breadboard.terminalId = connector.views[0].breadboardView[0].p[0].$.terminalId;

              fzp.connectors[c.id] = c;
            }
          }
        }

        // cb(null, fzp);
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

module.exports = { loadFZP: loadFZP, parseFZP: parseFZP, parseProperties: parseProperties };