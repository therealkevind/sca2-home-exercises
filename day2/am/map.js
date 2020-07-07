// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = el => el*3;

// Challenge: Implement the map method below!
Array.prototype.map = function(fun) {
  // this contains the value of the Array
  const arr = this;
  return Array.from(arr, fun);
};

console.log(arr.map(triple));
