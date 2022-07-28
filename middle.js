const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  
  }
  return true;
};


const middle = function(array) {

// For an array with 1 or 2 elements there's no middle, return an empty array

  if (array.length === 1 || array.length === 2){
    return []    
  } 
//For arrays with odd number of elements, an array with a single middle element should be returned
  if (array.length % 2 !== 0) {

    return [array[Math.floor(array.length / 2)]]
  }
  //For an array with an even number of elemnts reutrun the two middle numbers.
  if (array.length % 2 === 0) {
    const leftSide = [Math.floor(array.length / 2) - 1]
    const rightSide = [Math.floor(array.length / 2)]
    return  [array[leftSide], array[rightSide]];
  }
  
};


// console.log(middle([1, 2, 3, 8, 9, 9, 78]));

console.log(assertEqual(middle), [8]);


//Expect 3