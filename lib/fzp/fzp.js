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
    /** the module id */
    this.moduleId = opt.module || '';
    /** the fritzing version */
    this.fritzingVersion = opt.fritzingVersion || '';
    /** the FZP version */
    this.version = opt.version || '';
    /** the FZP title */
    this.title = '';
    /** the description */
    this.description = '';
    /** the author */
    this.author = '';
    /** the date */
    this.date = '';
    /** the url */
    this.url = '';
    /** the label */
    this.label = '';
    /** the tags */
    this.tags = [];
    /** the taxonomy */
    this.taxonomy = '';
    /** the language */
    this.language = '';
    /** the family */
    this.family = '';
    /** the variant */
    this.variant = '';
    /** the properties */
    this.properties = {};
    /** the views */
    this.views = {
      icon: new FZPView(),
      schematic: new FZPView(),
      breadboard: new FZPView(),
      pcb: new FZPView()
    };
    /** the connectors */
    this.connectors = {};
    /**
     * the buses
     * A bus is a instance of the Bus class
     */
    this.buses = {};
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
    key: 'addTag',
    value: function addTag(tag) {
      this.tags.push(tag);
      return this;
    }

    /**
     * Add a property to the fzp instance.
     * @param {String} name
     * @param {String} value
     * @param {String} showInLabel
     * @return {FZP}
     */

  }, {
    key: 'addProperty',
    value: function addProperty(name, value, showInLabel) {
      this.properties[name] = new FZPProperty(value, showInLabel);
      return this;
    }

    /**
     * Get a fzp property by the name.
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
     * ;oad all svg sources
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