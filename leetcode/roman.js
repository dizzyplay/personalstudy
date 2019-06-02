function sol(s) {
  const Roman = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let arr = s.split('').map(v => Roman[v]);
  let answer = 0;
  let i = 0;
  while (arr[arr.length - 1] == 1) {
    answer += arr.pop();
  }
  while (i < arr.length - 1) {
    if (arr[i] >= arr[i + 1]) i++;
    else {
      arr[i + 1] = arr[i + 1] - arr[i];
      arr[i] = 0;
      i += 1;
    }
  }
  console.log(arr);
  return arr.reduce((acc, v) => acc + v, answer);
}

console.log(sol('CCCXXXIV'));
