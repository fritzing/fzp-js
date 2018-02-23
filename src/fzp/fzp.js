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
    this.properties = []
    this.views = {
      icon: {
        image: '',
        layerId: ''
      },
      schematic: {
        image: '',
        layerId: ''
      },
      breadboard: {
        image: '',
        layerId: ''
      },
      pcb: {
        image: '',
        layerId: ''
      }
    }
    this.connectors = {}
      // {
      //   attr: {
      //     id: "connector15",
      //     name: "B1",
      //     type: "male"
      //   },
      //   connector: {
      //     description: 'foo',
      //     views: {
      //       icon: {
      //         attr: {
      //           layer: 'l',
      //           svgId: 'svg1',
      //           terminalId: 't'
      //         },
      //         p: ''
      //       },
      //       schematic: {
      //         attr: {
      //           layer: 'l',
      //           svgId: 'svg1',
      //           terminalId: 't'
      //         },
      //         p: ''
      //       },
      //       breadboard: {
      //         attr: {
      //           layer: 'l',
      //           svgId: 'svg1',
      //           terminalId: 't'
      //         },
      //         p: ''
      //       },
      //       pcb: {
      //         attr: {
      //           layer: 'l',
      //           svgId: 'svg1',
      //           terminalId: 't'
      //         },
      //         p: ''
      //       }
      //     }
      //   }
      // }

    this.buses = []
  }
}

module.exports = FZP
