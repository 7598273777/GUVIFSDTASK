let strings = ["hello", "world", "javascript"];
// Substring - substring() extracts a part of a string
// slice - slice() extracts a part of a string and returns the extracted part:

// Using an anonymous function
let titleCaps = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return arr;
};
console.log(titleCaps(strings.slice())); // Make sure to slice to avoid modifying the original array



// Using an IIFE
let titleCapsIIFE = (function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return arr;
})(strings.slice()); // Make sure to slice to avoid modifying the original array
console.log(titleCapsIIFE);



// Using an arrow function
let titleCapsArrow = ((arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return arr;
})(strings.slice()); // Make sure to slice to avoid modifying the original array
console.log(titleCapsArrow);
