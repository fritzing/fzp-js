const FZPView = require('./view');

/**
 * The FZP class
 */
class FZP {
  /**
   * FZP constructor
   * @param {Object} opt
   */
  constructor(opt) {
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
   * totalTags
   * @return {Number}
   */
  totalTags() {
    console.log('not jet implemented');
    return 0;
  }

  /**
   * setProperty
   * @param {String} name
   * @return {FZP}
   */
  setProperty(name) {
    console.log('not jet implemented');
    return this;
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
   * @return {Promise}
   */
  loadSVGs() {
    return this.views.breadboard.loadSVG()
    .then((d) => {
      return this.views.schematic.loadSVG()
      .then((d) => {
        return this.views.pcb.loadSVG()
        .then((d) => {
          return d;
        });
      });
    });
  }
}

module.exports = FZP;
