const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLett = require('./countLett');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head   = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const tail   = require('./tail');
const without = require('./without');

module.exports = {
  assertArraysEqual: assertArraysEqual, 
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLett: countLett,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  head: head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  takeUntil: takeUntil,
  tail: tail,
  without: without
}



