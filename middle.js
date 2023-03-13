const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

function middle(array) {
  let newarray = [];
  if (array.length <= 2){
    return newarray;
  }
  if (array.length%2 == 0) {
    newarray.push(array[array.length/2 - 1]);
    newarray.push(array[array.length/2]);
    return newarray;
  }
  else {
    newarray.push(array[Math.floor(array.length/2)]);
    return newarray;
  }
};


module.exports = middle;
