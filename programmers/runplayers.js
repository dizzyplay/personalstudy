function solution(participant, completion) {
  var answer = '';
  let obj = {};
  for(let i =0; i<participant.length; i++){
    if(!obj[participant[i]]) obj[participant[i]] =1;
    else{
        obj[participant[i]]++
    }
  }
  completion.forEach(p =>{
    if(obj[p]) obj[p]--;
  })
  Object.keys(obj).map(x=>{
    if(obj[x]>0){
      answer += x
    }
  })
  return answer;
}

participant=['james','vovo','himan']
completion=['vovo','james']

console.log(solution(participant,completion));

