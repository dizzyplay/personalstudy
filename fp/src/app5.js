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
  const args = Array.prototype.slice.call(arguments);
  const fn = this;
  return function() {
    let arg = 0;
    for (let i = 0; i < args.length && arg < arguments.length; i++) {
      console.log(args);
      if (args[i] === undefined) args[i] = arguments[arg++];
    }
    return fn.apply(this, args);
  };
};

const ac = abc.partial(1, undefined, undefined);
ac(1, 2);
function abc(a, b, c) {
  console.log(a, b, c);
}

function add() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}