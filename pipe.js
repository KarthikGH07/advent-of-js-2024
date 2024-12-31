function pipe(...funcs) {
  return function (arg) {
    return funcs.reduce((result, func) => {
      return func(result);
    }, arg);
  };
}

function compose(...funcs) {
  return function (arg) {
    return funcs.reduceRight((result, func) => {
      return func(result);
    }, arg);
  };
}

pipe(times(2), subtract(3), divide(4));
