// The code elow is written in an algorithmic way that can be implemented in any other languange...
const joinByReduce = (arr, separator) =>
  arr.reduce(
    (acc, item) =>
      (acc += item + (item === arr[arr.length - 1] ? "" : separator)),
    ""
  );

const mapByReduce = (arr, cb) =>
  arr.reduce((acc, item) => (acc = [...acc, cb(item)]), []);

const reverseByReduce = (arr) =>
  arr.reduce((acc, item) => (acc = [item, ...acc]), []);

const concatByReduce = (arr1, arr2) =>
  arr2.reduce((acc, item) => (acc = [...acc, item]), [...arr1]);

const myReduce = function (callback, initialValue) {
  let { index, accumulator } = initialValue
    ? { index: 0, accumulator: initialValue }
    : { index: 1, accumulator: this[0] };
  for (; index < this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
};

module.exports = {
  joinByReduce,
  mapByReduce,
  reverseByReduce,
  concatByReduce,
  myReduce,
};
