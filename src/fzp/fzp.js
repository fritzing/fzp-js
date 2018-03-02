'use strict';

const FZPView = require('./view');
const FZPProperty = require('./property');

/**
 * The FZP class
 */
class FZP {
  /**
   * FZP constructor
   * @param {Object} opt
   */
  constructor(opt) {
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
      pcb: new FZPView(),
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
  totalTags() {
    return this.tags.length;
  }

  /**
   * setTag
   * @param {String} tag
   * @return {FZP}
   */
  setTag(tag) {
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
  setProperty(name, value, showInLabel) {
    this.properties[name] = new FZPProperty(value, showInLabel);
    return this;
  }

  /**
   * Get a FZP property by the given name.
   * @param {String} name
   * @return {FZPProperty}
   */
  getProperty(name) {
    return this.properties[name];
  }

  /**
   * setView
   * @param {String} name
   * @param {FZPView} view
   * @return {FZP}
   */
  setView(name, view) {
    console.log('not jet implemented');
    return this;
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
   * @return {Promise}
   */
  loadSVGs(baseurl) {
    return this.views.breadboard.loadSVG(baseurl)
    .then((d) => {
      return this.views.schematic.loadSVG(baseurl)
      .then((d) => {
        return this.views.pcb.loadSVG(baseurl)
        .then((d) => {
          return d;
        });
      });
    });
  }
}

module.exports = FZP;
