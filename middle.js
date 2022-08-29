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
    console.log("equal array");
  }
   
};


const middle = function(array) {

  if (array.length === 1 || array.length === 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]];
  }
  if (array.length % 2 === 0) {
    const leftSide = [Math.floor(array.length / 2) - 1];
    const rightSide = [Math.floor(array.length / 2)];
    return [array[leftSide], array[rightSide]];
  }
};


console.log(middle([1, 2, 3, 8, 9, 9, 78]));

assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78]), [8])

git 

