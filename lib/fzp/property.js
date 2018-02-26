/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * FZPProperty class
 */
var FZPProperty =
/**
 * FZPProperty constructor
 * @param {String} value
 * @param {String} showInLabel
 */
function FZPProperty(value, showInLabel) {
  _classCallCheck(this, FZPProperty);

  /** the property value */
  this.value = value || null;
  /** the property showInLabel */
  this.showInLabel = showInLabel || null;
};

module.exports = FZPProperty;