function reverseWords(string) {
  let stringArr = string.split(' ');
  let reversedArr = [];
  stringArr.forEach(word => {
    let reversedword = '';
    for (i = word.length - 1; i >= 0; i--) {
      reversedword += word[i];
    }
    reversedArr.push(reversedword);
  });
  return reversedArr.join(' ');
}

console.log(reverseWords('this is good'));
