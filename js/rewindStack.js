function sol() {
  const arr = convertToArray("10+20+1");
  const result = postfix(arr);
  console.log(result);
  return void 0;
}

sol();

function convertToArray(tokenStr) {
  const n = "1234567890";
  const result = [];
  let temp = "";
  for (const s of tokenStr) {
    if (n.indexOf(s) > -1) {
      temp += s;
    } else {
      if (temp.length) {
        result.push(Number(temp));
        temp = "";
      }
      result.push(s);
    }
  }
  result.push(Number(temp));
  return result;
}

function postfix(tokenArr) {
  const stack = [];
  const result = [];
  while (tokenArr.length > 0) {
    console.log(tokenArr.pop());
  }
}
