/**
 *
 */
class FZPConnector {
  constructor() {
    this.id = ""
    this.name = ""
    this.type = ""
    this.description = ''
    this.views = {
      breadboard: new FZPConnectorView(),
      schematic: new FZPConnectorView(),
      pcb: new FZPConnectorView()
    }
  }
}

/**
 *
 */
class FZPConnectorView {
  constructor() {
    this.layer = ''
    this.svgId = ''
    this.legId = ''
    this.terminalId = ''
  }
}

module.exports = { FZPConnector, FZPConnectorView }
