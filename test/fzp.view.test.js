'use strict';

const FZPView = require('../src/fzp/view');

test('Test new FZPView (empty)', () => {
  let fzp = new FZPView();
  expect(fzp.image).toEqual(null);
  expect(fzp.layerIds).toEqual([]);
  expect(fzp.flipHorizontal).toEqual(false);
  expect(fzp.flipVertical).toEqual(false);
  expect(fzp.svg).toEqual(null);
});

test('Test new FZPView (image name)', () => {
  let fzp = new FZPView('test');
  expect(fzp.image).toEqual('test');
  expect(fzp.layerIds).toEqual([]);
  expect(fzp.flipHorizontal).toEqual(false);
  expect(fzp.flipVertical).toEqual(false);
  expect(fzp.svg).toEqual(null);
});

test('Test new FZPView', () => {
  let fzp = new FZPView('test', ['breadboard'], true, true);
  expect(fzp.image).toEqual('test');
  expect(fzp.layerIds).toEqual(['breadboard']);
  expect(fzp.flipHorizontal).toEqual(true);
  expect(fzp.flipVertical).toEqual(true);
  fzp.setLayerId('foo');
  expect(fzp.layerIds).toEqual(['breadboard', 'foo']);
  expect(fzp.existLayerId('foo')).toEqual(true);
  expect(fzp.flipHorizontal).toEqual(true);
  expect(fzp.flipVertical).toEqual(true);
  fzp.setLayerId('foo');
  expect(fzp.totalLayerId()).toEqual(2);
  fzp.setSVG('hello-svg');
  expect(fzp.svg).toEqual('hello-svg');
});

test('Test new FZPView loadSVG', (done) => {
  let fzp = new FZPView('LED-3mm-red-leg.svg');
  expect(fzp.image).toEqual('LED-3mm-red-leg.svg');
  const baseurl = 'https://fritzing.github.io/fritzing-parts/svg/core/breadboard/';
  fzp.loadSVG(baseurl).then((d) => {
    expect(d).not.toEqual('');

    // check the first and the last line
    let lines = d.split('\n');
    expect(lines[0]).toEqual('<?xml version="1.0" encoding="utf-8"?>');
    expect(lines[lines.length-2]).toEqual('</svg>');

    done();
  })
  .catch((e) => {
    console.error('ERROR', e);
    done(e);
  });
});
