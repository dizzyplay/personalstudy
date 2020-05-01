let a = [1,2,3,4,1,2,1,1,1,1,1,2,4,3,2,1];


function* bundler(problems, maxSize){
  let result = []
  let temp;
  while(problems.length > 0){
    if (problems[0] > maxSize) throw new Error('problem size too big')
    temp = problems.shift()
    result.push(temp)
    if (result.reduce((v,acc) => acc += v, 0) > maxSize){
      result.pop()
      problems.unshift(temp);
      temp = null;
      yield result;
      result = []
    }
  }
  yield result;
}

const b = bundler(a,4);

for ( const v of b ){
  console.log(v);
}
