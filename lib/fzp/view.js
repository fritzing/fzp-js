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
   * @param {Object} opt
   */
  function FZPView(opt) {
    _classCallCheck(this, FZPView);

    opt = opt || {};

    /**
     * The FZPView image
     */
    this.image = '';

    /**
     * The FZPView layer id's
     */
    this.layerIds = [];

    /**
     * The FZPView svg data
     */
    this.svg = '';
  }

  /**
   * Set the FZPView image source
   * @param {String} src
   */


  _createClass(FZPView, [{
    key: 'setImage',
    value: function setImage(src) {
      this.image = src;
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
     */

  }, {
    key: 'addLayerId',
    value: function addLayerId(name) {
      if (!this.existLayerId(name)) {
        this.layerIds.push(name);
      }
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
     */

  }, {
    key: 'setSVG',
    value: function setSVG(data) {
      this.svg = data;
    }

    /**
     * load the svg of the image path from the fritzing-parts api
     * @return {Promise}
     */

  }, {
    key: 'loadSVG',
    value: function loadSVG() {
      var self = this;
      return axios.get('https://fritzing.github.io/fritzing-parts/svg/core/' + this.image, { responseType: 'xml' }).then(function (res) {
        self.setSVG(res.data);
        return res.data;
      });
    }
  }]);

  return FZPView;
}();

module.exports = FZPView;