function sol(words) {
  let stack = []; // 뒤집을 문장
  let queue = []; // 뒤집지 않을 문장
  let answer = [];
  let tag = false;
  words = words.split('');
  words.map(c => {
    if (c === '<') {
      answer.push(...sFlush(stack));
      tag = true;
      stack = [];
      queue.push(c);
    } else if (c === '>') {
      queue.push(c);
      tag = false;
      answer.push(...qFlush(queue));
      queue = [];
    } else {
      if (tag) {
        queue.push(c);
      } else {
        stack.push(c);
      }
    }
  });
  if (stack.length) {
    answer.push(...sFlush(stack));
  }
  return answer.join('');
}

function qFlush(v) {
  let answer = [];
  while (v.length) {
    answer.push(v.shift());
  }
  return answer;
}

function sFlush(v) {
  let answer = [];
  while (v.length) {
    answer.push(v.pop());
  }
  return answer;
}

console.log(sol('<open>abc<close>'));
//<open>cba<close>

console.log(sol('<int><max>2147483647<long long><max>9223372036854775807'));
//<int><max>7463847412<long long><max>7085774586302733229
//

console.log(sol('<   space   >space space space<    spa   c e>'));
// <   space   >ecaps ecaps ecaps<    spa   c e>
