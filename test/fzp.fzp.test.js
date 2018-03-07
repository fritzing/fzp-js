'use strict';

const FZP = require('../src/fzp/fzp');

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
  fzp.setProperty('test-prop-1', 123, true);
  expect(fzp.properties).toEqual({
    'test-prop-1': {value: 123, showInLabel: true},
  });
  expect(fzp.getProperty('test-prop-1').value).toEqual(123);
  expect(fzp.getProperty('test-prop-1').showInLabel).toEqual(true);
});
