/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the ele where the cb function on that ele yields the lowest value
 * * maxBy(): Return the ele where the cb function on that ele yields the highest value
 */

export function minBy(array, cb) {
  // Your code goes here...
  if (array.length === 0) {
    return undefined;
  }
  let min = array[0];
  let minValue = cb(array[0]);
    for (const ele of array) {
      const value = cb(ele);
      if (value < minValue) {
        minValue = value;
        min = ele;
      }
    }
    return min;
}

export function maxBy(array, cb) {
  // Your code goes here..
  if (array.length === 0) {
    return undefined;
  }
  let max = array[0];
  let maxValue = cb(array[0])
  for (const ele of array) {
    const value = cb(ele)
    if (value > maxValue) {
      max = ele;
      maxValue = value;
    }
  }
  return max;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function