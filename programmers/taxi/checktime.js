const {solution} = require('./taxi2.js');

const people = [10000, 100000, 1000000, 10000000];
const groupArray = [];

for (const p of people) {
  groupArray.push(Array.from({length: p}, (a, idx) => (idx % 4) + 1));
}

for (const g of groupArray) {
  console.log(`배열의 길이: ${g.length}`);
  const t1 = new Date();
  console.log(` 필요한 택시 대수:${solution(g)}`);

  const t2 = new Date();
  console.log(`processing time: ${(t2 - t1) / 1000} seconds`);
}
