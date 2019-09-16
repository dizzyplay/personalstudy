class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class Tree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  insert(value) {
    if (this.value >= value) {
      if (!this.left) this.left = new Tree(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new Tree(value);
      else this.right.insert(value);
    }
  }
}
function bfs() {
  const tree = new Tree(5);
  tree.insert(4);
  tree.insert(8);
  tree.insert(2);
  tree.insert(1);
  console.log(tree);
}

bfs();
