function prime(num) {
  let p = [];
  for (let i = 1; i <= num; i++) {
    p[i] = true;
  }
  p[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; i * j <= num; j++) {
      p[i * j] = false;
    }
  }
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (p[i]) arr.push(i);
  }

  return arr;
}

console.log(prime(17));
