const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F601} \u{1F601} \u{1F601} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F643} \u{1F643} \u{1F643} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let output = [];
  for (let y = 1; y < array.length; y++) {
    output.push(array[y]);

  }

  return output;
};
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
console.log(words);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");
// not sure if im supposed to do anything more
