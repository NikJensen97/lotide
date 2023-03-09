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




const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {

    results.push(callback(item));

  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[1]);

assertEqualArrays(results1, ['g', 'c', 't', 'm', 't']);
assertEqualArrays(results2, ['g', 'c', 't', 'm', 't']); // this should fail
assertEqualArrays(results2, ['r', 'o', 'o', 'a', 'o']);
