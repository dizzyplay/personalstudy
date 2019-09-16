function sol(sticks) {
  let stack = [];
  let stickNumber = 0;
  let answer = 0;
  sticks = sticks.split('');
  sticks.map(s => {
    if (s === '(') {
      stack.push(s);
      stickNumber++;
    } else if (s === ')' && stack[stack.length - 1] === '(') {
      stack.push(s);
      stickNumber--;
      answer += stickNumber;
    } else {
      stickNumber--;
      answer += 1;
    }
  });
  return answer;
}

console.log(sol('()(((()())(())()))(())'));
//17

console.log(sol('(((()(()()))(())()))(()())'));
//24
