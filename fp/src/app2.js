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

function bmatch1(k, v) {
  return function(obj) {
    return obj[k] === v;
  };
}

function bmatch(obj2, v) {
  if (arguments.length === 2) obj2 = object(obj2, v);
  return function(obj1) {
    return match(obj1, obj2);
  };
}

function object(k, v) {
  const obj = {};
  obj[k] = v;

  return obj;
}

function match(obj1, obj2) {
  for (const k in obj2) {
    if (obj1[k] !== obj2[k]) return false;
  }
  return true;
}

function findIndex(list, predicate) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) return i;
  }
  return -1;
}

const _ = {};

_.map = function(list, iteratee) {
  let new_list = [];

  for (let i = 0; i < list.length; i++) {
    new_list.push(iteratee(list[i], i, list));
  }
  return new_list;
};

_.filter = function(list, predicate) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) new_list.push(list[i]);
  }
  return new_list;
};

_.find = function(list, predicate) {
  for (const k in list) {
    if (predicate(list[k], k, list)) return list[k];
  }
};

_.findIndex = function(list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return i;
  }
  return -1;
};

_.identity = function(v) {
  return v;
};

function not(v) {
  return !v;
}

function beq(b) {
  return function(a) {
    return a === b;
  };
}

// _.some 배열에 하나라도 긍정적인 값이 있으면  true 아니면 false

//_.some = function(list) {
//  return not(not(positive(list)));
//};
//
//// _.every 배열요소가 모두 긍정적인 값이면 true 하나라도 false면 false
//
//_.every = function(list) {
//  return beq(-1)(negativeIndex(list));
//};

function positive(list) {
  return _.find(list, _.identity);
}

function negativeIndex(list) {
  return _.findIndex(list, not);
}

_.compose = function() {
  let args = arguments;
  const start = args.length - 1;
  return function() {
    let i = start;
    let result = args[start].apply(this, arguments);
    while (i--) {
      result = args[i].call(this, result);
    }
    return result;
  };
};

const greet = name => 'hi' + name;

const exclaim = statement => statement.toUpperCase() + '!';

_.some = _.compose(
  not,
  not,
  positive,
);
_.every = _.compose(
  beq(-1),
  negativeIndex,
);
