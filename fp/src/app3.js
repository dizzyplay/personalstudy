//hasp table
// 해쉬테이블이 5초이상 걸리도록
// 데이터 넣어주기

const t1 = new Date();
function makeWords(length) {
  return Array.from({length}, (a, idx) => 'a' + String(idx / 3));
}
function wordCount() {
  const m = 10000;
  const words = makeWords(6900);
  let count = 0;
  const t1 = new Date();
  const slot = [];
  for (let i = 0; i < m; i++) {
    slot.push([]);
  }
  for (const w of words) {
    const hValue = hash(w) % m;
    if (slot[hValue].indexOf(w) === -1) {
      count += 1;
      slot[hValue].push(w);
    }
  }
  const t2 = new Date();
  console.log((t2 - t1) / 1000);

  let s = 0;
  for (const a of slot) {
    s += a.length;
  }
  console.log(slot);
}

function hash(w) {
  h = 0;
  x = 37;
  for (let i = 0; i < w.length; i++) {
    h = h * x + w.charCodeAt(i);
  }
  return Math.floor(h);
}

wordCount();
