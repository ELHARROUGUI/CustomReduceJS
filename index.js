const {
  joinByReduce,
  mapByReduce,
  reverseByReduce,
  concatByReduce,
  myReduce,
} = require("./lib");
const { performance } = require("perf_hooks");

// const arr1 = [1, 2, 3, 4, "w", "3"];
// const arr2 = ["a", "b", "c", 5, "6", "z"];
// console.log("arr :>> ", arr1);
// console.log("arr.join('+') :>> ", joinByReduce(arr1, "+"));

// const cb = (item) => item + item;
// console.log("arr.map((item)=>item+item) :>> ", mapByReduce(arr1, cb));
// console.log("arr.reverse() :>> ", reverseByReduce(arr1));
// console.log("arr.sort() :>> ", arr1.sort());
// console.log("arr.concat() :>> ", concatByReduce(arr1, arr2));

Array.prototype.myReduce = myReduce;

const myArray = new Array(1994).fill(10);
const sumReducer = (accumulator, element) => accumulator + element;

const t0 = performance.now();
console.log(arr.myReduce(cb, 0));
const t1 = performance.now();
console.log(`myReduce took ${t1 - t0} milliseconds.`);

const pt0 = performance.now();
console.log(arr.myReduce(cb, 0));
const pt1 = performance.now();
console.log(`myReduce took ${pt1 - pt0} milliseconds.`);

const rt0 = performance.now();
console.log(arr.reduce(cb, 0));
const rt1 = performance.now();
console.log(`reduce took ${rt1 - rt0} milliseconds.`);
