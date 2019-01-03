function caesarCipher(str, num) {
  num = num % 26;
  let lowerstring = str.toLowerCase();
  let alphabet = make_alphabet();
  let answer = '';
  for (let i = 0; i < lowerstring.length; i++) {
    if (lowerstring[i] === ' ') continue;
    let index = alphabet.indexOf(lowerstring[i]) + num;
    if (index >= 26) index -= 26;
    else if (index < 0) index += 26;

    if (str[i] === str[i].toUpperCase()) {
      answer += alphabet[index].toUpperCase();
    } else answer += alphabet[index];
  }
  return answer;
}

function make_alphabet() {
  let a = 'a'.charCodeAt();
  let z = 'z'.charCodeAt();
  let string = '';
  for (let i = a; i <= z; i++) {
    string += String.fromCharCode(i);
  }
  return string;
}

console.log(caesarCipher('aAZz', -1));
