const FZPView = require('./view')

/**
 *
 */
class FZP {
  constructor() {
    this.moduleId = '12345678'
    this.fritzingVersion = '1.0.0'
    this.version = ''
    this.title = ''
    this.description = ''
    this.author = ''
    this.date = ''
    this.url = ''
    this.label = ''
    this.tags = []
    this.taxonomy = ''
    this.language = ''
    this.family = ''
    this.variant = ''
    this.properties = {}
    this.views = {
      icon: new FZPView(),
      schematic: new FZPView(),
      breadboard: new FZPView(),
      pcb: new FZPView()
    }
    this.connectors = {}
    this.buses = {}
  }
}

module.exports = FZP
