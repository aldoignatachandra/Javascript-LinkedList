class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Funtion For Insert New Value Before First Node
  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  //Funtion For Get Curent Head Value And Next Index Value
  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  //Funtion For Remove First Node
  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  //Funtion For Insert New Value Before Selected Index
  insertAtIndex(index, value) {
    if (index === 0) {
      return this.insertAtHead(value);
    }

    const prev = this.getByIndex(index - 1);
    if (prev === null) {
      return null;
    }

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  //Funtion For Remove Value Before Selected Index
  removeAtIndex(index) {
    if (index === 0) {
      return this.removeHead();
    }

    const prev = this.getByIndex(index - 1);
    if (prev === null) {
      return null;
    }

    prev.next = prev.next.next;
    this.length--;
  }

  //Function For Print Current Linked List Value
  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
    console.log("");
  }
}

//Define Class Node For Linked List Data Structure
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//Function For Create Initial Link List Data With Backward Order
LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
