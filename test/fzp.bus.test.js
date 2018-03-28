'use strict';

const FZPBus = require('../src/fzp/bus');

describe('FZPBus new', () => {
  test('Test new FZPBus', () => {
    let bus = new FZPBus();
    expect(bus.id).toEqual(null);
    expect(bus.nodeMembers).toHaveLength(0);
    expect(bus.nodeMembers).toEqual([]);
  });
});

describe('FZPBus set', () => {
  test('Test new FZPBus set (with arg object)', () => {
    let bus = new FZPBus();
    bus.set({id: 'test', nodeMembers: [1, 2, 3]});
    expect(bus.id).toEqual('test');
    expect(bus.nodeMembers).toHaveLength(3);
    expect(bus.nodeMembers).toEqual([1, 2, 3]);
  });

  test('Test new FZPBus set (with arg string)', () => {
    let bus = new FZPBus();
    bus.set('test');
    expect(bus.id).toEqual('test');
    expect(bus.nodeMembers).toHaveLength(0);
    expect(bus.nodeMembers).toEqual([]);
  });

  test('Test new FZPBus set (with args string, array)', () => {
    let bus = new FZPBus();
    bus.set('test', [1, 2, 3]);
    expect(bus.id).toEqual('test');
    expect(bus.nodeMembers).toHaveLength(3);
    expect(bus.nodeMembers).toEqual([1, 2, 3]);
  });
});

describe('FZPBus setId, getId', () => {
  test('Test FZPBus setId, getId', () => {
    let bus = new FZPBus();
    bus.setId('b');
    expect(bus.getId()).toEqual('b');
  });
});

describe('FZPBus setNodeMembers, getNodeMembers', () => {
  test('Test FZPBus setNodeMember, getNodeMember', () => {
    let bus = new FZPBus();
    bus.setNodeMember(1);
    expect(bus.totalNodeMembers()).toEqual(1);
    expect(bus.getNodeMembers()).toEqual([1]);
  });
});
