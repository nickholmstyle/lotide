
const assert = require('chai').assert;
const tail = require('../tail.js');
const eqArrays = require('../eqArrays')
// const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.strictEqual(eqArrays(tail([1, 2, 3]), [2, 3]), true);
  });
  it("returns 'lighthouse, labs' for ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']);
  });

});


// const words = ['hello', 'lighthouse', 'labs'];
// tail(words);
// assertEqual(words.length, 3);
// assertEqual(words[0], 'hello');