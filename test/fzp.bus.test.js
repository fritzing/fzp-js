'use strict';

const FZPBus = require('../src/fzp/bus');

test('Test new FZPBus (empty)', () => {
  let bus = new FZPBus();
  expect(bus.id).toEqual(null);
  expect(bus.nodeMembers).toHaveLength(0);
  expect(bus.nodeMembers).toEqual([]);
});

test('Test new FZPBus', () => {
  let bus = new FZPBus({id: 'b', nodeMembers: [1, 2, 3]});
  expect(bus.id).toEqual('b');
  expect(bus.nodeMembers).toHaveLength(3);
  expect(bus.nodeMembers).toEqual([1, 2, 3]);
});

test('Test FZPBus setId, getId', () => {
  let bus = new FZPBus();
  bus.setId('b');
  expect(bus.getId()).toEqual('b');
});

test('Test FZPBus setNodeMember, getNodeMember', () => {
  let bus = new FZPBus();
  bus.setNodeMember(1);
  expect(bus.totalNodeMembers()).toEqual(1);
  expect(bus.getNodeMembers()).toEqual([1]);
});
