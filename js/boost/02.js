function checkPair(arr) {
  const result = {};
  const s_arr = arr.sort((a, b) => a - b);
  let count = 1;
  let temp;
  while (s_arr.length > 0) {
    count = 1;
    temp = s_arr.shift();
    while (s_arr.length > 0) {
      if (temp == s_arr[0]) {
        s_arr.shift();
        count++;
      } else {
        if (count > 1) result[temp] = count;
        break;
      }
    }
  }
  if (count > 1) result[temp] = count;
  return result;
}


function getMax(obj){
  let max={}
  let two={}
  for(const k in obj){
    if(obj[k]>=4){
      max={}
      max[k]=obj[k]
      return max
    }
    if(obj[k]==3){
      max={}
      max[k]= obj[k]
    } 
    if(obj[k]==2) {
      two={}
      two[k]=obj[k]
    }
  }
  if(isEmpty(max) && !isEmpty(two)) return two
  return max
}

const p =checkPair([1,2,3,4,5])
const p1 =checkPair([1,2,3,4,5])
const max = getMax(p)
const max1 = getMax(p1)
console.log(p,p1);
console.log(max,max1);
console.log(sol(max,max1))

function sol(a,b){
  let one=[],two=[];
  for(const k in a){
    one.push(k);
    one.push(a[k])
  }
  for(const k in b){
    two.push(k);
    two.push(b[k])
  }
  if(one[1]>two[1]){
    return 1
  }else if(one[1]==two[1]){
    if(one[0]>two[0]) return 1;
    else if(one[0]==two[0]) return 0;
    else return 2
    return 0
  }else{
    return 2
  }
}

function isEmpty(obj){
  for(const k in obj){
    if(obj.hasOwnProperty(k)){
      return false
    }
  }

  return true
}

a={}

console.log(isEmpty(a))

