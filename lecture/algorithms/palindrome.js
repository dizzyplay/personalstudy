function palindrome(string){
  string = string.toLowerCase();
  let charArr = string.split("");
  let validArr = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let stringArr = []
  charArr.forEach(c=>{
    if(validArr.indexOf(c)>-1) stringArr.push(c)
  })
  if(stringArr.join("") === stringArr.reverse().join("")) return true
  else return false
}

console.log(palindrome("i'm a mi"))
console.log(palindrome('maam'));
