function sol(nums) {
  let stack = [];
  let answer = [];
  stack.push(0);
  for (let i = 1; i < nums.length; i++) {
    while (stack.length && nums[stack.slice(-1)] < nums[i]) {
      answer[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  while (stack.length) {
    answer[stack.pop()] = -1;
  }
  return answer;
}

console.log(sol([3, 5, 2, 7]));
// 5 7 7 -1
console.log(sol([9, 5, 4, 8]));
// -1 8 8 -1
