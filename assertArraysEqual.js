const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
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

const a = [4, 2, 4];
const b = [4, 2, 4]
assertArraysEqual(a, b);
