"use strict";

function genNotSelfNum(n) {
  if (n >= 10) {
    nArr = String(n).split('');
    return Number(n) + nArr.reduce(function (acc, v) {
      return acc + Number(v);
    }, 0);
  } else {
    return n + n;
  }
}

function genNotSelfArr(target) {
  var i = 1;
  var arr = [];

  while (i < target) {
    arr.push(genNotSelfNum(i));
    i++;
  }

  return arr;
}

function checkSelfNum(target) {
  arr = genNotSelfArr(target);

  for (var i = 1; i < target; i++) {
    if (arr.indexOf(i) == -1) console.log(i);
  }
}

checkSelfNum(10000);