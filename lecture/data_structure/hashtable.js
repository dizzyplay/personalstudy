const HashTable = function(size){
  this.buckets = Array(size);
  this.bucketNum = this.buckets.length;
}

const HashNode = function(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key){
  let total =0;
  for(let i=0; i<key.length; i++){
    total += key.charCodeAt(i)
  }
  let bucket = total % this.bucketNum;
  return bucket;
}

HashTable.prototype.insert = function(key,value){
  let index = this.hash(key)
  console.log('index:', index);
  if(!this.buckets[index]) this.buckets[index] = new HashNode(key, value)
  else if(this.buckets[index].key === key){
    this.buckets[index].value = value;
  }
  else{
    let currentNode = this.buckets[index]
    while(currentNode.next){
      if(currentNode.next.key === key ) {
        currentNode.next.value = value;
        return;
      }
      let currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key,value)
  }
}

HashTable.prototype.get = function(key){
  let index = this.hash(key)
  if(!this.buckets[index]) return null
  else{
    let currentNode = this.buckets[index]
    while(currentNode){
      if(currentNode.key === key) return currentNode.value
      currentNode = currentNode.next
    }
    return null;
  }
}

HashTable.prototype.retrieveAll = function(){
  let allNodes = [];
  for(let i=0; i<this.bucketNum; i++){
    if(this.buckets[i]){
      let currentNode = this.buckets[i]
      while(currentNode){
        allNodes.push(currentNode)
        currentNode = currentNode.next
      }
    }
  }
  return allNodes;
}

const ht = new HashTable(10);

ht.insert('james','james.com')
ht.insert('himan','himan.com')
ht.insert('go','go.com')
ht.insert('good','good.com')
ht.insert('vovo','vovo.com')

ht.insert('himan','himanisbye.com')

console.log(ht.retrieveAll())

