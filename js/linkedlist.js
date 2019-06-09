 function Node(v) {
  this.val = v;
  this.next = null;
}

 function LinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.getAt = function(pos) {
  if (pos <= 0 || pos > this.length) return null;
  curr = this.head;
  let i = 1;
  while (i < pos) {
    curr = curr.next;
    i++;
  }
  return curr;
};

LinkedList.prototype.traverse = function() {
  curr = this.head;
  let arr = [];
  while (curr != null) {
    console.log(curr.val);
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
};

LinkedList.prototype.insertAt = function(pos, newNode) {
  if (pos < 1 && pos > this.length + 1) return false;
  if (pos == 1) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    prev = this.getAt(pos - 1);
    newNode.next = prev.next;
    prev.next = newNode;
  }
  this.length++;
  return true;
};

list = new LinkedList();

n1 = new Node('a');
n2 = new Node('a');
n3 = new Node('b');

list.insertAt(1, n1);
list.insertAt(2, n2);
list.insertAt(3, n3);

console.log(list.traverse())

module.exports = {
  Node,
  LinkedList
}
