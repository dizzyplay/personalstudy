function sol(a, b) {
  const g = gcd(a, b);

  return g * (a / g) * (b / g);
}

function gcd(a, b) {
  if (b === 0) return a;
  else {
    return gcd(b, a % b);
  }
}

console.log(sol(1, 45000) === 45000);
console.log(sol(6, 10) === 30);
console.log(sol(13, 17) === 221);
