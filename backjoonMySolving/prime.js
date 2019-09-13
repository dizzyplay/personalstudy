function prime(n) {
  if (n < 2) return false;
  for (let i = 2; i < Math.abs(n / 2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(prime(4));
