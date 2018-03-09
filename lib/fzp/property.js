/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

/**
 * FZPProperty class
 *
 * @example
 * const {FZPProperty} = require('fzp-js')
 *
 * let property = new FZPProperty()
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPProperty = function () {
  /**
   * FZPProperty constructor
   * @param {String} value
   * @param {String} showInLabel
   */
  function FZPProperty() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var showInLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, FZPProperty);

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


  _createClass(FZPProperty, [{
    key: 'setValue',
    value: function setValue(val) {
      this.value = val;
    }

    /**
     * Get the FZProperty  value
     * @return {String}
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.value;
    }

    /**
     * Set the FZProperty showInLabel boolean
     * @param {Boolean} l
     */

  }, {
    key: 'setShowInLabel',
    value: function setShowInLabel(l) {
      this.showInLabel = l;
    }

    /**
     * Get the FZProperty showInLabel boolean
     * @return {Boolean}
     */

  }, {
    key: 'getShowInLabel',
    value: function getShowInLabel() {
      return this.showInLabel;
    }
  }]);

  return FZPProperty;
}();

module.exports = FZPProperty;