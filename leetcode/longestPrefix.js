function sol(strs) {
  let answer = '';
  let temp = [];
  let min = Math.min(...strs.map(v => v.length));

  for (let i = 0; i < min; i++) {
    for (let j = 0; j < strs.length; j++) {
      temp.push(strs[j][i]);
    }
    temp = temp.reduce((acc, v) => {
      return acc == v && v;
    }, temp[0]);
    if (!temp) break;
    answer += temp;
    temp = [];
  }
  return answer;
}
console.log(sol(['flow', 'flower', 'flight']));
