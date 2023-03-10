const eqArrays = function(actual, expected) {
  let count = 0;
  while(count < actual.length) {
    if(actual[count] != expected[count]) {
    return false;
    }
    count += 1;
  }
  return true
};

function assertEqualArrays(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log("Your arrays are equal!");
  }
  else console.log("The arrays were not equal");

};

const takeUntil = function(array, callback) {
  let output = [];
  for (let item of array) {
    if(!callback(item)) {
    output.push(item) 
    };
    if(callback(item)) {return output};
  }


  return output;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqualArrays(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertEqualArrays(results2, ["I've", "been", "to", "Hollywood"]);
