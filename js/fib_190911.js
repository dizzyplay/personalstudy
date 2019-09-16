let i = 0;
let dp = [];
function fib(n) {
  console.log(i++);
  if (n <= 0) return (dp[0] = 0);
  if (n == 1) return (dp[1] = 1);
  if (dp[n]) return dp[n];
  else return (dp[n] = fib(n - 2) + fib(n - 1));
}

function fibArr(n) {
  let arr = [];
  for (let i = 1; i < n; i++) {
    arr.push(fib(i));
  }
  return arr;
}

//console.log(fib(6,[]));
console.log(fibArr(50));
