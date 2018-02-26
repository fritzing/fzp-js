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
      pcb: new FZPView(),
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
  totalTags() {
    return this.tags.length;
  }

  /**
   * setTag
   * @param {String} tag
   * @return {FZP}
   */
  addTag(tag) {
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
  addProperty(name, value, showInLabel) {
    this.properties[name] = new FZPProperty(value, showInLabel);
    return this;
  }

  /**
   * Get a fzp property by the name.
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
   * ;oad all svg sources
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
