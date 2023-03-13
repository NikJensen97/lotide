const eqArrays = require('./eqArrays');

function assertArraysEqual(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log("Your arrays are equal!");
  }
  else console.log("The arrays were not equal");

};

module.exports = assertArraysEqual;
