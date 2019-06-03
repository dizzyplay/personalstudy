function isValid(s) {
  const open = ['[', '(', '{'];
  const close = [']', ')', '}'];
  const arr = [];
  for (const c of s) {
    if (open.indexOf(c) >= 0) arr.push(open.indexOf(c));
    else {
      if(arr.length ==0) return false
      if (close[last(arr)] == c) arr.pop();
      else break;
    }
  }
  return arr.length == 0 ? true : false;
}

function last(arr) {
  return arr[arr.length - 1];
}

console.log(isValid('[])'));
