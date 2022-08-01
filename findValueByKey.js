// Make a function findKeyByValue
//INPUT: Object and a value.
// function should scan the object and 
// Output: returns the first key which contains the given value.
//If no key with the given value is found it should return undefined

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  documentary: "Sky Ladder",
  reality_tv: "Below Deck",
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};


console.log('string')

const findKeyByValue = function(obj, value) {
  let key = '';
  // console.log(key);
  // // if (key === '') {
  // //   return undefined;
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);