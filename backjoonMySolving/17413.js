function sol(words) {
  let deque = [];
  let i = 0;
  let answer = [];
  words = words.split('');
  while (words.length) {
    let c = words[0];
    if (c === '<') {
      if (deque.length) while (deque.length) answer.push(deque.pop());
      deque.push(words.shift());
      while (1) {
        let temp = words.shift();
        deque.push(temp);
        if (temp === '>') {
          while (deque.length) answer.push(deque.shift());
          break;
        }
      }
    } else if (c === ' ') {
      while (deque.length) {
        answer.push(deque.pop());
      }
      answer.push(words.shift());
    } else {
      deque.push(words.shift());
    }
  }
  if (deque.length) {
    while (deque.length) {
      answer.push(deque.pop());
    }
  }
  console.log(answer.join(''));
}

sol('baekjoon online judge');
//noojkeab enilno egduj

sol('<open>tag<close>');
//<open>tag<close>

sol('<ab cd>ef gh<ij kl>');
// <ab cd>fe hg<ij kl>

sol('<int><max>2147483647<long long><max>9223372036854775807');
// <int><max>7463847412<long long><max>7085774586302733229

sol('<problem>17413<is hardest>problem ever<end>');
// <problem>31471<is hardest>melborp reve<end>

sol('<   space   >space space space<    spa   c e>');
//<   space   >ecaps ecaps ecaps<    spa   c e>
