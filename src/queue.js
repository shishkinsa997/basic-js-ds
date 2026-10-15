const { NotImplementedError } = require("../lib");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.q = null;
  }
  getUnderlyingList() {
    return this.q;
  }

  enqueue(v) {
    if (!this.q) {
      this.q = this.createNode(v);
    } else {
      let curr = this.q;
      while (curr.next) {
        console.log(curr);

        curr = curr.next;
      }
      curr.next = this.createNode(v);
    }
  }

  dequeue() {
    const value = this.q?.value;
    this.q = this.q?.next;
    return value;
  }

  createNode(value) {
    return { value, next: null };
  }
}

module.exports = {
  Queue,
};
