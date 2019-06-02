function sol(nums, target) {
  let answer = [];
  let subArr, index;
  subArr = nums.map(v => target - v);
  for (const i in subArr) {
    index = nums.indexOf(subArr[i]);
    if (index > 0 && index != i) {
      answer.push(Number(i), index);
      break;
    }
  }
  return answer;
}

console.log(sol([2, 7, 11, 15], 9));
