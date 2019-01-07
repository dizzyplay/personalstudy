function maxProfit(arr){
  let maxValue=-1;
  let buy=0
  let sell=0
  let changeBuy=true
  for(let i=0; i<arr.length-1; i++){
    if(changeBuy) buy = arr[i]
    sell=arr[i+1]
    if(buy<sell){
      changeBuy=false
      let tempProfit = sell - buy
      if(tempProfit>maxValue){
        maxValue = tempProfit
      }
    }
    else changeBuy=true
  }
  return maxValue
}

console.log(maxProfit([32,46,26,38,40,48,42]))
