function arrayToTable(s) {
  let arr = [0, 0, 0, 0];
  for (let i = 0; i < s.length; i++) {
    arr[s[i] - 1] += 1;
  }
  return arr;
}

function solution(s) {
  const table = arrayToTable(s);
  return taxi(table);
}

function taxi(table) {
  let answer = 0;
  let temp = 0;
  answer += table[3];
  table[3] = 0;
  while (table[0] + table[1] + table[2] > 0 || temp > 0) {
    if (temp === 3) {
      if (table[0] > 0) {
        answer += 1;
        table[0] -= 1;
        temp = 0;
      } else {
        answer += 1;
        temp = 0;
      }
    }

    if (temp === 2) {
      if (table[0] > 0) {
        temp += 1;
        table[0] -= 1;
      } else if (table[1] > 0) {
        answer += 1;
        table[1] -= 1;
        temp = 0;
      } else {
        answer += 1;
        temp = 0;
      }
    }

    if (temp === 1) {
      if (table[0] > 0) {
        temp += 1;
        table[0] -= 1;
      } else if (table[1] > 0) {
        temp += 2;
        table[1] -= 1;
      } else if (table[2] > 0) {
        answer += 1;
        temp = 0;
        table[2] -= 1;
      } else {
        answer += 1;
        temp = 0;
      }
    }
    if (temp === 0) {
      if (table[2] > 0) {
        temp += 3;
        table[2] -= 1;
      } else if (table[1] > 0) {
        temp += 2;
        table[1] -= 1;
      } else if (table[0] > 0) {
        temp += 1;
        table[0] -= 1;
      } else {
        temp = 0;
      }
    }
  }
  return answer;
}

const arr = Array.from({length: 100}, (a, idx) => (idx % 4) + 1);

module.exports.taxi = taxi;
module.exports.solution = solution;
module.exports.arrayToTable = arrayToTable;
