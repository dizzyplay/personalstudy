function solution(s) {
  var answer = 0;
  let temp = 0;
  let flag = true;
  const b = s.sort().reverse();
  while (flag) {
    if (s.length === 0) flag = false;
    if (temp === 4) {
      answer += 1;
      temp = 0;
    } else if (temp === 3) {
      if (s.indexOf(1) >= 0) {
        temp += Number(s.splice(s.indexOf(1), 1));
      } else {
        answer += 1;
        temp = 0;
      }
    } else if (temp === 2) {
      if (s.indexOf(1) >= 0) {
        temp += Number(s.splice(s.indexOf(1), 1));
      } else {
        if (s.indexOf(2) >= 0) {
          temp += Number(s.splice(s.indexOf(2), 1));
        } else {
          answer += 1;
          temp = 0;
        }
      }
    } else if (temp === 1) {
      if (s.indexOf(1) >= 0) {
        temp += Number(s.splice(s.indexOf(1), 1));
      } else if (s.indexOf(2) >= 0) {
        temp += Number(s.splice(s.indexOf(2), 1));
      } else if (s.indexOf(3) >= 0) {
        temp += Number(s.splice(s.indexOf(3), 1));
      } else {
        answer += 1;
        temp = 0;
      }
    } else {
      temp += s.pop();
    }
  }
  return answer;
}

const s = Array.from({length: 1000000}, (a, idx) => (idx % 4) + 1);
const t1 = new Date();
console.log(solution(s));
const t2 = new Date();
const v = t2 - t1;
console.log(v / 1000);
