const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F601} \u{1F601} \u{1F601} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F643} \u{1F643} \u{1F643} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = function(array) {
  
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 10);
