function bt(arr, key) {
  let midIndex = Math.floor(arr.length / 2);
  let midIndexValue = arr[midIndex];

  if (midIndexValue === key) {
    return key;
  } else if (midIndexValue > key && arr.length > 1) {
    return bt(arr.slice(0, midIndex), key);
  } else if (midIndexValue < key && arr.length > 1) {
    return bt(arr.slice(midIndex, arr.length), key);
  } else return false;
}

console.log(bt([5, 7, 12, 16, 36, 39, 42, 56, 71], 12));
console.log(bt([5, 7, 12, 16, 36, 39, 42, 56, 71], -1));
