function fibonacci(position) {
  if (position < 3) return 1;
  else {
    return fibonacci(position - 2) + fibonacci(position - 1);
  }
}
console.log(fibonacci(6));
