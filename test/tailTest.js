const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

const words = ['hello', 'lighthouse', 'labs'];
tail(words);
assertEqual(words.length, 3);
assertEqual(words[0], 'hello');