/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

/**
 * FZP Bus class
 *
 * @example
 * const {FZBus} = require('fzp-js')
 *
 * let bus = new FZBus()
 * bus.setId('sample')
 * bus.setModeMember('mode')
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPBus = function () {
  /**
   * FZPBus constructor
   */
  function FZPBus() {
    _classCallCheck(this, FZPBus);

    /**
     * Store the FZP bus id
     * @type {String}
     */
    this.id = null;

    /**
     * Store the FZP node members as an array
     * @type {Array}
     */
    this.nodeMembers = [];
  }

  /**
   * @param {Object|String} v
   * @param {Array} m
   */


  _createClass(FZPBus, [{
    key: 'set',
    value: function set(v, m) {
      if (v) {
        switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
          case 'object':
            if (v.id) {
              this.setId(v.id);
            }
            if (v.nodeMembers) {
              this.setNodeMember(v.nodeMembers);
            }
            return;

          case 'string':
            this.setId(v);
            break;

          default:
            throw new Error('FZPBus type (\'' + (typeof v === 'undefined' ? 'undefined' : _typeof(v)) + '\') for argument one not supported');
        }
      }

      if (m) {
        switch (typeof m === 'undefined' ? 'undefined' : _typeof(m)) {
          case 'object':
            this.setNodeMember(m);
            break;
          default:
            throw new Error('FZPBus type (\'' + (typeof m === 'undefined' ? 'undefined' : _typeof(m)) + '\') for argument one not supported');
        }
      }
    }

    /**
     * Set the FZP bus id
     * @param {String} id
     * @return {FZPBus}
     */

  }, {
    key: 'setId',
    value: function setId(id) {
      this.id = id;
      return this;
    }

    /**
     * Return the id
     * @return {String}
     */

  }, {
    key: 'getId',
    value: function getId() {
      return this.id;
    }

    /**
     * add a new node member if not exist
     * @param {String} m
     * @return {FZPBus}
     */

  }, {
    key: 'setNodeMember',
    value: function setNodeMember(m) {
      switch (typeof m === 'undefined' ? 'undefined' : _typeof(m)) {
        case 'object':
          this.nodeMembers = m;
          break;
        case 'string':
        case 'number':
          if (!this.existModeMember(m)) {
            this.nodeMembers.push(m);
          }
          break;
        default:
          throw new Error('FZPBus nodeMember type (\'' + (typeof m === 'undefined' ? 'undefined' : _typeof(m)) + '\') not supported');
      }
      return this;
    }

    /**
     * Return the nodeMembers array
     * @return {Array}
     */

  }, {
    key: 'getNodeMembers',
    value: function getNodeMembers() {
      return this.nodeMembers;
    }

    /**
     * Return the total number of nodeMembers
     * @return {Number}
     */

  }, {
    key: 'totalNodeMembers',
    value: function totalNodeMembers() {
      return this.nodeMembers.length;
    }

    /**
     * check if the given node member name does not exist at the nodeMembers array
     * @param {String} m
     * @return {Boolean}
     */

  }, {
    key: 'existModeMember',
    value: function existModeMember(m) {
      for (var i = 0; i < this.nodeMembers.length; i++) {
        if (this.nodeMembers[i] === m) {
          return true;
        }
      }
      return false;
    }
  }]);

  return FZPBus;
}();

module.exports = FZPBus;