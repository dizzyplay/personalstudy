nArr = '1234567890';
Array.prototype.peek = function() {
  return this[this.length - 1];
};

function tokenToList(tokens) {
  token_list = [];
  new_list = [];
  token_list = tokens.split('');
  temp = '';
  for (t of token_list) {
    if (nArr.indexOf(t) != -1) {
      temp += t;
    } else {
      if (temp != 0) new_list.push(Number(temp));
      temp = '';
      new_list.push(t);
    }
  }
  if (temp) new_list.push(Number(temp));
  return new_list;
}

function convertToPostfix(arr) {
  let stack = [];
  let result = [];
  const tokens = {'(': 0, '-': 1, '+': 1, '*': 2, '/': 2};
  for (t of arr) {
    if (typeof t != 'number') {
      if (t == '(') stack.push(t);
      else if (tokens[stack.peek()] >= tokens[t]) {
        result.push(stack.pop());
        stack.push(t);
      } else if (t == ')') {
        while (stack.peek() != '(') {
          result.push(stack.pop());
        }
        stack.pop();
      } else {
        stack.push(t);
      }
    } else {
      result.push(t);
    }
  }
  while (stack.length) {
    result.push(stack.pop());
  }
  return result;
}

function sol(exp) {
  expArr = tokenToList(exp);
  postfix = convertToPostfix(expArr);
  console.log(postfix);
}

sol('(10+20)*(10+20)');
sol('10+10+10');
