Array.prototype.peek = function() {
  return this[this.length - 1];
};

function postfixCal(arr) {
  const token = ['+', '-', '*', '/'];
  const stack = [];
  const temp = [];
  while (arr.length > 0) {
    if (token.indexOf(arr[0]) != -1) {
      t = arr.shift();
      second = stack.pop();
      first = stack.pop();
      exp = first + t + second;
      stack.push(eval(exp));
    } else {
      stack.push(arr.shift());
    }
  }
  return stack[0];
}

console.log(postfixCal(['2', '3', '4', '+', '*']));
console.log(postfixCal(['2', '3', '*', '4', '+']));

// python 에서 pop(0)은 js에 없다 python:  pop(0) == js: Array.shift()
