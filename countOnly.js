const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};



// Create a function that will be given an array and an object.
// allItems: an array of strings that we need to look through.
// itemsToCount: an object specifying what to count.
//It will return an object containing counts of everything that the input object listed.
// The function should report back how many instances of each strings were found in the allItems array of strings.
//Add code to loop over all the items in the array and print them to the console.
//Inside the loop, increment the counter for each item.
//set property with that string key to: the value that was already there (0 if nothing was there) with 1 added to it.
//
const countOnly = function(allItems, itemsToCount) {
  const newObject = {};
  for (let item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (newObject[item]) {
        newObject[item] += 1; 
      } else {
        newObject[item] = 1;
      }
    }
  }
  return newObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Aguohanna",
  "Fang",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Aguohanna": false});

assertEqual(result1["Jason"], 1); //True 1 === 1
assertEqual(result1["Karima"], undefined); //True undefined === undefined
assertEqual(result1["Fang"], 2); //True 2 === 2
assertEqual(result1["Aguohanna"], undefined); //True 1 !== undefined
console.log(countOnly);