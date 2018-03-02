/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPView = require('./view');
var FZPProperty = require('./property');

/**
 * The FZP class
 */

var FZP = function () {
  /**
   * FZP constructor
   * @param {Object} opt
   */
  function FZP(opt) {
    _classCallCheck(this, FZP);

    opt = opt || {};

    /**
     * the module id
     * @type {String}
     */
    this.moduleId = opt.module || '';

    /**
     * the fritzing version
     * @type {String}
     */
    this.fritzingVersion = opt.fritzingVersion || '';

    /**
     * the FZP version
     * @type {String}
     */
    this.version = opt.version || '';

    /**
     * the FZP title
     * @type {String}
     */
    this.title = opt.title || '';

    /**
     * the description
     * @type {String}
     */
    this.description = opt.description || '';

    /**
     * the author
     * @type {String}
     */
    this.author = opt.author || '';

    /**
     * the date
     * @type {String}
     */
    this.date = opt.date || '';

    /**
     * the url
     * @type {String}
     */
    this.url = opt.url || '';

    /**
     * the label
     * @type {String}
     */
    this.label = opt.label || '';

    /**
     * the tags
     * @type {Array}
     */
    this.tags = opt.tags || [];

    /**
     * the taxonomy
     * @type {String}
     */
    this.taxonomy = opt.taxonomy || '';

    /**
     * the language
     * @type {String}
     */
    this.language = opt.language || '';

    /**
     * the family
     * @type {String}
     */
    this.family = opt.family || '';

    /**
     * the variant
     * @type {String}
     */
    this.variant = opt.variant || '';

    /**
     * the properties
     * @type {Object}
     */
    this.properties = opt.properties || {};

    /**
     * the four views (icon, breadboard, schematic, pcb)
     * @type {Object}
     */
    this.views = {
      icon: new FZPView(),
      schematic: new FZPView(),
      breadboard: new FZPView(),
      pcb: new FZPView()
    };

    /**
     * the connectors
     * @type {Object}
     */
    this.connectors = opt.connectors || {};
    /**
     * the buses
     * A bus is a instance of the Bus class
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
     * setTag
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
     * Create or update a FZPProperty instance to the FZP.
     * @param {String} name
     * @param {String} value
     * @param {String} showInLabel
     * @return {FZP}
     */

  }, {
    key: 'setProperty',
    value: function setProperty(name, value, showInLabel) {
      this.properties[name] = new FZPProperty(value, showInLabel);
      return this;
    }

    /**
     * Get a FZP property by the given name.
     * @param {String} name
     * @return {FZPProperty}
     */

  }, {
    key: 'getProperty',
    value: function getProperty(name) {
      return this.properties[name];
    }

    /**
     * setView
     * @param {String} name
     * @param {FZPView} view
     * @return {FZP}
     */

  }, {
    key: 'setView',
    value: function setView(name, view) {
      console.log('not jet implemented');
      return this;
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
      console.log('not jet implemented');
      return this;
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
      console.log('not jet implemented');
      return this;
    }

    /**
     * Load all SVG sources.
     * @param {String} baseurl
     * @return {Promise}
     */

  }, {
    key: 'loadSVGs',
    value: function loadSVGs(baseurl) {
      var _this = this;

      return this.views.breadboard.loadSVG(baseurl).then(function (d) {
        return _this.views.schematic.loadSVG(baseurl).then(function (d) {
          return _this.views.pcb.loadSVG(baseurl).then(function (d) {
            return d;
          });
        });
      });
    }
  }]);

  return FZP;
}();

module.exports = FZP;