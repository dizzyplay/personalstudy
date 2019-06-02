function wrap(f) {
  return function() {
    return f.apply(null, arguments);
  };
}

function _async(f) {
  return function() {
    arguments[arguments.length++] = function(r) {
      _callback(r);
    };

    (function wait(args) {
      for (let i = 0; i < args.length; i++)
        if (args[i] && args[i].name == '_async_cb_receiver')
          return args[i](function(arg) {
            args[i] = arg;
            wait(args);
          });
      f.apply(null, args);
    })(arguments);

    var _callback;
    function _async_cb_receiver(callback) {
      _callback = callback;
    }
    return _async_cb_receiver;
  };
}

function log(arg) {
  console.log(arg);
}
