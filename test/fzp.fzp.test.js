'use strict';

const FZP = require('../src/fzp/fzp');

describe('FZP', () => {
  test('Test new FZP (empty)', () => {
    let fzp = new FZP();
    expect(fzp.version).toEqual('0.0.0');
  });

  test('Test new FZP (version)', () => {
    let fzp = new FZP({version: 'test'});
    expect(fzp.version).toEqual('test');
  });

  test('Test FZP setTag, totalTags', () => {
    let fzp = new FZP();
    fzp.setTag('test-tag-1');
    fzp.setTag('test-tag-2');
    expect(fzp.totalTags()).toEqual(2);
    expect(fzp.tags).toEqual(['test-tag-1', 'test-tag-2']);
  });

  test('Test FZP setProperty, getProperty', () => {
    let fzp = new FZP();
    fzp.setProperty('test-prop-1', 'abc', true);
    expect(fzp.getProperty('test-prop-1').value).toEqual('abc');
    expect(fzp.getProperty('test-prop-1').showInLabel).toEqual(true);
  });
});
