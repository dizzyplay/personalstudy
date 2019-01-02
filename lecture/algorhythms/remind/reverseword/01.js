function reverseword(str) {
  let strArr = str.split(' ');
  let answer = '';
  strArr.forEach(word => {
    for (let i = word.length - 1; i >= 0; i--) {
      answer += word[i];
    }
    answer += ' ';
  });
  return answer;
}

console.log(reverseword('this is good'));
