function prime(num) {
  let p = [];
  for (let i = 0; i <= num; i++) {
    p[i] = true;
  }
  p[0] = false;
  p[1] = false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      p[i * j] = false;
    }
  }
  let arr = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i]) arr.push(i);
  }
  return arr;
}

console.log(prime(20));
