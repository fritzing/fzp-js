class FZPBus {
  constructor() {
    this.id = ''
    this.nodeMembers = []
  }

  setid(id) {
    this.id = id
  }

  addModeMember(m) {
    if (!this.existModeMember(m)) {
      this.nodeMembers.push(m)
    }
  }

  existModeMember(m) {
    for (var i = 0; i < this.nodeMembers.length; i++) {
      if (this.nodeMembers[i] === m) {
        return true
      }
    }
    return false
  }
}

module.exports = FZPBus
