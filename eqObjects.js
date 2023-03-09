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

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F601} \u{1F601} \u{1F601} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F643} \u{1F643} \u{1F643} Assertion Failed: ${actual} !== ${expected}`);
  }

};


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

const shirtObject = { color: "red", size: "medium" };
const shirtObjectTwo = { color: "red", fit: "poor" };
const anotherShirtObject= { size: "medium", color: "red" };

console.log(eqObjects(shirtObject , anotherShirtObject));


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

console.log(eqObjects(shirtObject , longSleeveShirtObject));

assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);
assertEquals(eqObjects(shirtObject , shirtObjectTwo), true);
// I'm sure there was a prettier way to get this code done, but it seems to fun fine
