const users = [
  {id: 1, name: 'DD', age: 23},
  {id: 2, name: 'aa', age: 32},
  {id: 3, name: 'bb', age: 41},
  {id: 4, name: 'cc', age: 33},
  {id: 5, name: 'ee', age: 24},
  {id: 6, name: 'df', age: 23},
];
const bvalue = key => obj => obj[key];
const bvalues = key => list => map(list, v => v[key]);

console.log(filter(users, u => u.id === 3)[0]);

function findBy(key, list, value) {
  for (const a of list) {
    if (a[key] === value) return a;
  }
}

function log_len(v) {
  console.log(v.length);
}

function filter(list, predicate) {
  const new_list = [];
  for (const a of list) {
    if (predicate(a)) new_list.push(a);
  }
  return new_list;
}

function map(list, iteratee) {
  const new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}
