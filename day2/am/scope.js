// Part 1:
//  - What will print and why?  [1, 2, undefined; a is in function scope and thus doesn't get the value 1 from outside]
//  - What will change if we delete line 5? Why?  [Nothing; line 5 is a comment]

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.
/* eslint-disable no-use-before-define */
const x = ()=>{
  // let a;
  console.log(a);
};

const y = ()=>{
  a = 2;
  console.log(a);
  x();
};

let a = 1;
console.log(a);
y();
