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

assertEqualArrays([1, 2, 3], [1, 2, 3]);
assertEqualArrays([1, 2, 2], [1, 3, 3]);
