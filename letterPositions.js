// create a function that returns the indices of each letter in a string.
// INPUT: String
// OUTPUT: an object that has a key for each letter that exists in the string,
// and a value that is an array containing the indices (positions in a 0 based index) for each key
// need a variable to test, that will be a string
// if the letter exists, return the indices

// const eqArrays = function(a, b) {
//   if (a === b) return true;
//   if (a === null || b === null) return false;
//   if (a.length !== b.length) return false;

//   for (var i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false;
  
//   }
//   return true;
// };


// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === false) {
//     console.log("not equal arrays");
//   } else {
//     console.log("equal array")
//   } 
   
// }

const without = function(source, itemsToRemove1) {
  const sourceCopy = [...source]
  for (let s in sourceCopy) {
    //console.log("about to compare", sourceCopy[s], s)
    for (let r in itemsToRemove1) {
      if (itemsToRemove1[r] === sourceCopy[s]) {
        sourceCopy.splice(s, 1);
      }
    }
  }
  return sourceCopy

};

const letterPositions = function(string) {
  const result = {};
  //create a variable to store the output.
  for (let i = 0; i < string.length; i++) {
    //iterate through the input
    const letter = string[i];
    // console.log("KEY: ", letter)
    // create a variable to store an object within an object.
    if (letter !== ' ') {
    // console.log('---', letter)
      // create a condition that states if the "letter" is not a space then the code can continue to run.  
      if (result[letter]) {
        // if the key already exists 
        result[letter].push(i)
        // push the index value to that key
      } else {
        result[letter] = [i];
        // push the new key
      }
     
    }
    
  }

  return result;
};

const testString = "hello bye";
console.log(letterPositions(testString));



// store each one og the abject in the object
    // how to create an new instance inside an object
    // tie it to a variable
    // run a for loop to iterate through the input
    // return the value of the index for each step.
    // 