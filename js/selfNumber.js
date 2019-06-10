function genNotSelfNum(n) {
  if (n >= 10) {
    nArr = String(n).split('');
    return Number(n) + nArr.reduce((acc, v) => acc + Number(v), 0);
  } else {
    return n + n;
  }
}

function genNotSelfArr(target) {
  let i = 1;
  let arr = [];
  while (i < target) {
    arr.push(genNotSelfNum(i));
    i++;
  }
  return arr;
}

function checkSelfNum(target) {
  arr = genNotSelfArr(target);
  for (let i = 1; i < target; i++) {
    if (arr.indexOf(i) == -1) console.log(i);
  }
}

console.time('selfnum');
checkSelfNum(10000);
console.timeEnd('selfnum');
