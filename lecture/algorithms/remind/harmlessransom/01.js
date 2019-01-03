function harmlessransomnote(note, message){
  noteArr = note.toLowerCase().split(" ")
  messageArr = message.toLowerCase().split(" ")
  messageObj = {}

  messageArr.forEach(word=>{
    if(!messageObj[word]) messageObj[word]=1
    else{
      messageObj[word]++
    }
  })
  let ispossible=true;
  noteArr.forEach(word=>{
    if(!messageObj[word]) return ispossible=false;
    else{
      messageObj[word]--;
    }
    if(messageObj[word] < 0) return ispossible=false;
  })
  return ispossible
}


// 특정 문자열에 해당 문자열이 있는지 확인 있다면 true 없다면 false
//

console.log(harmlessransomnote('test', 'test is good'))
