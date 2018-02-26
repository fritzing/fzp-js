const axios = require('axios');

/**
 * FZPView class
 */
class FZPView {
  /**
   * FZPView constructor
   * @param {String} image
   * @param {Array} ids
   */
  constructor(image, ids) {
    /** The FZPView image */
    this.image = image || '';
    /** The FZPView layer id's */
    this.layerIds = ids || [];
    /** The FZPView svg data */
    this.svg = '';
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

  /**
   * Set the svg data
   * @param {String} data
   */
  setSVG(data) {
    this.svg = data;
  }

  /**
   * load the svg of the image path from the fritzing-parts api
   * @param {String} baseurl
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
