const assertEqual = require('./assertEqual');


const tail = function(array) {
  let output = [];
  for (let y = 1; y < array.length; y++) {
    output.push(array[y]);

  }

  return output;
};

module.exports = tail;
