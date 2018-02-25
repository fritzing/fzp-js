/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPView = require('./view');

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

    /** the module id */
    this.moduleId = '12345678';
    /** the fritzing version */
    this.fritzingVersion = '1.0.0';
    /** the FZP version */
    this.version = '';
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
   * totalTags
   * @return {Number}
   */


  _createClass(FZP, [{
    key: 'totalTags',
    value: function totalTags() {
      console.log('not jet implemented');
      return 0;
    }

    /**
     * setProperty
     * @param {String} name
     * @return {FZP}
     */

  }, {
    key: 'setProperty',
    value: function setProperty(name) {
      console.log('not jet implemented');
      return this;
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
  }]);

  return FZP;
}();

module.exports = FZP;