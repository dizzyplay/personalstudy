const User = function(id, name, age) {
  this.getId = () => id;
  this.getName = () => name;
  this.getAge = () => age;
};

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const users = [
  {id: 1, name: 'vovo', age: 20},
  {id: 2, name: 'james', age: 30},
  {id: 3, name: 'kkamange', age: 25},
  {id: 4, name: 'dasom', age: 38},
  {id: 5, name: 'sera', age: 28},
  {id: 6, name: 'himan', age: 33},
  {id: 7, name: 'goodman', age: 21},
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
