const {parseFZP} = require('../src/utils');
const fs = require('fs');

test( 'Test parseFZP', (done) => {
  const data = fs.readFileSync('./test/fixtures/LED-generic-3mm.fzp');

  parseFZP(data, (err, fzp) => {
    if (err) {
      console.log('ERROR', err);
      throw err;
    }
    // console.log(fzp);
    // console.log(JSON.stringify(fzp, '', '  '));

    expect(fzp.moduleId).toEqual('3mmColorLEDModuleID')
    expect(fzp.fritzingVersion).toEqual('0.1.beta.1396')
    expect(fzp.version).toEqual('4')
    expect(fzp.title).toEqual('Red LED - 3mm')
    expect(fzp.description).toEqual('A generic red LED (~1.8V)')
    expect(fzp.author).toEqual('Stefan Hermann')
    expect(fzp.date).toEqual('2008-10-10')
    expect(fzp.url).toEqual('')
    expect(fzp.label).toEqual('LED')
    expect(fzp.tags).toEqual(["LED", "Red LED", "indicator", "fritzing core"])
    expect(fzp.taxonomy).toEqual('')
    expect(fzp.language).toEqual('')
    expect(fzp.family).toEqual('')
    expect(fzp.variant).toEqual('')
    // expect(fzp.properties).toEqual('')
    // expect(fzp.views).toEqual('')
    //
    expect(fzp.views.icon.image).toEqual('icon/LED-red-5mmicon.svg')
    expect(fzp.views.icon.layerId).toEqual('icon')

    expect(fzp.views.breadboard.image).toEqual('icon/LED-red-5mmicon.svg')
    expect(fzp.views.breadboard.layerId).toEqual('breadboard')

    expect(fzp.views.pcb).toEqual('icon/LED-red-5mmicon.svg')
    expect(fzp.views.pcb.layerId).toEqual('pcb')

    expect(fzp.views.schematic).toEqual('icon/LED-red-5mmicon.svg')
    expect(fzp.views.schematic.layerId).toEqual('schematic')
    done();
  });
});
