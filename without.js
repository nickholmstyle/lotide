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
    console.log("equal array");
  } 
   
};

const without = function(source, itemsToRemove) {
  const sourceCopy = [...source]
  for (let s in sourceCopy) {
    //console.log("about to compare", sourceCopy[s], s)
    for (let r in itemsToRemove) {
      if (itemsToRemove[r] === sourceCopy[s]) {
        sourceCopy.splice(s, 1);
      }
    }
  }
  return sourceCopy

};

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// about to compare 2 1
// about to compare 3 2
// about to compare undefined 3

// about to compare 1 0
// about to compare 3 1
