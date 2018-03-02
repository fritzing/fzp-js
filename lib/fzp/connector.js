/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

/**
 * FZPConnector class
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FZPConnector =
/**
 * FZPConnector constructor
 * @param {Object} opt - the options
 */
function FZPConnector(opt) {
  _classCallCheck(this, FZPConnector);

  /**
   * The id of the FZP connector.
   * @type {String}
   */
  this.id = null;

  /**
   * The name of the FZP connector.
   * @type {String}
   */
  this.name = null;

  /**
   * The type of the FZP connector
   * @type {String}
   */
  this.type = null;

  /**
   * The description of the FZP connector
   * @type {String}
   */
  this.description = null;

  /**
   * The FZP connector views for breadboard, schematic and pcb.
   * Note that the pcb view has an object for copper0, copper1 etc.
   */
  this.views = {
    breadboard: new FZPConnectorView(),
    schematic: new FZPConnectorView(),
    pcb: {
      copper0: new FZPConnectorView(),
      copper1: new FZPConnectorView()
      // keepout: new FZPConnectorView(), TODO: check what kind of layers we needs
      // outline: new FZPConnectorView(),
      // silkscreen: new FZPConnectorView(),
      // soldermask: new FZPConnectorView(),
    }
  };
};

/**
 * FZPConnectorView class
 */


var FZPConnectorView =
/**
 * FZPConnectorView constructor
 * @param {Object} opt
 */
function FZPConnectorView(opt) {
  _classCallCheck(this, FZPConnectorView);

  opt = opt || {};

  /**
   * the FZP connector view layer
   * @type {String}
   */
  this.layer = opt.layer || null;

  /**
   * the FZP connector view svg
   * @type {String}
   */
  this.svgId = opt.svgId || null;

  /**
   * the FZP connector view leg
   * @type {String}
   */
  this.legId = opt.legId || null;

  /**
   * the FZP connector view terminal
   * @type {String}
   */
  this.terminalId = opt.terminalId || null;
};

module.exports = {
  FZPConnector: FZPConnector,
  FZPConnectorView: FZPConnectorView
};