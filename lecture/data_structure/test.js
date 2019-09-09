console.log('hello');
class Node{
  constructor(value){
    this.value=value;
    this.right=null;
    this.left=null;
  }
  insert(value){
    if(this.value>=value){
      if(!this.value.left)
        this.left = new Node(value)
      else
        this.left.insert(value)
    }
    else{
      if(!this.value.right)
        this.right= new Node(value)
      else
        this.right.insert(value)
    }
  }
  traversal(){

  }
  bfs(){
    console.log(this.value);
  }
}

const node = new Node(1)
node.insert(3)
node.insert(2)

node.bfs()
