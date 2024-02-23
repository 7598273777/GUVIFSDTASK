let words = ["level", "hello", "radar", "world", "madam"];

// Using an anonymous function
let getPalindromes = function (arr) {
  let palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromes.push(arr[i]);
    }
  }
  return palindromes;
};

// Using an IIFE
let palindromesIIFE = (function (arr) {
  let palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromes.push(arr[i]);
    }
  }
  return palindromes;
})(words.slice()); // Make sure to slice to avoid modifying the original array

// Using an arrow function
let palindromesArrow = ((arr) => {
  let palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromes.push(arr[i]);
    }
  }
  return palindromes;
})(words.slice()); // Make sure to slice to avoid modifying the original array

console.log(getPalindromes(words.slice()));
console.log(palindromesIIFE);
console.log(palindromesArrow);

// Function to check if a word is palindrome
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}
