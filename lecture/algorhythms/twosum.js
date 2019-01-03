function twoSum(arr, sum) {
  let obj = {};
  let answer = [];
  arr.forEach(num => {
    if (!obj[num]) obj[num] = 0;
    obj[num]++;
  });

  Object.keys(obj).forEach(key => {
    if (obj[sum - key]) {
      for (let i = 0; i < obj[key] * obj[sum - key]; i++) {
        answer.push([key, sum - key]);
      }
      obj[sum - key] = null;
    }
  });
  return answer;
}

console.log(twoSum([1, 1, 6, 1, 2, 4, 3, 3], 7));
