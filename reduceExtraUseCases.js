const myArray = [10, 30, 80, 10, 90, 20, 40, 70];

// Array.prototype.map
// Double array values
const reduceDouble = myArray.reduce((acc, elem) => [...acc, elem * 2], []);
const mappinDouble = myArray.map((elem) => elem * 2);
console.log("reduceDouble :>> ", reduceDouble);
console.log("mappinDouble :>> ", mapDouble);

// Array.prototype.filter
// Filtering values bigger than 30
const reduceHighers = myArray.reduce(
  (acc, elem) => (elem > 30 ? [...acc, elem] : acc),
  []
);
const filterHighers = myArray.filter((elem) => elem > 30);
console.log("reduceHighers :>> ", reduceHighers);
console.log("filterHighers :>> ", filterHighers);

// Array.prototype.every
// Every value is a Number
const reduceIsNumber = myArray.reduce(
  (acc, elem) => typeof elem === "number" && acc,
  true
);
const everyIsNumber = myArray.every((elem) => typeof elem === "number");
console.log("reduceIsNumber :>> ", reduceIsNumber);
console.log("everyIsNumber :>> ", everyIsNumber);

// Array.prototype.reverse
// Reverse order of array values
const reduceReverse = myArray.reduce((acc, elem) => [elem, ...acc], []);
const sampleReverse = myArray.reverse();
console.log("reduceReverse :>> ", reduceReverse);
console.log("sampleReverse :>> ", sampleReverse);
