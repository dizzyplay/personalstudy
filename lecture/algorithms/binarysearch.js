function bt(arr, key) {
  let mid = Math.floor(arr.length / 2);
  let midValue = arr[mid];

  if (midValue === key) {
    return key;
  } else if (midValue > key && arr.length > 1) {
    return bt(arr.slice(0, mid), key);
  } else if (midValue < key && arr.length > 1) {
    return bt(arr.slice(mid), key);
  } else return false;
}

console.log(bt([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
