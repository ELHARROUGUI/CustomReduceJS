const myArray = [10, 30, 80, 10, 90, 20, 40, 70];

// Sum of values over an array
const sum = myArray.reduce((acc, elem) => acc + elem, 0);
console.log("sum :>> ", sum);

// Average of values over an array
const avg = myArray.reduce(
  (acc, elem, _, { length }) => acc + elem / length,
  0
);
console.log("avg :>> ", avg);
