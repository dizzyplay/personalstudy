console.log("hello");
var list = [2, 4, 5];
function square(a) {
  return a * a;
}

new Promise(function(resolve) {
  (function recur(res) {
    if (res.length === list.length) return resolve(res);
    res.push(square(list[res.length]));
    recur(res);
  })([]);
}).then(console.log);

function ss(v) {
  return new Promise((resolve, reject) => {
    if (v > 10) {
      return resolve("resolve");
    } else return reject("reject");
  });
}

new Promise(function(resolve) {
  (function recurr(r) {
    if (r.length === list.length) return resolve(r);
    r.push(square(list[r.length]));
    recurr(r);
  })([]);
}).then(console.log);
