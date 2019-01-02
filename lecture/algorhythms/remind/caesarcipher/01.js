function caesarCipher(str, num) {
  num = num % 26;
  let strArr = str.toLowerCase().split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let answer = '';
  let i = 0;
  strArr.forEach(c => {
    if (c === ' ') {
      answer += ' ';
    } else {
      let index = alphabet.indexOf(c) + num;
      if (index > 25) index = index - 26;
      else if (index < 0) index = index + 26;
      if (str[i] === c.toUpperCase()) {
        answer += alphabet[index].toUpperCase();
      } else {
        answer += alphabet[index];
      }
      i++;
    }
  });
  return answer;
}

console.log(caesarCipher('EaC a', 100));
