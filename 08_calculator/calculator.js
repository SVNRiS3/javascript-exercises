const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, currentValue) => total * currentValue);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  return a === 0 ? 1 : Array.from(new Array(a), (x, i) => i + 1).reduceRight((total, currentValue) => total * currentValue)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
