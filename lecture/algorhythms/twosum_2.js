function twoSum(arr, sum) {
  let tempArr = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let counter = sum - current;
    if (tempArr.indexOf(counter) !== -1) {
      answer.push([current, counter]);
    }
    tempArr.push(current);
  }
  return answer;
}

console.log(twoSum([6, 1, 2, 3, 4, 4], 7));
