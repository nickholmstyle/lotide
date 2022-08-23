const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//Implement a function
//INPUT: an object, and a value.
//OUTPUT: return the first key that contains the given value or undefined if none.

const findKeyByValue = function (obj, val) {
  let result = undefined;
  let objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (obj[key] === val) {
      result = key
    }
  }
  return result;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "thriller");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "thriller");
//Implement the function findKeyByValue which takes in an object and a value.

//It should scan the object and return the first key which contains the given value.
//Consider using the Object.keys function to help you easily search through all the object keys.

//If no key with that given value is found, then it should return undefined.
// if (key !== undefined) {run code}. 
// Consider using for...of to loop over the keys returned by Object.keys.




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