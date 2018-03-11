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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPProperty = function () {
  /**
   * FZPProperty constructor
   */
  function FZPProperty() {
    _classCallCheck(this, FZPProperty);

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


  _createClass(FZPProperty, [{
    key: 'set',
    value: function set() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // let tmp = {value: v, showInLabel: s};
      if (v) {
        switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
          case 'object':
            this.setValue(v.value);
            this.setShowInLabel(v.showInLabel);
            break;
          case 'string':
            this.setValue(v);
            break;
          default:
            throw new Error('FZPProperty type(\'' + (typeof v === 'undefined' ? 'undefined' : _typeof(v)) + '\') not supported');
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

  }, {
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
      this.showInLabel = l || false;
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