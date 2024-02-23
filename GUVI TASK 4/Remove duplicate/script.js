let numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];

// Using an anonymous function
let removeDuplicates = function (arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};

console.log(removeDuplicates(numbers.slice())); // Make sure to slice to avoid modifying the original array



// Using an IIFE
let uniqueNumbersIIFE = (function (arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
})(numbers.slice()); // Make sure to slice to avoid modifying the original array
console.log(uniqueNumbersIIFE);




// Using an arrow function
let uniqueNumbersArrow = ((arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
})(numbers.slice()); // Make sure to slice to avoid modifying the original array
console.log(uniqueNumbersArrow);
