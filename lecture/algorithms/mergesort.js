function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let firstArr = arr.slice(0, midIndex);
  let secondArr = arr.slice(midIndex);
  return merge(mergeSort(firstArr), mergeSort(secondArr));
}

function merge(arr1, arr2) {
  let answer = [];
  while (arr1.length && arr2.length) {
    let temp;
    if (arr1[0] < arr2[0]) temp = arr1.shift();
    else temp = arr2.shift();
    answer.push(temp);
  }
  if (arr1.length) answer = answer.concat(arr1);
  else answer = answer.concat(arr2);
  return answer;
}

console.log(mergeSort([1, 5, 3, 4, 3, 4, 2, 41, 3, 34, 24, 23, 4, 3, 2]));
