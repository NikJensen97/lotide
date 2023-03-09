const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
    }
  let check = 0;
  for(let key of Object.keys(object1)) {
    for(let keytwo of Object.keys(object1)) {
      if(key === keytwo) {
        check += 1;
        if(Array.isArray(object1[key]) || Array.isArray(object2[keytwo])) {
          if(!eqArrays(object1[key], object2[keytwo])) {
            return false;
            }
          }
        else if(object1[key] !== object2[keytwo]) {
          return false;
        }
      }
    }
  }
  if(check != Object.keys(object1).length) {
    return false;
  }

  return true;
};


function assertObjectsEqual(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)) {
    console.log(`\u{1F601} \u{1F601} \u{1F601} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u{1F643} \u{1F643} \u{1F643} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const shirtObjectTwo = { color: "red", fit: "poor" };
const anotherShirtObject= { size: "medium", color: "red" };

assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, shirtObjectTwo);
