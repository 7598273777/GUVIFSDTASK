let numbers = [1, 2, 3, 4, 5];

// Using an anonymous function
let sum = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
console.log(sum(numbers.slice())); // Make sure to slice to avoid modifying the original array



// Using an IIFE
let sumIIFE = (function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})(numbers.slice()); // Make sure to slice to avoid modifying the original array
console.log(sumIIFE);



// Using an arrow function
let sumArrow = ((arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})(numbers.slice()); // Make sure to slice to avoid modifying the original array
console.log(sumArrow);
