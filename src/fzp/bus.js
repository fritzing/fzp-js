'use strict';

/**
 * FZP Bus class
 */
class FZPBus {
  /**
   * FZPBus constructor
   * @param {Object} opt
   */
  constructor(opt) {
    opt = opt || {};

    /**
     * Store the FZP bus id
     * @type {String}
     */
    this.id = opt.id || null;

    /**
     * Store the FZP node members as an array
     * @type {Array}
     */
    this.nodeMembers = opt.nodeMembers || [];
  }

  /**
   * Set the FZP bus id
   * @param {String} id
   * @return {FZPBus}
   */
  setid(id) {
    this.id = id;
    return this;
  }

  /**
   * add a new node member if not exist
   * @param {String} m
   * @return {FZPBus}
   */
  setModeMember(m) {
    if (!this.existModeMember(m)) {
      this.nodeMembers.push(m);
    }
    return this;
  }

  /**
   * check if the given node member name does not exist at the nodeMembers array
   * @param {String} m
   * @return {Boolean}
   */
  existModeMember(m) {
    for (let i = 0; i < this.nodeMembers.length; i++) {
      if (this.nodeMembers[i] === m) {
        return true;
      }
    }
    return false;
  }
}

module.exports = FZPBus;
