'use strict';

const axios = require('axios');

/**
 * FZPView class is used by the fzp breadboard, pcb and schematics view.
 *
 * @example
 * const {FZPView} = require('fzp-js')
 *
 * let view = new FZPView()
 */
class FZPView {
  /**
   * FZPView constructor
   * @param {String} image
   * @param {Array} ids
   * @param {Boolean} flipH
   * @param {Boolean} flipV
   * @param {String} svg The raw svg string
   */
  constructor(image, ids, flipH, flipV, svg) {
    /**
     * The FZPView image
     * @type {String}
     */
    this.image = image || null;

    /**
     * The FZPView layer id's
     * @type {Array}
     */
    this.layerIds = ids || [];

    /**
     * FZPView flip horizontal
     * @type {Boolean}
     */
    this.flipHorizontal = flipH || false;

    /**
     * FZPView flip vertical
     * @type {Boolean}
     */
    this.flipVertical = flipV || false;

    /**
     * The FZPView svg data
     * @type {String}
     */
    this.svg = svg || null;
  }

  /**
   * Set the FZPView image source
   * @param {String} src The image source
   * @return {FZPView}
   */
  setImage(src) {
    this.image = src;
    return this;
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
   * @param {String} name The layer name
   * @return {FZPView}
   */
  setLayerId(name) {
    if (!this.existLayerId(name)) {
      this.layerIds.push(name);
    }
    return this;
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

  /**
   * Set the svg data
   * @param {String} data The SVG data
   * @return {FZPView}
   */
  setSVG(data) {
    this.svg = data;
    return this;
  }

  /**
   * load the svg of the image path from the fritzing-parts api
   * @param {String} baseurl the url to the fritzing-parts/core directory
   * @return {Promise}
   */
  loadSVG(baseurl) {
    let self = this;
    return axios.get(baseurl+this.image, {responseType: 'xml'})
    .then((res) => {
      self.setSVG(res.data);
      return res.data;
    });
  }
}

module.exports = FZPView;
