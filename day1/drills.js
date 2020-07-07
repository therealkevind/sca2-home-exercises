const assert = require("assert");

const reverse = function(str) {
  return str.split("").reverse().join("");
};

const factorial = function(num) {
  return Array.from({length: num}, (_, i) => i+1).reduce((a, i) => a*i, 1);
};

const announceDate = (()=>{
  const digits = "one two three four five six seven eight nine".split(" ");
  const hourNames = ["twelve", ...digits, "eleven"];
  const minNames = ["o'clock"].concat(
    digits.map(i=>`oh-${i}`),
    "eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),
    ...["twenty", "thirty", "forty", "fifty"].map(i => [i, ...digits.map(e => `${i}-${e}`)]),
  );
  return function() {
    const now = new Date();
    const month = now.toLocaleDateString("en-US", {month: "long"}),
      day = now.getDate(),
      year = now.getFullYear();
    const hours = now.getHours(),
      mins = now.getMinutes();
    return `Today's date is ${month} ${day}${
      (day > 20 || day < 10) && day % 10 < 4 ? ["th", "st", "nd", "rd"][day % 10] : "th"
    }, ${year}. It is ${hourNames[hours % 12]} ${minNames[mins]} ${
      hours < 6 || hours > 20 ? "at night"
      : hours < 12 ? "in the morning"
      : hours < 18 ? "in the afternoon" : "in the evening"
    }.`;
  };
})();

const shiftRight = function(str, num) {
  return str.substring(str.length - num) + str.substring(0, str.length - num);
};

const tokenize = function(str) {
  return str.split(/\W+/g).filter(i => i);
};

const uniqueOnes = function(ary) {
  return Array.from(new Set(ary));
};

const zip = function(arr1, arr2) {
  return arr1.length === arr2.length ? arr1.map((e, i) => [e, arr2[i]]) : -1;
};

const unzip = function(arr) {
  return Array.from({length: 2}, (_, i) => Array.from(arr, e=>e[i]));
};

// Write tests here:

assert.strictEqual(reverse("3df"), "fd3");
assert.strictEqual(factorial(5), 120);
assert.strictEqual(shiftRight("Hello", 3), "lloHe");
assert.deepEqual(tokenize("Hello, world!"), ["Hello", "world"]);
assert.deepEqual(uniqueOnes([1,2,1,1,3,4,2,5,3,4,8,7]),[1,2,3,4,5,8,7]);
assert.deepEqual(zip([1, 2, 3], [5, 3, 1]), [[1, 5], [2, 3], [3, 1]]);
assert.strictEqual(zip([1, 2, 3], [5, 3]), -1);
assert.strictEqual(zip([1, 2], [5, 3, 1]), -1);
assert.deepEqual(unzip([[1, 5], [2, 3], [3, 1]]), [[1, 2, 3], [5, 3, 1]]);
assert.deepEqual(unzip(zip([], [])), [[], []]);

console.log(announceDate());
console.log("All assertions passed");