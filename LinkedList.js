class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  append(value) {
    let current = this._head;
    if (current === null) {
      this._head = new Node(value);
      this._size++;
    } else {
      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = new Node(value);
      this._size++;
    }
    return this;
  }

  prepend(value) {
    if (this._head === null) {
      this._head = new Node(value);
      this._size++;
    } else {
      let head = new Node(value);
      head.nextNode = this._head;
      this._head = head;
      this._size++;
    }
    return this;
  }

  size() {
    return this._size;
  }

  head() {
    return this._head;
  }

  tail() {
    let current = this._head;
    while (current !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this._head;
    let i = 0;
    while (current !== null) {
      if (i === index) return current;
      current = current.nextNode;
      i++;
    }

    return `There is no node with index ${index} ¯\\_(ツ)_/¯`;
  }

  pop() {
    let current = this._head;
    let i = 0;
    while (current.nextNode !== null) {
      if (i === this.size() - 2) break;
      current = current.nextNode;
      i++;
    }

    current.nextNode = null;

    return current;
  }

  contains(value) {
    let current = this._head;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this._head;
    let i = 0;

    while (current !== null) {
      if (current.value === value) return i;
      current = current.nextNode;
      i++;
    }

    return null;
  }

  toString() {
    let string = "";
    let current = this._head;
    while (current !== null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    string += "null";

    return string;
  }
}