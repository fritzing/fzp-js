/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

/**
 * FZPConnectorView class
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPConnectorView =
/**
 * FZPConnectorView constructor
 * @param {Object} opt
 */
function FZPConnectorView() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, FZPConnectorView);

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
};

module.exports = FZPConnectorView;