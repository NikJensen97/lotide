/* const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([2, 2, 4, 5]), [2, 4]);
assertArraysEqual(middle([1, 3, 5, 7, 9]), [5]);
*/
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});
