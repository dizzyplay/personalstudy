const User = function(id, name, age) {
  this.getId = () => id;
  this.getName = () => name;
  this.getAge = () => age;
};

const users = [
  {id: 1, name: 'aa', age: 20},
  {id: 2, name: 'bb', age: 30},
  {id: 3, name: 'cc', age: 25},
  {id: 4, name: 'dd', age: 38},
  {id: 5, name: 'ee', age: 28},
  {id: 6, name: 'ff', age: 33},
  {id: 7, name: 'gg', age: 21},
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

const allPositive = [1, 1, 1, 1];
const allNegative = [0, 0, 0, 0];
const somePositive = [1, 0, 0, 0, 0];
