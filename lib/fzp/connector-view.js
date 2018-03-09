/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

/**
 * FZPConnectorView class
 *
 * @example
 * const {FZPConnectorView} = require('fzp-js')
 *
 * let connectorView = new FZPConnectorView({layer: 'sample', svgId: 'sample.svg'})
 * connectorView.legId = 'sample-leg'
 * connectorView.terminalId = 'sample-terminal'
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPConnectorView = function () {
  /**
   * FZPConnectorView constructor
   * @param {Object} opt
   */
  function FZPConnectorView() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FZPConnectorView);

    /**
     * the FZP connector view layer
     * @type {String}
     */
    this.layer = opt.layer || null;

    /**
     * the FZP connector view svg
     * @type {String}
     */
    this.svgId = opt.svgId || null;

    /**
     * the FZP connector view leg
     * @type {String}
     */
    this.legId = opt.legId || null;

    /**
     * the FZP connector view terminal
     * @type {String}
     */
    this.terminalId = opt.terminalId || null;
  }

  /**
   * @param {String} l
   */


  _createClass(FZPConnectorView, [{
    key: 'setLayer',
    value: function setLayer(l) {
      this.layer = l;
    }

    /**
     * @return {String}
     */

  }, {
    key: 'getLayer',
    value: function getLayer() {
      return this.layer;
    }

    /**
     * @param {String} id
     */

  }, {
    key: 'setSvgId',
    value: function setSvgId(id) {
      this.svgId = id;
    }

    /**
     * @return {String}
     */

  }, {
    key: 'getSvgId',
    value: function getSvgId() {
      return this.svgId;
    }

    /**
     * @param {String} leg
     */

  }, {
    key: 'setLegId',
    value: function setLegId(leg) {
      this.legId = leg;
    }

    /**
     * @return {String}
     */

  }, {
    key: 'getLegId',
    value: function getLegId() {
      return this.legId;
    }

    /**
     * @param {String} term
     */

  }, {
    key: 'setTerminalId',
    value: function setTerminalId(term) {
      this.terminalId = term;
    }

    /**
     * @return {String}
     */

  }, {
    key: 'getTerminalId',
    value: function getTerminalId() {
      return this.terminalId;
    }
  }]);

  return FZPConnectorView;
}();

module.exports = FZPConnectorView;