function twoSum(numArr, sum) {
  let answer = [];
  let obj = {};
  numArr.forEach(num => {
    if (!obj[num]) obj[num] = 1;
    else obj[num]++;
  });
  let arred = [];
  for (num in obj) {
    arred.push(parseInt(num));
  }
  arred.sort((a, b) => {
    return a - b;
  });
  let tarr = [];
  for (let i = 0; i < arred.length; i++) {
    for (let j = i; j < arred.length; j++) {
      if (arred[i] + arred[j] === sum) {
        tarr = [arred[i], arred[j]];
        answer.push(tarr);
      }
    }
  }
  return answer;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
