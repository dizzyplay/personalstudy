// 모든 요소 순회
_.each([1, 2, 3, 4], v => {
  if (v < 3) {
    console.log(v);
  }
});

//false를 반환하면 순회 중지
_.every([1, 2, 3, 0, 1, 2, 3], v => {
  console.log(v);
  return !!v;
});

_.each({length: 4}, function(v) {
  console.log(arguments);
});

// 널을 넣어도 에러가 나지 않는다
function f(data) {
  let key = _.keys(data);
  for (let i = 0; i < key.length; i++) {
    console.log(i);
  }
  console.log(key);
}

f(null);
