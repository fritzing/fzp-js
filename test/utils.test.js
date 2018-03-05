'use strict';

const {parseFZP, loadFZP, marshalToXML} = require('../src/utils');
const FZP = require('../src/fzp/fzp');
const fs = require('fs');

const FritzingAPI = 'https://fritzing.github.io/fritzing-parts';
const FritzingAPISVGCore = FritzingAPI+'/svg/core/';

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

    expect(fzp.views.pcb.image).toEqual('pcb/3mm_LED.svg');
    expect(fzp.views.pcb.layerIds).toEqual(['copper0', 'copper1', 'keepout', 'outline', 'silkscreen', 'soldermask']);

    expect(fzp.views.schematic.image).toEqual('schematic/led.svg');
    expect(fzp.views.schematic.layerIds).toEqual(['schematic']);

    // testing the connertor
    expect(fzp.connectors['connector0'].name).toEqual('cathode');
    expect(fzp.connectors['connector0'].type).toEqual('male');
    expect(fzp.connectors['connector0'].description).toEqual('cathode pin');

    // console.log('-------------', fzp.connectors['connector0'].views.breadboard);
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

    done();
  })
  .catch((err) => {
    done(err);
  });
});

test('Test loadFZP and loadSVG', (done) => {
  loadFZP(FritzingAPI+'/core/LED-generic-3mm.fzp')
  .then((fzp) => {
    // load the svg of the breadboard view
    fzp.views.breadboard.loadSVG(FritzingAPISVGCore)
    .then((d) => {
        done();
    })
    .catch((err) => {
      done(err);
    });
  })
  .catch((e) => {
    done(e);
  });
});

test('Test loadFZP all SVGs', (done) => {
  loadFZP(FritzingAPI+'/core/LED-generic-3mm.fzp')
  .then((fzp) => {
    fzp.loadSVGs(FritzingAPISVGCore)
    .then((d) => {
      // check if the svg string is not empty
      expect(fzp.views.breadboard.svg).not.toBe('');
      expect(fzp.views.pcb.svg).not.toBe('');
      expect(fzp.views.schematic.svg).not.toBe('');
      done();
    })
    .catch((err) => {
      done(err);
    });
  })
  .catch((e) => {
    done(e);
  });
});

test('Test marshalToXML', (done) => {
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
  done();
});
