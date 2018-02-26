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
    /** the property value */
    this.value = value || null;
    /** the property showInLabel */
    this.showInLabel = showInLabel || null;
  }
}

module.exports = FZPProperty;
