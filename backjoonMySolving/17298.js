function sol(nums) {
  let answer = [];
  nums.map((v, idx) => {
    let found = -1;
    for (let i = idx; i < nums.length; i++) {
      if (v < nums[i]) {
        found = nums[i];
        break;
      }
    }
    found === -1 ? answer.push(-1) : answer.push(found);
  });
  return answer;
}

console.log(sol([3, 5, 2, 7]));
// 5 7 7 -1
console.log(sol([9, 5, 4, 8]));
// -1 8 8 -1
