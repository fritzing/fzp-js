/**
* BUILD ARTIFACT, DO NOT EDIT BY HAND
**/'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * FZPConnector class
 */
var FZPConnector =
/**
 * FZPConnector constructor
 * @param {Object} opt
 */
function FZPConnector(opt) {
  _classCallCheck(this, FZPConnector);

  /**
   * the FZP connector id
   */
  this.id = '';

  /**
   * the FZP connector name
   */
  this.name = '';

  /**
   * the FZP connector type
   */
  this.type = '';

  /**
   * the FZP connector description
   */
  this.description = '';

  /**
   * the FZP connector views fro breadboard, schematic and pcb
   */
  this.views = {
    breadboard: new FZPConnectorView(),
    schematic: new FZPConnectorView(),
    pcb: new FZPConnectorView()
  };
};

/**
 *
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
   */
  this.layer = opt.layer || '';

  /**
   * the FZP connector view svg
   */
  this.svgId = opt.svgId || '';

  /**
   * the FZP connector view leg
   */
  this.legId = opt.legId || '';

  /**
   * the FZP connector view terminal
   */
  this.terminalId = opt.terminalId || '';
};

module.exports = {
  FZPConnector: FZPConnector,
  FZPConnectorView: FZPConnectorView
};