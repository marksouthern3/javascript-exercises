const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let summ = 0;
  arr.forEach(num => summ += num);
  return summ;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(num => product *= num);
  return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  result = 1;
  for (let i = num; i > 0; i--) result *= i;
  return result;
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
