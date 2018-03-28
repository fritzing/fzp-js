'use strict';

const FZPConnectorView = require('../src/fzp/connector-view');

describe('FZPConnectorView', () => {
  test('Test new FZPConnectorView (empty)', () => {
    let c = new FZPConnectorView();
    expect(c.layer).toEqual(null);
    expect(c.svgId).toEqual(null);
    expect(c.legId).toEqual(null);
    expect(c.terminalId).toEqual(null);
  });

  test('Test new FZPConnectorView', () => {
    const opt = {
      layer: 'lay1',
      svgId: 'svg1',
      legId: 'leg1',
      terminalId: 'ter1',
    };
    let c = new FZPConnectorView(opt);
    expect(c.layer).toEqual('lay1');
    expect(c.svgId).toEqual('svg1');
    expect(c.legId).toEqual('leg1');
    expect(c.terminalId).toEqual('ter1');
  });
});
