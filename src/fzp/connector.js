/**
 *
 */
class FZPConnector {
  /**
   * FZPConnector constructor
   */
  constructor() {
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
      pcb: new FZPConnectorView(),
    };
  }
}

/**
 *
 */
class FZPConnectorView {
  /**
   * FZPConnectorView constructor
   */
  constructor() {
    /**
     * the FZP connector view layer
     */
    this.layer = '';

    /**
     * the FZP connector view svg
     */
    this.svgId = '';

    /**
     * the FZP connector view leg
     */
    this.legId = '';

    /**
     * the FZP connector view terminal
     */
    this.terminalId = '';
  }
}

module.exports = {FZPConnector, FZPConnectorView};
