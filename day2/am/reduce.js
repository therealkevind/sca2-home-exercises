// complete the implementation of sum and reduce such that reducing an array
// returns the product of its values
// [0,4,3,6,9].fold(sum, 0) === 22

const arr = [0, 1, 2, 3, 4];

// Note: acc stands for accumulator, cur stands for current
const sum = (acc, cur) => acc + cur;

// Challenge: Implement the reduce method below!
Array.prototype.reduce = function(fun, initValue) {
  // this contains the value of the Array
  const arr = this;
  let acc = initValue;
  for (const i of arr)
    acc = fun(acc, i);
  return acc;
};

const total = arr.reduce(sum, 0);
console.log(total);
