let array = [1, 2, 3, 4, 5];
let k = 2;

// Using an anonymous function
let rotateArray = function (arr, k) {
  for (let i = 0; i < k; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
};

console.log(rotateArray(array.slice(), k)); // Make sure to slice to avoid modifying the original array

// Using an IIFE
let rotatedArrayIIFE = (function (arr, k) {
  for (let i = 0; i < k; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
})(array.slice(), k); // Make sure to slice to avoid modifying the original array
console.log(rotatedArrayIIFE);

// Using an arrow function
let rotatedArrayArrow = ((arr, k) => {
  for (let i = 0; i < k; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
})(array.slice(), k); // Make sure to slice to avoid modifying the original array
console.log(rotatedArrayArrow);
