'use strict';

const FZPView = require('./view');
const FZPProperty = require('./property');

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
class FZP {
  /**
   * FZP constructor has an opt argument object that can be used to setup data at the initialization.
   * @param {Object} opt
   */
  constructor(opt = {}) {
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
      pcb: new FZPView(),
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
  totalTags() {
    return this.tags.length;
  }

  /**
   * Set a tag
   * @param {String} tag
   * @return {FZP}
   */
  setTag(tag) {
    this.tags.push(tag);
    return this;
  }

  /**
   * Get the total number of properties.
   * @return {Number}
   */
  totalProperties() {
    return Object.keys(this.properties).length;
  }

  /**
   * Create or update a FZPProperty instance to the FZP.
   * @param {String} key
   * @param {String} value
   * @param {Boolean} showInLabel
   * @return {FZP}
   */
  setProperty(key, value = null, showInLabel = false) {
    if (!key) {
      throw new Error('Missing first argument at function');
    }
    this.properties[key] = new FZPProperty(value, showInLabel);
    return this;
  }

  /**
   * Get a FZP property by the given key.
   * @param {String} key
   * @return {FZPProperty}
   */
  getProperty(key) {
    if (!key) {
      throw new Error('Missing first argument at function');
    }
    return this.properties[key];
  }

  /**
   * Set a view
   * @param {String} name The name of the view can be 'breadboard', 'pcb', or 'schematic'
   * @param {FZPView} view
   * @return {FZP}
   */
  setView(name, view) {
    console.log('not jet implemented');
    return this;
  }


  /**
   * Get the total number of connector.
   * @return {Number}
   */
  totalConnector() {
    return Object.keys(this.connectors).length;
  }

  /**
   * setConnector
   * @param {String} name
   * @param {FZPConnector} connector
   * @return {FZP}
   */
  setConnector(name, connector) {
    console.log('not jet implemented');
    return this;
  }

  /**
   * Get the total number of buses.
   * @return {Number}
   */
  totalBuses() {
    return Object.keys(this.buses).length;
  }

  /**
   * setBus
   * @param {String} name
   * @param {FZPBus} bus
   * @return {FZP}
   */
  setBus(name, bus) {
    console.log('not jet implemented');
    return this;
  }

  /**
   * Load all SVG sources.
   * @param {String} baseurl
   * @return {FZP}
   */
  loadSVGs(baseurl) {
    return this.views.breadboard.loadSVG(baseurl)
    .then((d) => {
      return this.views.schematic.loadSVG(baseurl)
      .then((d) => {
        return this.views.pcb.loadSVG(baseurl)
        .then((d) => {
          return this;
        });
      });
    });
  }
}

module.exports = FZP;
