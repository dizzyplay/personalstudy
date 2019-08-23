const stair = n => {
  if (n < 2) return n;
  let oneStep = 1;
  let twoStep = 2;
  for (let i = 3; i <= n; i++) {
    const temp = twoStep;
    twoStep = oneStep + twoStep;
    oneStep = temp;
  }
  return twoStep;
};
const stair2 = n => {
  let count = 0;
  const recur = n => {
    if (n === 1) {
      count++;
      return;
    } else if (n === 2) {
      count += 2;
      return;
    }
    if (n > 2) {
      recur(n - 1);
      recur(n - 2);
    }
  };
  recur(n);
  return count;
};

const stair3 = (n, mem) => {
  let result;
  if (mem[n]) {
    return mem[n];
  }
  if (n == 1 || n == 2) {
    result = 1;
  } else {
    result = stair3(n - 1, mem) + stair3(n - 2, mem);
  }
  mem[n] = result;
  console.log(mem);
  return result;
};

const fib = (n, mem) => {
  let result;
  if (mem[n]) return mem[n];
  if (n == 1 || n == 2) return 1;
  else {
    result = fib(n - 1, mem, n - 1) + fib(n - 2, mem);
  }
  mem[n] = result;
  return result;
};

fib(10, []);
