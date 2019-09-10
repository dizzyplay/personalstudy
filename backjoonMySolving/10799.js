function sol(sticks) {
  let stick = 0;
  let stack = [];
  let answer = 0;
  sticks = sticks.split('');
  while (sticks.length) {
    let s = sticks.shift();
    if (s === '(') {
      stick++;
      stack.push(s);
    } else if (s === ')' && stack[stack.length - 1] === '(') {
      stick--;
      stack.push(s);
      answer += stick;
    } else if (s === ')') {
      answer += 1;
      stick--;
    }
  }
  return answer;
}

console.log(sol('()(((()())(())()))(())'));
//17
console.log(sol('(((()(()()))(())()))(()())'));
//24
