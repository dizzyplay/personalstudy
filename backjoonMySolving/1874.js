function sol(n, arr) {
  let m = 0;
  let i = 0;
  let ans = '';
  let stack = [];
  while (n--) {
    let crnt = arr[i];
    if (crnt > m) {
      while (crnt > m) {
        stack.push(++m);
        ans += '+';
      }
      stack.pop();
      ans += '-';
    } else {
      let check = false;
      if (stack.length) {
        if (stack[stack.length - 1] === crnt) {
          stack.pop();
          ans += '-';
          check = true;
        }
      }
      if (!check) {
        console.log('No');
        return 0;
      }
    }
    i++;
  }
  return ans;
}

console.log(sol(5, [1, 2, 5, 4, 3]));
// https://www.acmicpc.net/problem/1874
