/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPView = require('./view');
var FZPProperty = require('./property');

/**
 * The FZP class is the main fzp data entry.
 * Here you can access the main data properties/objects and some utility functions
 * can be used to load svgs as string, count the total number of connections or set a connector.
 *
 * @example
 * const {FZP} = require('fzp-js')
 *
 * let fzp = new FZP({moduleId: 'sample'})
 * fzp.version = '1.0.0'
 * fzp.setTag('demo')
 * fzp.setProperty('p', 'hello', true)
 * fzp.setView()
 * fzp.setConnector()
 * fzp.setBus()
 */

var FZP = function () {
  /**
   * FZP constructor has an opt argument object that can be used to setup data at the initialization.
   * @param {Object} opt
   */
  function FZP() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FZP);

    /**
     * The FZP module id
     * @type {String}
     */
    this.moduleId = opt.module || '';

    /**
     * The FZP fritzing version
     * @type {String}
     */
    this.fritzingVersion = opt.fritzingVersion || '';

    /**
     * The FZP version
     * @type {String}
     */
    this.version = opt.version || '0.0.0';

    /**
     * The FZP title
     * @type {String}
     */
    this.title = opt.title || '';

    /**
     * The FZP description
     * @type {String}
     */
    this.description = opt.description || '';

    /**
     * The FZP author
     * @type {String}
     */
    this.author = opt.author || '';

    /**
     * The FZP date
     * @type {String}
     */
    this.date = opt.date || '';

    /**
     * The FZP url
     * @type {String}
     */
    this.url = opt.url || '';

    /**
     * The FZP label
     * @type {String}
     */
    this.label = opt.label || '';

    /**
     * The FZP tags
     * @type {Array}
     */
    this.tags = opt.tags || [];

    /**
     * The FZP taxonomy
     * @type {String}
     */
    this.taxonomy = opt.taxonomy || '';

    /**
     * The FZP language
     * @type {String}
     */
    this.language = opt.language || '';

    /**
     * The FZP family
     * @type {String}
     */
    this.family = opt.family || '';

    /**
     * The FZP variant
     * @type {String}
     */
    this.variant = opt.variant || '';

    /**
     * The FZP properties
     * @type {Object}
     */
    this.properties = opt.properties || {};

    /**
     * The FZP views (icon, breadboard, schematic, pcb)
     * @type {Object}
     */
    this.views = {
      icon: new FZPView(),
      schematic: new FZPView(),
      breadboard: new FZPView(),
      pcb: new FZPView()
    };

    /**
     * The FZP connectors
     * @type {Object}
     */
    this.connectors = opt.connectors || {};
    /**
     * The FZP buses is a map with instances of the Bus class.
     * @type {Object}
     */
    this.buses = opt.buses || {};
  }

  /**
   * Get the total number of tags.
   * @return {Number}
   */


  _createClass(FZP, [{
    key: 'totalTags',
    value: function totalTags() {
      return this.tags.length;
    }

    /**
     * Set a tag
     * @param {String} tag
     * @return {FZP}
     */

  }, {
    key: 'setTag',
    value: function setTag(tag) {
      this.tags.push(tag);
      return this;
    }

    /**
     * Get the total number of properties.
     * @return {Number}
     */

  }, {
    key: 'totalProperties',
    value: function totalProperties() {
      return Object.keys(this.properties).length;
    }

    /**
     * Create or update a FZPProperty instance to the FZP.
     * @param {String} key
     * @param {String} value
     * @param {Boolean} showInLabel
     * @return {FZP}
     */

  }, {
    key: 'setProperty',
    value: function setProperty(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var showInLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!key) {
        throw new Error('Missing first argument at function');
      }
      this.properties[key] = new FZPProperty();
      this.properties[key].set(value, showInLabel);
      return this;
    }

    /**
     * Get a FZP property by the given key.
     * @param {String} key
     * @return {FZPProperty}
     */

  }, {
    key: 'getProperty',
    value: function getProperty(key) {
      if (!key) {
        throw new Error('Missing first argument at function', key);
      }
      return this.properties[key];
    }

    /**
     * Set a view
     * @param {String} name The name of the view can be 'breadboard', 'pcb', or 'schematic'
     * @param {FZPView} view
     * @return {FZP}
     */

  }, {
    key: 'setView',
    value: function setView(name, view) {
      console.log('not jet implemented', name, view);
      return this;
    }

    /**
     * Get the total number of connector.
     * @return {Number}
     */

  }, {
    key: 'totalConnector',
    value: function totalConnector() {
      return Object.keys(this.connectors).length;
    }

    /**
     * setConnector
     * @param {String} name
     * @param {FZPConnector} connector
     * @return {FZP}
     */

  }, {
    key: 'setConnector',
    value: function setConnector(name, connector) {
      console.log('not jet implemented', name, connector);
      return this;
    }

    /**
     * Get the total number of buses.
     * @return {Number}
     */

  }, {
    key: 'totalBuses',
    value: function totalBuses() {
      return Object.keys(this.buses).length;
    }

    /**
     * setBus
     * @param {String} name
     * @param {FZPBus} bus
     * @return {FZP}
     */

  }, {
    key: 'setBus',
    value: function setBus(name, bus) {
      console.log('not jet implemented', name, bus);
      return this;
    }

    /**
     * Load all SVG sources.
     * @param {String} baseurl
     * @return {FZP}
     */

  }, {
    key: 'loadSVGs',
    value: function loadSVGs(baseurl) {
      var _this = this;

      return this.views.breadboard.loadSVG(baseurl).then(function () {
        return _this.views.schematic.loadSVG(baseurl).then(function () {
          return _this.views.pcb.loadSVG(baseurl).then(function () {
            return _this;
          });
        });
      });
    }
  }]);

  return FZP;
}();

module.exports = FZP;