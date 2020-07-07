// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here
const assert = require("assert");

// This function ignores property getters, which could be randomized or have side-effects.
const hasFalsyValue = (()=>{
  const set = new WeakSet();
  return obj => {
    if (!obj) return true;
    if (typeof obj === "object") {
      // Give recursive objects the benefit of the doubt as we recurse.
      if (set.has(obj)) return false;
      set.add(obj);
      try {
        if (Object.values(obj).some(hasFalsyValue)) return true;
      } finally {set.delete(obj)}
    }
    return false;
  };
})();

// Primitives
assert(!hasFalsyValue(-1));
assert(hasFalsyValue(0));
assert(!hasFalsyValue("false"));
assert(hasFalsyValue(""));
assert(!hasFalsyValue(true));
assert(hasFalsyValue(false));
// Basic objects
assert(!hasFalsyValue({}));
assert(!hasFalsyValue({"": true}));
assert(hasFalsyValue({true: false}));
assert(!hasFalsyValue([]));
assert(hasFalsyValue([[[[[[[[[[0]]]]]]]]]]));
assert(!hasFalsyValue(()=>{}));
assert(!hasFalsyValue(class{}));
// Recursive objects, and modifications
{
  const obj = [];
  obj.push(obj);
  obj.push({obj});
  assert(!hasFalsyValue(obj));
  obj.push([obj, true, ""]);
  assert(hasFalsyValue(obj));
}

console.log("All assertions passed");