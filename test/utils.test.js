'use strict';

const {parseFZP, loadFZP, loadFZPandSVGs, marshalToXML} = require('../src/utils');
const FZP = require('../src/fzp/fzp');
const fs = require('fs');
const {FritzingPartsAPI} = require('fritzing-parts-api-client-js');
const FritzingPartsAPISVGCore = FritzingPartsAPI+'/svg/core/';

const FritzingAPICoreLEDFzp = 'core/LED-generic-3mm.fzp';

test('Test parseFZP', (done) => {
  const data = fs.readFileSync('./test/fixtures/LED-generic-3mm.fzp');
  parseFZP(data)
  .then((fzp) => {
    expect(fzp.moduleId).toEqual('3mmColorLEDModuleID');
    expect(fzp.fritzingVersion).toEqual('0.1.beta.1396');
    expect(fzp.version).toEqual('4');
    expect(fzp.author).toEqual('Stefan Hermann');
    expect(fzp.title).toEqual('Red LED - 3mm');
    expect(fzp.label).toEqual('LED');
    expect(fzp.date).toEqual('2008-10-10');
    expect(fzp.tags).toEqual(['LED', 'Red LED', 'indicator', 'fritzing core']);
    expect(fzp.description).toEqual('A generic red LED (~1.8V)');
    expect(fzp.url).toEqual('');
    expect(fzp.taxonomy).toEqual('');
    expect(fzp.language).toEqual('');
    expect(fzp.family).toEqual('');
    expect(fzp.variant).toEqual('');

    expect(fzp.properties).toEqual({
      package: {value: '3 mm [THT]'},
      family: {value: 'LED'},
      color: {value: 'Red (633nm)', showInLabel: 'yes'},
      current: {showInLabel: 'yes'},
      leg: {value: 'yes'},
    });

    // testing the views
    expect(fzp.views.icon.image).toEqual('icon/LED-red-5mmicon.svg');
    expect(fzp.views.icon.layerIds).toEqual(['icon']);

    expect(fzp.views.breadboard.image).toEqual('breadboard/LED-3mm-red-leg.svg');
    expect(fzp.views.breadboard.layerIds).toEqual(['breadboard']);
    expect(fzp.views.breadboard.flipHorizontal).toEqual(false);
    expect(fzp.views.breadboard.flipVertical).toEqual(false);

    expect(fzp.views.pcb.image).toEqual('pcb/3mm_LED.svg');
    expect(fzp.views.pcb.layerIds).toEqual(['copper0', 'copper1', 'keepout', 'outline', 'silkscreen', 'soldermask']);

    expect(fzp.views.schematic.image).toEqual('schematic/led.svg');
    expect(fzp.views.schematic.layerIds).toEqual(['schematic']);

    // testing the connertor
    expect(fzp.connectors['connector0'].name).toEqual('cathode');
    expect(fzp.connectors['connector0'].type).toEqual('male');
    expect(fzp.connectors['connector0'].description).toEqual('cathode pin');

    expect(fzp.connectors['connector0'].views.breadboard.layer).toEqual('breadboard');
    expect(fzp.connectors['connector0'].views.breadboard.svgId).toEqual('connector0pin');
    expect(fzp.connectors['connector0'].views.breadboard.legId).toEqual('connector0leg');

    expect(fzp.connectors['connector0'].views.schematic.layer).toEqual('schematic');
    expect(fzp.connectors['connector0'].views.schematic.svgId).toEqual('connector0pin');
    expect(fzp.connectors['connector0'].views.schematic.terminalId).toEqual('connector0terminal');

    expect(fzp.connectors['connector0'].views.pcb.copper0.layer).toEqual('copper0');
    expect(fzp.connectors['connector0'].views.pcb.copper0.svgId).toEqual('connector0pad');
    expect(fzp.connectors['connector0'].views.pcb.copper1.layer).toEqual('copper1');
    expect(fzp.connectors['connector0'].views.pcb.copper1.svgId).toEqual('connector0pad');

    expect(fzp.buses).toEqual({});

    done();
  })
  .catch((err) => {
    done(err);
  });
});

describe('loadFZP', () => {
  test('Test loadFZP', (done) => {
    loadFZP(FritzingAPICoreLEDFzp)
    .then((fzp) => {
      expect(fzp.moduleId).toEqual('3mmColorLEDModuleID');
      // console.log(fzp);
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Test loadFZP and loadSVG', (done) => {
    loadFZP(FritzingAPICoreLEDFzp)
    .then((fzp) => {
      // load the svg of the breadboard view
      fzp.views.breadboard.loadSVG(FritzingPartsAPISVGCore)
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Test loadFZP and all SVGs', (done) => {
    loadFZP(FritzingAPICoreLEDFzp)
    .then((fzp) => {
      fzp.loadSVGs(FritzingPartsAPISVGCore)
      .then(() => {
        // check if the svg string is not empty
        expect(fzp.views.breadboard.svg).not.toEqual('');
        expect(fzp.views.pcb.svg).not.toEqual('');
        expect(fzp.views.schematic.svg).not.toEqual('');
        done();
      })
      .catch((err) => {
        done(err);
      });
    })
    .catch((err) => {
      done(err);
    });
  });
});

describe('loadFZPandSVGs', () => {
  test('Test loadFZPandSVGs', (done) => {
    loadFZPandSVGs(FritzingAPICoreLEDFzp)
    .then((fzp) => {
      // check if the svg string is not empty
      expect(fzp.views.breadboard.svg).not.toEqual('');
      expect(fzp.views.pcb.svg).not.toEqual('');
      expect(fzp.views.schematic.svg).not.toEqual('');
      done();
    })
    .catch((err) => {
      console.log('ERROR', err);
      done(err);
    });
  });
});

describe('marshalToXML', () => {
  test('Test marshalToXML', () => {
    let fzp = new FZP();
    fzp.moduleId = 'test-moduleId';
    fzp.fritzingVersion = 'test-fritzingVersion';
    fzp.version = 'test-version';
    fzp.title = 'test-title';
    fzp.description = 'test-description';
    fzp.author = 'test-author';
    fzp.date = 'test-date';
    fzp.url = 'test-url';
    fzp.label = 'test-label';
    fzp.taxonomy = 'test-taxonomy';
    fzp.language = 'test-language';
    fzp.family = 'test-family';
    fzp.variant = 'test-variant';
    fzp.properties = 'test-properties';
    fzp.views.icon.image = 'test-views-icon-image';
    fzp.views.breadboard.image = 'test-views-breadboard-image';
    fzp.views.schematic.image = 'test-views-schematic-image';
    fzp.views.pcb.image = 'test-views-pcb-image';
    let xml = marshalToXML(fzp);

    // check if the generated xml is not empty
    expect(xml).not.toEqual('');
    // console.log(xml);

    // TODO: call 'parseFZP'
    // TODO: check if data is equal to the fzp from above
  });

  test('Test marshalToXML from loaded part', (done) => {
    loadFZP(FritzingAPICoreLEDFzp)
    .then((fzp) => {
      let xml = marshalToXML(fzp);
      expect(xml).toEqual(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<module moduleId="3mmColorLEDModuleID" fritzingVersion="0.1.beta.1396">
  <version>4</version>
  <title>Red LED - 3mm</title>
  <author>Stefan Hermann</author>
  <label>LED</label>
  <date>2008-10-10</date>
  <tags>
    <tag>LED</tag>
    <tag>Red LED</tag>
    <tag>indicator</tag>
    <tag>fritzing core</tag>
  </tags>
  <description>A generic red LED (~1.8V)</description>
  <views/>
  <connectors/>
</module>`);

// TODO: finish the xml marshaller
//
// <properties>
//   <property name="package">3 mm [THT]</property>
//   <property name="family">LED</property>
//   <property name="color" showInLabel="yes">Red (633nm)</property>
//   <property name="current" showInLabel="yes"></property>
//   <property name="leg" >yes</property>
// </properties>
// <description>A generic red LED (~1.8V)</description>
// <views>
//   <iconView>
//     <layers image="icon/LED-red-5mmicon.svg">
//       <layer layerId="icon"/>
//     </layers>
//   </iconView>
//   <breadboardView fliphorizontal="true" flipvertical="true">
//     <layers image="breadboard/LED-3mm-red-leg.svg">
//       <layer layerId="breadboard"/>
//     </layers>
//   </breadboardView>
//   <schematicView>
//     <layers image="schematic/led.svg">
//       <layer layerId="schematic"/>
//     </layers>
//   </schematicView>
//   <pcbView>
//     <layers image="pcb/3mm_LED.svg">
//       <layer layerId="copper0"/>
//       <layer layerId="copper1"/>
//       <layer layerId="keepout"/>
//       <layer layerId="outline"/>
//       <layer layerId="silkscreen"/>
//       <layer layerId="soldermask"/>
//     </layers>
//   </pcbView>
// </views>
// <connectors>
//   <connector id="connector0" name="cathode" type="male">
//     <description>cathode pin</description>
//     <views>
//       <breadboardView>
//         <p layer="breadboard" svgId="connector0pin"  legId="connector0leg"/>
//       </breadboardView>
//       <schematicView>
//         <p layer="schematic" svgId="connector0pin" terminalId="connector0terminal"/>
//       </schematicView>
//       <pcbView>
//         <p layer="copper0" svgId="connector0pad"/>
//         <p layer="copper1" svgId="connector0pad"/>
//       </pcbView>
//     </views>
//   </connector>
//   <connector id="connector1" name="anode" type="male">
//     <description>anode pin</description>
//     <views>
//       <breadboardView>
//         <p layer="breadboard" svgId="connector1pin"  legId="connector1leg"/>
//       </breadboardView>
//       <schematicView>
//         <p layer="schematic" svgId="connector1pin" terminalId="connector1terminal"/>
//       </schematicView>
//       <pcbView>
//         <p layer="copper0" svgId="connector1pad"/>
//         <p layer="copper1" svgId="connector1pad"/>
//       </pcbView>
//     </views>
//   </connector>
// </connectors>

      done();
    })
    .catch((err) => {
      done(err);
    });
  });
});
