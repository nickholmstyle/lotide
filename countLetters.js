const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

// Create a function the takes in a phrase and outputs all the letters it contains,
// with a count of how many times it appears.
// The first argument will be the string that hold the phrase.
// 

const countLetters = function(string, value) {
  // console.log("INPUT: ", string)
  let letterCount = {};  
  for (let letter of string) {
      // console.log(letter);
    // if (letterCount[letter] !== ' ' ) {
    //   string.splice(letter, 1)
    //   letter--;
    
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++
    }
   
  }  
  // console.log(letterCount);
  return letterCount;
};

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

// const newString = without(testString)


const testString = without(("lighthouse in the house"), " ");

console.log(countLetters(testString));
// console.log(countLetters(testString));