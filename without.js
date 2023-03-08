function without(source, removeMe) {
  let count = 0;
  let newArray = source;
  while(count < source.length) {
    for(let i = 0; i < removeMe.length; i++) {
      if(newArray[count] === removeMe[i]) {
        newArray.splice(count , 1);
      }
    }
  count += 1;
  }
return newArray;

};
/* without([1, 2, 3], [1, 2]);
without([1, 1, 3, 4, 5], [2, 3, 4, 5]);
without(["hello", "goodbye"], ["goodbye"]);
*/
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


assertEqualArrays(without([1, 2, 3], [1, 5]), [1, 2]);
assertEqualArrays(without([1, 2, 3, 4], [4]), [1, 2, 3]);
