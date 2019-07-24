function sol(arr) {
  let answer = [];
  let temp;
  let sorted_arr = arr.sort((a, b) => a - b);
  let count = 1;
  while (sorted_arr.length > 0) {
    count = 1;
    temp = sorted_arr.shift();
    while (sorted_arr.length > 0) {
      if (temp == sorted_arr[0]) {
        sorted_arr.shift();
        count++;
      } else {
        if (count > 1) answer.push(count);
        break;
      }
    }
  }
  if (count > 1) answer.push(count);
  return answer;
}

console.log(sol([3, 3]));
