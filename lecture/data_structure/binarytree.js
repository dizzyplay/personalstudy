const BST = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if(value >= this.value){
    if(!this.right) this.right = new BST(value)
    else this.right.insert(value);
  }
  else if(value < this.value){
    if(!this.left) this.left = new BST(value)
    else this.left.insert(value)
  }
}
BST.prototype.traversal = function(){
  if(this.left)this.left.traversal();
  console.log(this.value)
  if(this.right) this.right.traversal();
}

BST.prototype.breadthFirstTraversal = function(){
  let que = [this]
  while(que.length){
    let node = que.shift()
    console.log(node.value)
    if(node.left) que.push(node.left)
    if(node.right) que.push(node.right)
  }
}

BST.prototype.search = function(value){
  if(value === this.value) return this
  else if(value > this.value && this.right) return this.right.search(value)
  else if(value < this.value && this.left) return this.left.search(value)
  else console.log('there is no value')
}

const bst = new BST(50)
console.log(bst)
bst.insert(10)
bst.insert(30)
bst.insert(40)
bst.insert(70)
bst.insert(80)
bst.traversal();

bst.insert(20)
console.log(bst.search(30))
bst.breadthFirstTraversal()
console.log(bst)
