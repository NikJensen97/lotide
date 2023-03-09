const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F601} \u{1F601} \u{1F601} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F643} \u{1F643} \u{1F643} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(obj, value) {
  let result = '';
  for (const item of Object.keys(obj)) {
    if (obj[item] === value)
      result += item;
    
  }


  return result;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
