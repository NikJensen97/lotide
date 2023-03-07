const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F601} \u{1F601} \u{1F601} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F643} \u{1F643} \u{1F643} Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Hello", "Hello");
