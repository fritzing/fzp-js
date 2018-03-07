'use strict';

/**
 * FZPConnectorView class
 */
class FZPConnectorView {
  /**
   * FZPConnectorView constructor
   * @param {Object} opt
   */
  constructor(opt) {
    opt = opt || {};

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
}

module.exports = FZPConnectorView;
