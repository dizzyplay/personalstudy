function caesarCipher(str, num){
  num = num % 26;
  let lowerString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let value ="";
  for(let i=0; i<lowerString.length; i++){
    if(lowerString[i] === " ") value += " ";
    else{
      let index = alphabet.indexOf(lowerString[i]) + num;
      if(index>25) index=index-26;
      if(index<0) index=index+26;
      if(str[i] === str[i].toUpperCase()){
        value += alphabet[index].toUpperCase()
      }
      else value += alphabet[index];
    }
  }
  return value
}

console.log(caesarCipher('Javascript',-900));
