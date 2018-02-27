/**
 * FZPConnector class
 */
class FZPConnector {
  /**
   * FZPConnector constructor
   * @param {Object} opt
   */
  constructor(opt) {
    /** The id of the FZP connector. */
    this.id = '';

    /** The name of the FZP connector. */
    this.name = '';

    /** The type of the FZP connector */
    this.type = '';

    /** The description of the FZP connector */
    this.description = '';

    /**
     * The FZP connector views for breadboard, schematic and pcb.
     * Note that the pcb view has an object for copper0, copper1 etc.
     */
    this.views = {
      breadboard: new FZPConnectorView(),
      schematic: new FZPConnectorView(),
      pcb: {
        copper0: new FZPConnectorView(),
        copper1: new FZPConnectorView(),
        // keepout: new FZPConnectorView(), TODO: check what kind of layers we needs
        // outline: new FZPConnectorView(),
        // silkscreen: new FZPConnectorView(),
        // soldermask: new FZPConnectorView(),
      },
    };
  }
}

/**
 * FZPConnectorView class
 */
class FZPConnectorView {
  /**
   * FZPConnectorView constructor
   * @param {Object} opt
   */
  constructor(opt) {
    opt = opt || {};

    /** the FZP connector view layer */
    this.layer = opt.layer || '';

    /** the FZP connector view svg */
    this.svgId = opt.svgId || '';

    /** the FZP connector view leg */
    this.legId = opt.legId || '';

    /** the FZP connector view terminal */
    this.terminalId = opt.terminalId || '';
  }
}

module.exports = {
  FZPConnector: FZPConnector,
  FZPConnectorView: FZPConnectorView,
};
