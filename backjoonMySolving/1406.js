function sol(text, commands) {
  let right = [];
  let left = text.split('');
  while (commands.length) {
    let cmd = commands.shift();
    if (cmd[0] === 'P') {
      let c = cmd[cmd.length - 1];
      left.push(c);
    } else if (cmd[0] === 'B') {
      if (left.length) {
        left.pop();
      }
    } else if (cmd[0] === 'L') {
      if (left.length) {
        right.push(left.pop());
      }
    } else if (cmd[0] === 'D') {
      if (right.length) {
        left.push(right.pop());
      }
    }
  }
  return left.join('') + right.reverse().join('');
}

console.log(sol('abcd', ['P x', 'L', 'P y']));
//abcdyx

console.log(sol('abc', ['L', 'L', 'L', 'L', 'L', 'P x', 'L', 'B', 'P y']));
//yxabc

console.log(
  sol('dmih', ['B', 'B', 'P x', 'L', 'B', 'B', 'B', 'P y', 'D', 'D', 'P z']),
);
//yxz
