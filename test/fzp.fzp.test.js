const FZP = require('../src/fzp/fzp');

test('Test new FZP', () => {
  let fzp = new FZP({version: 'test'});
  expect(fzp.version).toEqual('test');
});

test('Test FZP tags', () => {
  let fzp = new FZP();
  fzp.addTag('test-tag-1');
  fzp.addTag('test-tag-2');
  expect(fzp.totalTags()).toEqual(2);
  expect(fzp.tags).toEqual(['test-tag-1', 'test-tag-2']);
});

test('Test FZP properties', () => {
  let fzp = new FZP();
  fzp.addProperty('test-prop-1', 123, true);
  expect(fzp.properties).toEqual({
    'test-prop-1': {value: 123, showInLabel: true},
  });
  expect(fzp.getProperty('test-prop-1').value).toEqual(123);
  expect(fzp.getProperty('test-prop-1').showInLabel).toEqual(true);
});
