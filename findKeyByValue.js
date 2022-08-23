const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//Implement the function findKeyByValue which takes in an object and a value.

//It should scan the object and return the first key which contains the given value.
//Consider using the Object.keys function to help you easily search through all the object keys.

//If no key with that given value is found, then it should return undefined.
// if (key !== undefined) {run code}. 
// Consider using for...of to loop over the keys returned by Object.keys.


const findKeyByValue = function(obj, val) {
  let result = ""
  let val = ""
  const keysArr = Object.keys(obj);
  
  for (let keys of keysArr) {
   
   }
  }
}

//If no key with the value is found return undefined and exit the loop.


  // const keys = Object.keys(obj);
  // console.log(keys);
    // for (let i = 0; i < obj.length; i++) {
      
      //loop through the values from beginning to end to find the key which holds the given value. 
      //If the value is found, stop the program and return the key.
      // console.log();

  

  //return the key.
  //keys are strings within objects. 
  // for (let i = 0; i < val.length; i++) {}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
