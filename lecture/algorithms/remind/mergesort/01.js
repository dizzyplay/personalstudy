function mergeSort(arr){
  if(arr.length<2) return arr
  let mid = Math.floor(arr.length/2)
  let firstArr = arr.slice(0,mid)
  let secondArr = arr.slice(mid)
  return merge(mergeSort(firstArr),mergeSort(secondArr))
}


function merge(arr1,arr2){
  let temp=0
  let answer = []
  while(arr1.length&&arr2.length){
    if(arr1[0]<arr2[0]) temp = arr1.shift()
    else temp=arr2.shift()
    answer.push(temp)
  }
  if(arr1.length+arr2.length!==0){
    answer=answer.concat(arr1.concat(arr2))
  }
  return answer
}

console.log(mergeSort([1,4,3,2,6,4,7,99]))
