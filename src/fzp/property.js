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
   */
  constructor() {
    /**
     * the property value
     * @type {String}
     */
    this.value = null;

    /**
     * the property showInLabel
     * @type {Boolean}
     */
    this.showInLabel = false;
  }

  /**
  * @param {Object|String} v
  * @param {Boolean} s
  */
  set(v = null, s = false) {
    // let tmp = {value: v, showInLabel: s};
    if (v) {
      switch (typeof v) {
        case 'object':
          this.setValue(v.value);
          this.setShowInLabel(v.showInLabel);
          break;
        case 'string':
          this.setValue(v);
          break;
        default:
          throw new Error(`FZPProperty type('${typeof v}') not supported`);
      }
    }
    if (s) {
      this.setShowInLabel(s);
    }
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
    this.showInLabel = l || false;
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
