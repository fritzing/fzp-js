class Connector {
  constructor() {
    this.id = ""
    this.name = ""
    this.type = ""
    this.description = ''
    this.views = {
      breadboard: {
        layer: '',
        svgId: '',
        legId: '',
        terminalId: ''
      },
      schematic: {
        layer: '',
        svgId: '',
        terminalId: ''
      },
      pcb: {
        layer: '',
        svgId: '',
        terminalId: ''
      }
    }
  }
}

module.exports = Connector
