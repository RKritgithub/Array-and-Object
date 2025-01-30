// 2. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//  Sort the array and find the min and max age`
//  Find the median age(one middle item or two middle items divided by two^
//  Find the average age(all items divided by number of items^
//  Find the range of the ages(max minus min^
//  Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);

const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

//  median age
let medianAge;
const middle = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middle - 1] + ages[middle]) / 2;
} else {
    medianAge = ages[middle];
}

// Find average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range
const range = maxAge - minAge;

// Compare (min - average) and (max - average)
const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

console.log(`Min Age: ${minAge}`);
console.log(`Max Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${averageAge}`);
console.log(`Range: ${range}`);
console.log(`Min - Average Difference: ${minAvgDiff}`);
console.log(`Max - Average Difference: ${maxAvgDiff}`);
