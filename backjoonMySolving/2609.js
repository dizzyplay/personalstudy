function sol(a, b) {
  let g = gcd(a, b);
  let l = lcm(a, b, g);
  console.log(g, l);
}

function gcd(a, b) {
  let r;
  while (b !== 0) {
    r = a;
    a = b;
    b = r % b;
  }
  return a;
}

function lcm(a, b, gcd) {
  return gcd * (a / gcd) * (b / gcd);
}

sol(24, 18);
