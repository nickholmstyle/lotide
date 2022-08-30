const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
describe("#middle", () => {
  it("returns 8 for 1, 2, 3, 8, 9, 9, 78]", () => {
    assert.deepEqual(middle([1, 2, 3, 8, 9, 9, 78]), [8]);
  });
  it("returns 8, 9 for [1, 2, 3, 8, 9, 9, 78, 79]", () => {
    assert.deepEqual(middle([1, 2, 3, 8, 9, 9, 78, 79]), [8, 9]);
  });
  it("returns 8, 9 for [1, 2, 3, 8, 9, 9, 78,]", () => {
    assert.deepEqual(middle([1, 2, 3, 8, 9, 9, 78,]), [8, 9]);
  });
  it("returns 8, 9 for [1, 2, 3, 8, 9, 9, 78, 79]", () => {
    assert.deepEqual(middle([1, 2, 3, 8, 9, 9, 78, 79]), [8])
  });
});


// assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78]), [8]);
// assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78, 79]), [8, 9]);
// assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78,]), [8, 9]);
// assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78, 79]), [8,])