const {parseFZP, loadFZP} = require('../src/utils');
const fs = require('fs');

test( 'Test parseFZP', (done) => {
  const data = fs.readFileSync('./test/fixtures/LED-generic-3mm.fzp');
  parseFZP(data)
  .then((fzp) => {
    // console.log(JSON.stringify(fzp, '', '  '));
    expect(fzp.moduleId).toEqual('3mmColorLEDModuleID');
    expect(fzp.fritzingVersion).toEqual('0.1.beta.1396');
    expect(fzp.version).toEqual('4');
    expect(fzp.title).toEqual('Red LED - 3mm');
    expect(fzp.description).toEqual('A generic red LED (~1.8V)');
    expect(fzp.author).toEqual('Stefan Hermann');
    expect(fzp.date).toEqual('2008-10-10');
    expect(fzp.url).toEqual('');
    expect(fzp.label).toEqual('LED');
    expect(fzp.tags).toEqual(['LED', 'Red LED', 'indicator', 'fritzing core']);
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

    expect(fzp.views.icon.image).toEqual('icon/LED-red-5mmicon.svg');
    expect(fzp.views.icon.layerIds).toEqual(['icon']);
    //
    // expect(fzp.views.breadboard.image).toEqual('breadboard/LED-3mm-red-leg.svg')
    // expect(fzp.views.breadboard.layerIds).toEqual(['breadboard'])

    // expect(fzp.views.pcb).toEqual('pcb/LED-red-5mmicon.svg')
    // expect(fzp.views.pcb.layerIds).toEqual('pcb')

    // expect(fzp.views.schematic).toEqual('schematic/led.svg')
    // expect(fzp.views.schematic.layerIds).toEqual(['schematic'])
    done();
  })
  .catch((err) => {
    done(err);
  });
});

test( 'Test loadFZP and loadSVG', (done) => {
  loadFZP('https://fritzing.github.io/fritzing-parts/core/LED-generic-3mm.fzp')
  .then((fzp) => {
    // load the svg of the breadboard view
    fzp.views.breadboard.loadSVG('foo')
    .then((d) => {
        // console.log('SVG', d);
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
