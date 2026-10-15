const { NotImplementedError } = require("../lib");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  push(v) {
    this.stack.push(v);
  }

  pop() {
    const pop = this.stack.pop() || undefined;
    return pop;
  }

  peek() {
    return this.stack[this.stack.length - 1] || undefined;
  }
}

module.exports = {
  Stack,
};
