'use strict';

/**
 * FZPProperty class
 *
 * @example
 * const {FZPProperty} = require('fzp-js')
 *
 * let property = new FZPProperty()
 */
class FZPProperty {
  /**
   * FZPProperty constructor
   * @param {String} value
   * @param {String} showInLabel
   */
  constructor(value = null, showInLabel = false) {
    /**
     * the property value
     * @type {String}
     */
    this.value = value;

    /**
     * the property showInLabel
     * @type {Boolean}
     */
    this.showInLabel = showInLabel;
  }

  /**
   * Set the FZProperty  value
   * @param {String} val
   */
  setValue(val) {
    this.value = val;
  }

  /**
   * Get the FZProperty  value
   * @return {String}
   */
  getValue() {
    return this.value;
  }

  /**
   * Set the FZProperty showInLabel boolean
   * @param {Boolean} l
   */
  setShowInLabel(l) {
    this.showInLabel = l;
  }

  /**
   * Get the FZProperty showInLabel boolean
   * @return {Boolean}
   */
  getShowInLabel() {
    return this.showInLabel;
  }
}

module.exports = FZPProperty;
