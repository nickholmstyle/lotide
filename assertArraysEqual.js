const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === false) {
    console.log("not equal arrays");
  } else {
    console.log("equal array")
  } 
   
}

const a = [1, 2, 3];
const b = [3, 4, 5]
assertArraysEqual(a, b);
