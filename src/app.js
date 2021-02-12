const LinkedList = require("./LinkedList");

//Create Initial Data Link List
const ll = LinkedList.fromValues(10, 20, 30, 40);

//Print Linked List Value
console.log("=== Initial Data ===");
ll.print();

//Insert New Value Before First Node
console.log("=== Insert New Value Before First Node ===");
ll.insertAtHead(5);
ll.print();

//Remove First Node From List
console.log("=== Remove First Node From List ===");
ll.removeHead();
ll.print();

//Insert New Value Before Selected Index
console.log("=== Insert New Value Before Selected Index ===");
ll.insertAtIndex(2, 15);
ll.print();

//Remove Value Before Selected Index
console.log("=== Remove Value Before Selected Index ===");
ll.removeAtIndex(3);
ll.print();
