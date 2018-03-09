'use strict';

/**
 * FZPConnectorView class
 *
 * @example
 * const {FZPConnectorView} = require('fzp-js')
 *
 * let connectorView = new FZPConnectorView({layer: 'sample', svgId: 'sample.svg'})
 * connectorView.legId = 'sample-leg'
 * connectorView.terminalId = 'sample-terminal'
 */
class FZPConnectorView {
  /**
   * FZPConnectorView constructor
   * @param {Object} opt
   */
  constructor(opt = {}) {
    /**
     * the FZP connector view layer
     * @type {String}
     */
    this.layer = opt.layer || null;

    /**
     * the FZP connector view svg
     * @type {String}
     */
    this.svgId = opt.svgId || null;

    /**
     * the FZP connector view leg
     * @type {String}
     */
    this.legId = opt.legId || null;

    /**
     * the FZP connector view terminal
     * @type {String}
     */
    this.terminalId = opt.terminalId || null;
  }

  /**
   * @param {String} l
   */
  setLayer(l) {
    this.layer = l;
  }

  /**
   * @return {String}
   */
  getLayer() {
    return this.layer;
  }

  /**
   * @param {String} id
   */
  setSvgId(id) {
    this.svgId = id;
  }

  /**
   * @return {String}
   */
  getSvgId() {
    return this.svgId;
  }

  /**
   * @param {String} leg
   */
  setLegId(leg) {
    this.legId = leg;
  }

  /**
   * @return {String}
   */
  getLegId() {
    return this.legId;
  }

  /**
   * @param {String} term
   */
  setTerminalId(term) {
    this.terminalId = term;
  }

  /**
   * @return {String}
   */
  getTerminalId() {
    return this.terminalId;
  }
}

module.exports = FZPConnectorView;
