function fib(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fib(index - 1, cache) + fib(index - 2, cache);
    }
  }
  return cache[index];
}

console.log(fib(20));
