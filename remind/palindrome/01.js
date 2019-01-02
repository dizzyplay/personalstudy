function palindrome(str){
  str = str.toLowerCase().split("")
  let validstr = 'abcdefghijklmnopqrstuvwxyz'.split("")
  let purestrArr = []
  str.forEach(char=>{
    let index = validstr.indexOf(char)
    if(index>-1) purestrArr.push(validstr[index]);
  })
  if(purestrArr.join("")===purestrArr.reverse().join("")){
    console.log(purestrArr);
    console.log(purestrArr);
    return true
  } 
  else{
    console.log(purestrArr);
    console.log(purestrArr.reverse());
    return false
  } 
}

console.log(palindrome("Madam a Maddam"))

// 어떤 문자가 거꾸로해도 원래 문자와 같은지 알아보는 함수
