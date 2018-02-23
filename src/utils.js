const parseXml = require('xml2js').parseString;
const FZP = require('./fzp/fzp');
const {FZPConnector} = require('./fzp/connector');

function parseFZP(data, cb) {
  let fzp = new FZP()
  if (data) {
    parseXml(data, (err, xmlDoc) => {
      if (err) {
        cb(err);
      }
      // console.log(xmlDoc.module.connectors[0].connector[0].views[0].breadboardView[0].p);

      fzp.moduleId = xmlDoc.module.$.moduleId
      fzp.fritzingVersion = xmlDoc.module.$.fritzingVersion
      if(xmlDoc.module.version) fzp.version = xmlDoc.module.version[0]
      if(xmlDoc.module.title) fzp.title = xmlDoc.module.title[0]
      if(xmlDoc.module.description) fzp.description = xmlDoc.module.description[0]
      if(xmlDoc.module.author) fzp.author = xmlDoc.module.author[0]
      if(xmlDoc.module.date) fzp.date = xmlDoc.module.date[0]
      if(xmlDoc.module.url) fzp.url = xmlDoc.module.url[0]
      if(xmlDoc.module.label) fzp.label = xmlDoc.module.label[0]
      if(xmlDoc.module.tags) fzp.tags = xmlDoc.module.tags[0].tag
      if(xmlDoc.module.taxonomy) fzp.taxonomy = xmlDoc.module.taxonomy
      if(xmlDoc.module.language) fzp.language = xmlDoc.module.language
      if(xmlDoc.module.family) fzp.family = xmlDoc.module.family
      if(xmlDoc.module.variant) fzp.variant = xmlDoc.module.variant
      if(xmlDoc.module.properties) fzp.properties = parseProperties(xmlDoc.module.properties[0].property)

      // console.log(JSON.stringify(xmlDoc.module.properties, '', '  '));
      if(xmlDoc.module.views) {
        if(xmlDoc.module.views[0].iconView) {
          fzp.views.icon.setImage(xmlDoc.module.views[0].iconView[0].layers[0].$.image)
          fzp.views.icon.addLayerId(xmlDoc.module.views[0].iconView[0].layers[0].layer[0].$.layerId)
        }
        if(xmlDoc.module.views[0].breadboardView) {
          fzp.views.breadboard.setImage(xmlDoc.module.views[0].breadboardView[0].layers[0].$.image)
          fzp.views.breadboard.addLayerId(xmlDoc.module.views[0].breadboardView[0].layers[0].layer[0].$.layerId)
        }
        if(xmlDoc.module.views[0].pcbView) {
          fzp.views.pcb.setImage(xmlDoc.module.views[0].pcbView[0].layers[0].$.image)
          fzp.views.pcb.addLayerId(xmlDoc.module.views[0].pcbView[0].layers[0].layer[0].$.layerId)
        }
        if(xmlDoc.module.views[0].schematicView) {
          fzp.views.schematic.setImage(xmlDoc.module.views[0].schematicView[0].layers[0].$.image)
          fzp.views.schematic.addLayerId(xmlDoc.module.views[0].schematicView[0].layers[0].layer[0].$.layerId)
        }
      }

      if(xmlDoc.module.connectors) {
        if (xmlDoc.module.connectors[0].connector) {
          for (var i = 0; i < xmlDoc.module.connectors[0].connector.length; i++) {
            const connector = xmlDoc.module.connectors[0].connector[i]

            let c = new FZPConnector()
            c.id = connector.$.id
            c.name = connector.$.name
            c.type = connector.$.type
            c.description = connector.description[0]
            c.views.breadboard.layer = connector.views[0].breadboardView[0].p[0].$.layer
            c.views.breadboard.svgId = connector.views[0].breadboardView[0].p[0].$.svgId
            c.views.breadboard.legId = connector.views[0].breadboardView[0].p[0].$.legId
            c.views.breadboard.terminalId = connector.views[0].breadboardView[0].p[0].$.terminalId

            fzp.connectors[c.id] = c
          }
        }
      }

      cb(null, fzp)
    })
  }
}

function parseProperties(xml) {
  let data = {}
  for (var i = 0; i < xml.length; i++) {
    data[xml[i].$.name] = {
      value: xml[i]._,
      showInLabel: xml[i].$.showInLabel
    }
  }
  return data
}

module.exports = {
  parseFZP
}
