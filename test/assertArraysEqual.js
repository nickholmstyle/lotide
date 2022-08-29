const assertArraysEqual = require('../assertArraysEqual');

const a = [4, 2, 4];
const b = [4, 2, 4];
const c = [3, 2, 1];
const d = [1, 2, 3];
assertArraysEqual(a, b);
assertArraysEqual(c, d);