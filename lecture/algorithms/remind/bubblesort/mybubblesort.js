function bubblesort(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j]-arr[j+1]>0){
        let temp;
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr
}

console.log(bubblesort([2,42,5,34,1,3,7,4]))
