'use strict';

const FZPConnectorView = require('./connector-view');

/**
 * FZPConnector class
 *
 * @example
 * const {FZPConnector} = require('fzp-js')
 *
 * let connector = new FZPConnector({id: 'sample-id', name: 'sample-name'})
 * connector.type = 'sample-type'
 * connector.description = 'sample-description'
 * connector.views.breadboard.setLayer('sample-b-layer')
 * connector.views.breadboard.setSvgId('sample-b-svg')
 * connector.views.breadboard.setLegId('sample-b-leg')
 * connector.views.breadboard.setTerminalId('sample-b-terminal')
 */
class FZPConnector {
  /**
   * FZPConnector constructor
   * @param {Object} opt - the options
   */
  constructor(opt = {views: {pcb: {}}}) {
    /**
     * The id of the FZP connector.
     * @type {String}
     */
    this.id = opt.id || null;

    /**
     * The name of the FZP connector.
     * @type {String}
     */
    this.name = opt.name || null;

    /**
     * The type of the FZP connector
     * @type {String}
     */
    this.type = opt.type || null;

    /**
     * The description of the FZP connector
     * @type {String}
     */
    this.description = opt.description || null;

    /**
     * The FZP connector views for breadboard, schematic and pcb.
     * Note that the pcb view has an object for copper0, copper1 etc.
     */
    this.views = {
      breadboard: new FZPConnectorView(opt.views.breadboard),
      schematic: new FZPConnectorView(opt.views.schematic),
      pcb: {
        copper0: new FZPConnectorView(opt.views.pcb.copper0),
        copper1: new FZPConnectorView(opt.views.pcb.copper1),
      },
    };
  }
}

module.exports = FZPConnector;
