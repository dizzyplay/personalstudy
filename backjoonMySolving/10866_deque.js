function sol(n, commands) {
  let deque = [];
  while (n--) {
    let cmd = commands.shift().split(' ');
    if (cmd[0] === 'push_front') {
      deque.unshift(cmd[cmd.length - 1]);
    } else if (cmd[0] === 'push_back') {
      deque.push(cmd[cmd.length - 1]);
    } else if (cmd[0] === 'pop_front') {
      if (deque.length) console.log(deque.shift());
      else console.log(-1);
    } else if (cmd[0] === 'pop_back') {
      if (deque.length) console.log(deque.pop());
      else console.log(-1);
    } else if (cmd[0] === 'size') console.log(deque.length);
    else if (cmd[0] === 'empty') {
      if (!deque.length) console.log(1);
      else console.log(0);
    } else if (cmd[0] === 'front') {
      if (deque.length) console.log(deque[0]);
      else console.log(-1);
    } else {
      if (deque.length) console.log(deque[deque.length - 1]);
      else console.log(-1);
    }
  }
}

sol(15, [
  'push_back 1',
  'push_front 2',
  'front',
  'back',
  'size',
  'empty',
  'pop_front',
  'pop_back',
  'pop_front',
  'size',
  'empty',
  'pop_back',
  'push_front 3',
  'empty',
  'front',
]);

/// 1 2 0 2 1 -1 0 1 -1 0 3
