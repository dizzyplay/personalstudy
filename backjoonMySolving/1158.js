function sol(n, m) {
  let queue = [];
  let answer = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  while (queue.length) {
    for (let i = 0; i < m - 1; i++) {
      let temp = queue.shift();
      queue.push(temp);
    }
    answer.push(queue.shift());
  }
  return answer;
}

console.log(sol(7, 3));

// [3,6,2,7,5,1,4]
