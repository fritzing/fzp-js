/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

/**
 * FZPProperty class
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPProperty =
/**
 * FZPProperty constructor
 * @param {String} value
 * @param {String} showInLabel
 */
function FZPProperty(value, showInLabel) {
  _classCallCheck(this, FZPProperty);

  /**
   * the property value
   * @type {String}
   */
  this.value = value || null;

  /**
   * the property showInLabel
   * @type {Boolean}
   */
  this.showInLabel = showInLabel || false;
};

module.exports = FZPProperty;