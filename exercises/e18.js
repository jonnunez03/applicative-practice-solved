/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearArr = (data.asteroids.reduce( (acc, asteroid) => {
    if (asteroid.discoveryYear) {
      acc.push(asteroid.discoveryYear);
    }
    return acc;
  }, []));
  const yearFreq = {};
  let mostFrequent = yearArr[0];  
  let max = 0;
  for (const year of yearArr) {
    if (yearFreq[year] === undefined) {
      yearFreq[year] = 1;
    } else {
      yearFreq[year]++;
    } if (yearFreq[year] > max) {
      max = yearFreq[year];
      mostFrequent = year;      
    }
  }
  return mostFrequent;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
