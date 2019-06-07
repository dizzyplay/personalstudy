function Node(v) {
  this.val = v;
  this.next = null;
  this.first = this;
}

Node.prototype.push = function(v) {
  oldFirst = this.first;
  this.first = new Node(v);
  this.first.next = oldFirst;
};

Node.prototype.isEmpty = function() {
  return this.first==null
};

Node.prototype.pop = function() {
  if(!this.isEmpty()){
    const result = this.first
    this.first = this.first.next
    return result
  }
  return null
};

const n1 = new Node(99);
console.log(n1.first.val)
n1.push(10)
console.log(n1.pop().val)
console.log(n1.pop().val)
console.log(n1.pop())
n1.push(10)
console.log(n1.pop())


