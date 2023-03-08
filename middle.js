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

assertEqualArrays(middle([1, 2, 3]), [2]);
assertEqualArrays(middle([2, 2, 4, 5]), [2, 4]);
assertEqualArrays(middle([1, 3, 5, 7, 9]), [5]);
