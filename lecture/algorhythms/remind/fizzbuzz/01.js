function fizzbuzz(num){
  for(let i=1; i<=num; i++){
    if(i%15===0) console.log("fizzbuzz");
    else if(i%3===0) console.log("fizz");
    else if(i%5===0) console.log("buzz");
    else console.log(i);
  }
}

// 3일 때는 피즈 5일때는 퍼즈 3과 5의 배수일떄는 피즈버즈
//
fizzbuzz(30)
