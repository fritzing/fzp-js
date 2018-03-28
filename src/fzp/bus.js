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
   */
  constructor() {
    /**
     * Store the FZP bus id
     * @type {String}
     */
    this.id = null;

    /**
     * Store the FZP node members as an array
     * @type {Array}
     */
    this.nodeMembers = [];
  }

  /**
   * @param {Object|String} v
   * @param {Array} m
   */
  set(v, m) {
    if (v) {
      switch (typeof v) {
        case 'object':
          if (v.id) {
            this.setId(v.id);
          }
          if (v.nodeMembers) {
            this.setNodeMember(v.nodeMembers);
          }
          return;

        case 'string':
          this.setId(v);
          break;

        default:
          throw new Error(`FZPBus type ('${typeof v}') for argument one not supported`);
      }
    }

    if (m) {
      switch (typeof m) {
        case 'object':
          this.setNodeMember(m);
          break;
        default:
          throw new Error(`FZPBus type ('${typeof m}') for argument one not supported`);
      }
    }
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
    switch (typeof m) {
      case 'object':
        this.nodeMembers = m;
        break;
      case 'string':
      case 'number':
        if (!this.existModeMember(m)) {
          this.nodeMembers.push(m);
        }
        break;
      default:
        throw new Error(`FZPBus nodeMember type ('${typeof m}') not supported`);
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
