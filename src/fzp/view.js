/**
 *
 */
class FZPView {
  /**
   * FZPView constructor
   */
  constructor() {
    /**
     * The FZPView image
     */
    this.image = '';

    /**
     * The FZPView layer id's
     */
    this.layerIds = [];
  }

  /**
   * Set the FZPView image source
   * @param {String} src
   */
  setImage(src) {
    this.image = src;
  }

  /**
   * Get the total number of FZPView layer id's
   * @return {Number}
   */
  totalLayerId() {
    return this.layerIds.length;
  }

  /**
   * Add a layer id to the FZPView
   * @param {String} name
   */
  addLayerId(name) {
    if (!this.existLayerId(name)) {
      this.layerIds.push(name);
    }
  }

  /**
   * Check if a layer id exist at the FZPView layerIds array
   * @param {String} id
   * @return {Boolean}
   */
  existLayerId(id) {
    for (let i = 0; i < this.layerIds.length; i++) {
      if (this.layerIds[i] === id) {
        return true;
      }
    }
    return false;
  }
}

module.exports = FZPView;
