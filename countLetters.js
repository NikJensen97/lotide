const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F601} \u{1F601} \u{1F601} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F643} \u{1F643} \u{1F643} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(lettersToCount) {
  const results = {};
  for (const item of lettersToCount) {
    if(item !== ' ') {
      results[item] = 0;
    }
  }
  for (const item of lettersToCount) {
    if(item !== ' ') {
      results[item] += 1;
    }
  }
 return results;
}

const counted = countLetters("Hello");
const anotherCount = countLetters("sweet sweet love of mine");

console.log(countLetters("Hello Hello my DEAR"));
assertEqual(counted.l, 2);
assertEqual(anotherCount.e, 6);
