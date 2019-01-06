function mergeSort(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let sortedArr = [];
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[index1] < arr2[index2]) {
      sortedArr.push(arr1[index1]);
      index1++;
    } else if (arr1[index1] > arr2[index2]) {
      sortedArr.push(arr2[index2]);
      index2++;
    } else if(arr1.length-index1===0 || arr2.length-index2===0) {
      sortedArr = sortedArr.concat(arr1.slice(index1).concat(arr2.slice(index2)))
      break;
    }
  }
  return sortedArr;
}


a = [4,5,7,9]
b = [1, 2, 12, 17];

//console.log(mergeSort(a, b));
//

