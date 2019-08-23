var add = (a, b) => {
  a = a.split('');
  b = b.split('');
  result = [];
  flag = false;
  while (a.length > 0 && b.length > 0) {
    if (flag) {
      temp = Number(a.pop()) + Number(b.pop()) + 1;
      flag = false;
    } else temp = Number(a.pop()) + Number(b.pop());
    if (temp >= 2) {
      result.unshift(temp - 2);
      flag = true;
    } else {
      result.unshift(temp);
    }
    temp = 0;
  }
  if (a.length > 0 && flag) {
    result.unshift(plusone(a));
  } else if (b.length > 0 && flag) {
    result.unshift(plusone(b));
  } else if (flag) {
    result.unshift(1);
  } else if (a.length > 0 && !flag) {
    result.unshift(a.join(''));
  } else if (b.length > 0 && !flag) {
    result.unshift(b.join(''));
  }
  return result.join('');
};

const plusone = str => {
  let i = str.length - 1;
  while (i >= 0) {
    if (Number(str[i]) + 1 === 2) {
      str[i] = 0;
    } else {
      str[i] = 1;
      break;
    }
    if (i == 0) {
      str.unshift(1);
    }
    i--;
  }
  return str.join('');
};

console.log(add('1010', '1011'));

// 맨끝 숫자를 더한다 2라면 올림수에 1을 더하고 result에 0을 unshift한다
// 숫자를 더한다 올림수가 있으면 더한다 합이 2보다 크면 2를ㅂ 뺀 값을 unshift하고 올림수에 1을 넣는다
// 두숫자가 없다면 올림수 체크를 한다 올림수가 있고 어느 한쪽에 값이 있다면 그 값과 더한다
// 두숫자가 2보다 크면 2를 뺸값을 unshift하고 그숫자가 0보다 크면 올림수에 1을 넣는다
// 두숫자가 없고 올림수가 없으면 리턴 올림수가 있다면 1을 unshift한다
//
