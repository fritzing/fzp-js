'use strict';

const FZPView = require('../src/fzp/view');

test('Test new FZPView (empty)', () => {
  let fzp = new FZPView();
  expect(fzp.image).toEqual(null);
});

test('Test new FZPView (image name)', () => {
  let fzp = new FZPView('test');
  expect(fzp.image).toEqual('test');
});

test('Test new FZPView', () => {
  let fzp = new FZPView('test', ['breadboard'], true, true);
  expect(fzp.image).toEqual('test');
  fzp.setLayerId('foo');
  expect(fzp.layerIds).toEqual(['breadboard', 'foo']);
  expect(fzp.flipHorizontal).toEqual(true);
  expect(fzp.flipVertical).toEqual(true);
  fzp.setSVG('hello-svg');
  expect(fzp.svg).toEqual('hello-svg');
});

test('Test new FZPView loadSVG', (done) => {
  let fzp = new FZPView('LED-3mm-red-leg.svg');
  expect(fzp.image).toEqual('LED-3mm-red-leg.svg');

  const baseurl = 'https://fritzing.github.io/fritzing-parts/svg/core/breadboard/';
  fzp.loadSVG(baseurl).then((d) => {
    // console.log('SVG-DATA', d);
    expect(d).not.toEqual('');
    done();
  })
  .catch((e) => {
    console.error('ERROR', e);
    done(e);
  });
});
