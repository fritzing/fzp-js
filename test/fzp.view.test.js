'use strict';

const FZPView = require('../src/fzp/view');

describe('FZPView', () => {
  test('Test new FZPView (empty)', () => {
    let fzpView = new FZPView();
    expect(fzpView.image).toEqual(null);
    expect(fzpView.layerIds).toEqual([]);
    expect(fzpView.flipHorizontal).toEqual(false);
    expect(fzpView.flipVertical).toEqual(false);
    expect(fzpView.svg).toEqual(null);
  });

  test('Test new FZPView (image name)', () => {
    let fzpView = new FZPView('test');
    expect(fzpView.image).toEqual('test');
    expect(fzpView.layerIds).toEqual([]);
    expect(fzpView.flipHorizontal).toEqual(false);
    expect(fzpView.flipVertical).toEqual(false);
    expect(fzpView.svg).toEqual(null);
  });

  test('Test new FZPView', () => {
    let fzpView = new FZPView('test', ['breadboard'], true, true);
    expect(fzpView.image).toEqual('test');
    expect(fzpView.layerIds).toEqual(['breadboard']);
    expect(fzpView.flipHorizontal).toEqual(true);
    expect(fzpView.flipVertical).toEqual(true);
    fzpView.setLayerId('foo');
    expect(fzpView.layerIds).toEqual(['breadboard', 'foo']);
    expect(fzpView.existLayerId('foo')).toEqual(true);
    expect(fzpView.flipHorizontal).toEqual(true);
    expect(fzpView.flipVertical).toEqual(true);
    fzpView.setLayerId('foo');
    expect(fzpView.totalLayerId()).toEqual(2);
    fzpView.setSVG('hello-svg');
    expect(fzpView.svg).toEqual('hello-svg');
  });

  test('Test new FZPView loadSVG', (done) => {
    let fzpView = new FZPView('LED-3mm-red-leg.svg');
    expect(fzpView.image).toEqual('LED-3mm-red-leg.svg');
    const baseurl = 'https://fritzing.github.io/fritzing-parts/svg/core/breadboard/';
    fzpView.loadSVG(baseurl).then((d) => {
      expect(d).not.toEqual('');
      expect(fzpView.svg).not.toEqual('');

      // check the first and the last line
      let lines = d.split('\n');
      expect(lines[0]).toEqual('<?xml version="1.0" encoding="utf-8"?>');
      expect(lines[lines.length-2]).toEqual('</svg>');

      done();
    })
    .catch((err) => {
      console.error('ERROR', e);
      done(err);
    });
  });
});
