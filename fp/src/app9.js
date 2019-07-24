var ARRAY_MAX_LENGTH = Math.pow(2, 53) - 1;
var _ = {};
_.map = function(data, iteratee) {
  let new_list = [];
  if (isLikeArray(data)) {
    for (let i = 0; i < data.length; i++) {
      new_list.push(iteratee(data[i], i, data));
    }
  } else {
    for (let key in data) {
      if (data.hasOwnProperty(key))
        new_list.push(iteratee(data[key], key, data));
    }
  }
  return new_list;
};

function getLength(list) {
  return list.length == null ? void 0 : list.length;
}

function isLikeArray(list) {
  var len = getLength(list);
  return typeof len == 'number' && len >= 0 && len <= ARRAY_MAX_LENGTH;
}

_.identity = v => v;

_.values = function(data) {
  return _.map(data, _.identity);
};

function args1(a, b) {
  return b;
}

_.keys = function(data) {
  return _.map(data, args1);
};

_.each = function(data, iteratee) {
  if (isLikeArray(data)) {
    for (let i = 0; i < data.length; i++) {
      iteratee(data[i], i, data);
    }
  } else {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        iteratee(data[key], key, data);
      }
    }
  }
  return data;
};

function bloop(new_data, body) {
  return function(data, iteratee) {
    let result = new_data(data);
    if (isLikeArray(data)) {
      for (let i = 0; i < data.length; i++) {
        body(iteratee(data[i], i, data), result);
      }
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          body(iteratee(data[key], key, data), result);
        }
      }
    }
    return result;
  };
}

_.noop = function() {};
_.array = function() {
  return [];
};
_.push_to = function(val, obj) {
  obj.push(val);
};

const bmap = bloop(_.array, _.push_to);

const beach = bloop(_.identity, _.noop);
