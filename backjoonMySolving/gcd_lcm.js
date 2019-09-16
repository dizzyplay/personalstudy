function gcd(n, m) {
  let min = Math.min(n, m);
  let g = 1;
  for (let i = 2, len = min; i <= len; i++) {
    if (n % i === 0 && m % i === 0) {
      g = i;
    }
  }
  return g;
}

function gcd2(n, m) {
  if (m === 0) {
    return n;
  } else {
    return gcd2(m, n % m);
  }
}

function gcd3(n, m) {
  let r = 0;
  while (m != 0) {
    r = n;
    n = m;
    m = r % m;
  }
  return n;
}

function lcm(n, m) {
  if (gcd3(n, m) === 1) {
    return n * m;
  } else {
    return Math.max(n, m);
  }
}

function lcm2(n, m) {
  let g = gcd3(n, m);
  return g * (n / g) * (m / g);
}

console.log(lcm2(2, 6));
