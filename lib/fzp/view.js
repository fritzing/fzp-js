/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

/**
 * FZPView class
 */

var FZPView = function () {
  /**
   * FZPView constructor
   * @param {String} image
   * @param {Array} ids
   * @param {Boolean} flipH
   * @param {Boolean} flipV
   */
  function FZPView(image, ids, flipH, flipV) {
    _classCallCheck(this, FZPView);

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
    this.fliphorizontal = flipH || false;

    /**
     * FZPView flip vertical
     * @type {Boolean}
     */
    this.flipvertical = flipV || false;

    /**
     * The FZPView svg data
     * @type {String}
     */
    this.svg = null;
  }

  /**
   * Set the FZPView image source
   * @param {String} src
   * @return {FZPView}
   */


  _createClass(FZPView, [{
    key: 'setImage',
    value: function setImage(src) {
      this.image = src;
      return this;
    }

    /**
     * Get the total number of FZPView layer id's
     * @return {Number}
     */

  }, {
    key: 'totalLayerId',
    value: function totalLayerId() {
      return this.layerIds.length;
    }

    /**
     * Add a layer id to the FZPView
     * @param {String} name
     * @return {FZPView}
     */

  }, {
    key: 'addLayerId',
    value: function addLayerId(name) {
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

  }, {
    key: 'existLayerId',
    value: function existLayerId(id) {
      for (var i = 0; i < this.layerIds.length; i++) {
        if (this.layerIds[i] === id) {
          return true;
        }
      }
      return false;
    }

    /**
     * Set the svg data
     * @param {String} data
     * @return {FZPView}
     */

  }, {
    key: 'setSVG',
    value: function setSVG(data) {
      this.svg = data;
      return this;
    }

    /**
     * load the svg of the image path from the fritzing-parts api
     * @param {String} baseurl
     * @return {Promise}
     */

  }, {
    key: 'loadSVG',
    value: function loadSVG(baseurl) {
      var self = this;
      return axios.get(baseurl + this.image, { responseType: 'xml' }).then(function (res) {
        self.setSVG(res.data);
        return res.data;
      });
    }
  }]);

  return FZPView;
}();

module.exports = FZPView;