function Queue() {
  this.que = [];
}
Queue.prototype.push = function(v) {
  if (this.que.length === 10) {
    this.que.shift();
    this.que.push(v);
  } else {
    this.que.push(v);
  }
};
Queue.prototype.pop = function() {
  return this.que.shift();
};

let q = new Queue();

for(let i=0; i<200; i++){
  q.push(i)
}
console.log(q);
