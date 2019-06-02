function map(list, iteratee) {
  const new_list = [];
  for (const v of list) {
    new_list.push(iteratee(v));
  }
  return new_list;
}

function filter(list, predicate) {
  const new_list = [];
  for (const v of list) {
    if (predicate(v)) new_list.push(v);
  }
  return new_list;
}

function get(list, idx) {
  return list[idx];
}

function find(list, predicate) {
  for (const k in list) {
    if (predicate(list[k], k, list)) return list[k];
  }
}

function identity(v) {
  return v;
}
function not(v) {
  return !v;
}

function positive(list) {
  return find(list, identity);
}
function some(list) {
  return compose(
    not,
    not,
    positive,
  )(list);
}

function findIndex(list, predicate) {
  for (const k in list) {
    if (predicate(list[k])) return k;
  }
  return -1;
}

function beq(b) {
  return function(a) {
    return a === b;
  };
}

function negativeIndex(list) {
  return findIndex(list, not);
}

function every(list) {
  return compose(
    beq(-1),
    negativeIndex,
  )(list);
}

function compose() {
  const args = arguments;
  const start = args.length - 1;
  return function() {
    let result = args[start].apply(this, arguments);
    let i = start;
    while (i--) {
      result = args[i].call(this, result);
    }
    return result;
  };
}

function callWith10(v, f) {
  return f(10, v);
}

function constant(v) {
  return function() {
    return v;
  };
}

function callWith(v) {
  return function(v2, f) {
    return f(v, v2);
  };
}

Function.prototype.partial = function() {
  const _args = arguments;
  const fn = this;
  return function() {
    const args = Array.prototype.slice.call(_args);
    let s = 0;
    for (let i = 0; i < args.length && s < arguments.length; i++) {
      if (args[i] === undefined) args[i] = arguments[s++];
    }
    return fn.apply(null, args);
  };
};

function abc(a, b, c) {
  console.log(a, b, c);
}

function equal(a, b) {
  return a === b;
}

const bj = {
  name: 'bj',
  greeting: _.partial(
    function(a, b) {
      return `${a} ${this.name} ${b}`;
    },
    'hi iam',
    'nice to meet you',
  ),
};

function validAdd(a, b) {
  return valid() ? a + b : new Error('Invalid value');
  function valid() {
    return Number.isInteger(a) && Number.isInteger(b);
  }
}

function L(str) {
  const f = str.split('=>');
  return new Function(f[0], 'return ' + f[1]);
}

function _map(list, iter) {
  const new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list[i] = iter(list[i], i);
  }
  return new_list;
}

function L2(str) {
  if (L2[str]) return L2[str];
  const v = str.split('=>');
  return (L2[str] = new Function(v[0], `return ${v[1]}`));
}

function flat(arr) {
  return (function f(arr, newArr) {
    arr.forEach(v => (Array.isArray(v) ? f(v, newArr) : newArr.push(v)));
    return newArr;
  })(arr, []);
}

function flat2(arr, newArr) {
  arr.forEach(v => (Array.isArray(v) ? flat2(v, newArr) : newArr.push(v)));
  return newArr;
}

function flat3(arr, newArr) {
  if (!newArr) return flat3(arr, []);
  arr.forEach(v => (Array.isArray(v) ? flat3(v, newArr) : newArr.push(v)));
  return newArr;
}

function test(a, b, c) {
  console.log(a, b, c);
  console.log('this', this);
  console.log('arguments', arguments);
}

const slice = Array.prototype.slice;
function toArray(data) {
  return slice.call(data);
}

function rest(data, n) {
  return slice.call(data, n || 1);
}

const u1 = {name: 'pj', friends: []};
const u2 = {name: 'ha', friends: []};

function addFriend(u1, u2) {
  (u1.friends.indexOf(u2) == -1 || alert('이미 친구 ')) &&
    confirm('친구로 추가할까요?') &&
    u1.friends.push(u2);
}

const sub = function(a, b, callback) {
  setTimeout(function() {
    callback(a - b);
  }, 1000);
};

const div = function(a, b, callback) {
  setTimeout(function() {
    callback(a / b);
  }, 1000);
};

function wrap(func) {
  return function() {
    return func.apply(null, arguments);
  };
}

var add = wrap(function(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 1000);
});
