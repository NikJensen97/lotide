/*const tail = require('../tail');
const assertEqual = require('../assertEqual');
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
console.log(words);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");
*/

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});
