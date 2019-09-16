function sol(nums) {
  let freq = [];
  let answer = [];
  let stack = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!freq[nums[i]]) freq[nums[i]] = 0;
    freq[nums[i]]++;
  }

  stack.push(0);
  for (let i = 1, len = nums.length; i < len; i++) {
    if (!stack.length) stack.push(i);
    while (stack.length && freq[nums[stack.slice(-1)]] < freq[nums[i]]) {
      answer[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  while (stack.length) {
    answer[stack.pop()] = -1;
  }

  return answer;
}

console.log(sol([1, 1, 2, 3, 4, 2, 1]));
//-1 -1 1 2 2 1 -1
