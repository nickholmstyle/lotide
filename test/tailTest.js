const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

const words = ['hello', 'lighthouse', 'labs'];
console.log(tail(words));
console.log(assertEqual(words.length, 3));
console.log(assertEqual(words[0], 'hello'));