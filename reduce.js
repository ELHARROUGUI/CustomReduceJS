const myReduce = function (reducer, initialValue) {
  // initializing accumulator and the loop index based on initialValue
  let { index, accumulator } =
    typeof initialValue === "undefined"
      ? { index: 1, accumulator: this[0] }
      : { index: 0, accumulator: initialValue };
  for (; index < this.length; index++) {
    accumulator = reducer(accumulator, this[index]);
  }
  return accumulator;
};
Array.prototype.myReduce = myReduce;

const myArray = new Array(1994).fill(10);
const sumReducer = (accumulator, element) => accumulator + element;

const sum = myArray.myReduce(sumReducer, 0);
console.log("sum :>> ", sum);
