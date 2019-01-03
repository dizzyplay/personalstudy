function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  };
}

function getMean(array) {
  let sum = 0;
  array.forEach(num => {
    sum += num;
  });
  return sum / array.length;
}

function getMedian(array) {
  let median;
  array.sort((a, b) => {
    return a - b;
  });
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    let mid1 = array[array.length / 2 - 1];
    let mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}

function getMode(array) {
  let obj = {};
  array.forEach(c => {
    if (!obj[c]) obj[c] = 0;
    obj[c]++;
    // 0은 false, obj[c] 가 0이면 !obj[c]는 항상 참이되므로 obj[c]=0이 항상 실행되게된다.
    // 따라서 obj[c]=0을 하고싶다면 if문 밖에서 써야한다.
  });
  let maxfrequency = 0;
  let modes = [];
  for (num in obj) {
    if (obj[num] > maxfrequency) {
      modes = [num]; // [num]은 배열을 덮어씌운다. push 와 다르다.
      maxfrequency = obj[num];
    } else if (obj[num] === maxfrequency) {
      modes.push(num);
    }
    if (modes.length === Object.keys(obj).length) modes = [];
  }
  return modes;
}

let arr = [1, 2, 3, 4, 5, 4, 6, 1];
let arr2 = [9, 10, 23, 10, 23, 9];

console.log(meanMedianMode(arr));
// { mean: 3.25, median: 3.5, mode: [ '1', '4' ] }
console.log(meanMedianMode(arr2));
// { mean: 14, median: 10, mode: [] }
