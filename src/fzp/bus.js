'use strict';

/**
 * FZP Bus class
 *
 * @example
 * const {FZBus} = require('fzp-js')
 *
 * let bus = new FZBus()
 * bus.setId('sample')
 * bus.setModeMember('mode')
 */
class FZPBus {
  /**
   * FZPBus constructor
   * @param {Object} opt
   */
  constructor(opt = {}) {
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
  setId(id) {
    this.id = id;
    return this;
  }

  /**
   * Return the id
   * @return {String}
   */
  getId() {
    return this.id;
  }

  /**
   * add a new node member if not exist
   * @param {String} m
   * @return {FZPBus}
   */
  setNodeMember(m) {
    if (!this.existModeMember(m)) {
      this.nodeMembers.push(m);
    }
    return this;
  }

  /**
   * Return the nodeMembers array
   * @return {Array}
   */
  getNodeMembers() {
    return this.nodeMembers;
  }

  /**
   * Return the total number of nodeMembers
   * @return {Number}
   */
  totalNodeMembers() {
    return this.nodeMembers.length;
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
