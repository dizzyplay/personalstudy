function map(list,iter){
  const newList=[]
  for(const v of list){
    newList.push(iter(v))
  }
  return newList
}
