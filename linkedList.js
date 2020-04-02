class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    // Check Params

    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    const leaderNode = this.traverseToIndex(index - 1);

    const followerNode = leaderNode.next;

    leaderNode.next = newNode;
    newNode.next = followerNode;
    newNode.prev = leaderNode;
    followerNode.prev = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      index = this.length - 1;
    }

    const leaderNode = this.traverseToIndex(index - 1);
    const nodeToRemove = leaderNode.next;

    leaderNode.next = nodeToRemove.next;
    nodeToRemove.next.prev = leaderNode;

    this.length--;
    return this;
  }

  reverse() {
    if (!this.head.next) return this;

    let firstNode = this.head;
    this.tail = this.head;
    let secondNode = firstNode.next;

    while (secondNode) {
      const tempNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = tempNode;
    }

    this.head.next = null;
    this.head = firstNode;

    return this;
  }

  print() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.insert(1, 99);
linkedList.reverse();

//linkedList.remove(2);

linkedList.print();
