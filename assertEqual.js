const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:' + actual + ' === ' + expected);
    return true;
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + actual + ' !== ' + expected);
    return false;
  }
};

console.log(assertEqual("Sugar Shack", "Lighthouse Labs"));
console.log(assertEqual(1, 1));
