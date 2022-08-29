const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78]), [8]);
assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78, 79]), [8, 9]);
assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78,]), [8, 9]);
assertArraysEqual(middle([1, 2, 3, 8, 9, 9, 78, 79]), [8,])