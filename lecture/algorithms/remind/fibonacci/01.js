function fib(index) {
  if (index < 3) return 1;
  else {
    return fib(index - 1) + fib(index - 2);
  }
}

console.log(fib(9));
