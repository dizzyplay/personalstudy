function filter(list, predicate) {
  const new_list = [];
  for (const v of list) {
    if (predicate(v)) new_list.push(v);
  }
  return new_list;
}
function map(list, iteratee) {
  const new_list = [];
  for (const v of list) {
    new_list.push(iteratee(v));
  }
  return new_list;
}

function find(list, predicate) {
  for (const v of list) {
    if (predicate(v)) return v;
  }
}
function findIndex(list, predicate) {
  for (const k in list) {
    if (predicate(list[k])) return k;
  }
  return -1;
}

function object(k, v) {
  const obj = {};
  obj[k] = v;
  return obj;
}

function bmatch(obj2, v) {
  if (arguments.length === 2) obj2 = object(obj2, v);
  return function(obj) {
    return match(obj, obj2);
  };
}

function match(obj1, obj2) {
  for (const k in obj2) {
    if (obj1[k] !== obj2[k]) return false;
  }
  return true;
}

function positive(list) {
  return filter(list, identity);
}

function negativeIndex(list) {
  return findIndex(list, not);
}

const _ = {};

const identity = v => v;
const not = v => !v;
function beq(b) {
  return function(a) {
    return a === b;
  };
}

// 하나라도 참값이면 트루
// 아니면 false
_.some = function(list) {
  return not(not(positive(list).length));
};

//모든 값이 트루여야 트루 하나라도 false면 false
_.every = function(list) {
  return beq(-1)(negativeIndex(list));
};
