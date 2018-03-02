'use strict';

/**
 * FZPProperty class
 */
class FZPProperty {
  /**
   * FZPProperty constructor
   * @param {String} value
   * @param {String} showInLabel
   */
  constructor(value, showInLabel) {
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
  }
}

module.exports = FZPProperty;
