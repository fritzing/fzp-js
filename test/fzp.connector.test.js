'use strict';

const FZPConnector = require('../src/fzp/connector');

describe('FZPConnector', () => {
  test('Test new FZPConnector (empty)', () => {
    let c = new FZPConnector();
    expect(c.id).toEqual(null);
    expect(c.name).toEqual(null);
    expect(c.type).toEqual(null);
    expect(c.description).toEqual(null);
  });

  test('Test new FZPConnector', () => {
    const opt = {
      id: 't1',
      name: 'test',
      type: 'testtype',
      description: 'test connector',
      views: {
        breadboard: {
          layer: 'b-layer',
        },
        schematic: {
          layer: 's-layer',
        },
        pcb: {
          copper0: {
            layer: 'copper0',
          },
          copper1: {
            layer: 'copper1',
          },

        },
      },
    };
    let c = new FZPConnector(opt);
    expect(c.id).toEqual('t1');
    expect(c.name).toEqual('test');
    expect(c.type).toEqual('testtype');
    expect(c.description).toEqual('test connector');
    expect(c.views.breadboard.layer).toEqual('b-layer');
    expect(c.views.schematic.layer).toEqual('s-layer');
    expect(c.views.pcb.copper0.layer).toEqual('copper0');
    expect(c.views.pcb.copper1.layer).toEqual('copper1');
  });
});
