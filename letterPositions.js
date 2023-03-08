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

const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  for (const item of sentence) {
    if(item !== ' ') {
      results[item] = [];
    }
  }
  for (const item of sentence) {
    if(item !== ' ') {
      results[item].push(position);
      position += 1
    }
    else position += 1;
  }


  return results;
};

assertEqualArrays(letterPositions("hello").e, [1]);
assertEqualArrays(letterPositions("hello").l, [2, 3]);
