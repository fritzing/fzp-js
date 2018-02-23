/**
 *
 */
class FZPView {
  
  constructor() {
    this.image = ''
    this.layerIds = []
  }

  setImage(src) {
    this.image = src
  }

  totalLayerId() {
    return this.layerIds.length
  }

  addLayerId(name) {
    if (!this.existLayerId(name)) {
      this.layerIds.push(name)
    }
  }

  existLayerId(id) {
    for (var i = 0; i < this.layerIds.length; i++) {
      if (this.layerIds[i] === id) {
        return true
      }
    }
    return false
  }
}

module.exports = FZPView
