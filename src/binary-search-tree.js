const { NotImplementedError } = require("../lib");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.obj = null;
  }
  root() {
    return this.obj;
  }

  add(data) {
    this.obj = this.toDeep(this.obj, data);
  }

  createNode(data) {
    return { data: data, left: null, right: null };
  }

  toDeep(node, data) {
    if (!node) {
      return this.createNode(data);
    }
    if (node.data >= data) {
      node.left = this.toDeep(node.left, data);
    } else {
      node.right = this.toDeep(node.right, data);
    }
    return node;
  }

  find(data) {
    let curr = this.obj;
    while (curr) {
      if (curr.data === data) return curr;
      if (data >= curr.data) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return null;
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    this.obj = this.removeNode(this.obj, data);
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }
    let minRight = node.right;
    while (minRight.left) {
      minRight = minRight.left;
    }
    node.data = minRight.data;
    node.right = this.removeNode(node.right, minRight.data);
    return node;
  }

  min() {
    let curr = this.obj;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    let curr = this.obj;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree,
};
