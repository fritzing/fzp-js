'use strict';

const FZPProperty = require('../src/fzp/property');

describe('FZPProperty new', () => {
  test('Test new FZPProperty (empty)', () => {
    let prop = new FZPProperty();
    expect(prop.value).toEqual(null);
    expect(prop.showInLabel).toEqual(false);
  });
});

describe('FZPProperty set', () => {
  test('Test FZPProperty set (with one arg)', () => {
    let prop = new FZPProperty();
    prop.set('lay-test-1');
    expect(prop.value).toEqual('lay-test-1');
    expect(prop.showInLabel).toEqual(false);
  });

  test('Test FZPProperty set (with args)', () => {
    let prop = new FZPProperty();
    prop.set('lay-test-2', true);
    expect(prop.value).toEqual('lay-test-2');
    expect(prop.showInLabel).toEqual(true);
  });

  test('Test FZPProperty set (object)', () => {
    let prop = new FZPProperty();
    prop.set({value: 'lay-test-3', showInLabel: true});
    expect(prop.value).toEqual('lay-test-3');
    expect(prop.showInLabel).toEqual(true);
  });
});
