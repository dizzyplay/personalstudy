const User = function(id, name, age) {
  this.getId = () => id;
  this.getName = () => name;
  this.getAge = () => age;
};

const users = [
  {id: 1, name: 'aa', age: 20},
  {id: 2, name: 'bb', age: 30},
  {id: 3, name: 'cc', age: 25},
];

const users2 = [
  new User(1, 'aa', 19),
  new User(2, 'bb', 28),
  new User(3, 'cc', 37),
  new User(4, 'dd', 43),
  new User(5, 'ee', 32),
  new User(6, 'ff', 23),
  new User(7, 'zz', 33),
];

function findBy(key, list, value) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === value) return list[i];
  }
}

function find(list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

console.log(find(users, obj => obj.name.indexOf('a') != -1));

function map(list, iteratee) {
  const new_list = [];
  for (const a of list) {
    new_list.push(iteratee(a));
  }
  return new_list;
}

function filter(list, predicate) {
  const new_list = [];
  for (const a of list) {
    if (predicate(a)) new_list.push(a);
  }
  return new_list;
}
