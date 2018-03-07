'use strict';

const FZPProperty = require('../src/fzp/property');

test('Test new FZPProperty (empty)', () => {
  let c = new FZPProperty();
  expect(c.value).toEqual(null);
  expect(c.showInLabel).toEqual(false);
});

test('Test new FZPProperty', () => {
  let c = new FZPProperty('lay1', true);
  expect(c.value).toEqual('lay1');
  expect(c.showInLabel).toEqual(true);
});
