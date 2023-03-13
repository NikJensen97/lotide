const tail = require('../tail');
const assertEqual = require('../assertEqual');
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
console.log(words);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");
