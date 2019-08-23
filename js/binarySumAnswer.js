var addBinary = function(a, b) {
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0 || carry > 0) {
    carry += i >= 0 ? parseInt(a[i--]) : 0;
    carry += j >= 0 ? parseInt(b[j--]) : 0;
    result = (carry % 2) + result;
    carry = parseInt(carry / 2);
  }
  return result;
};

console.log(addBinary('10', '11'));
