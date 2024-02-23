let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using an anonymous function
let getPrimes = function (arr) {
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primes.push(arr[i]);
    }
  }
  return primes;
};

// Using an IIFE
let primesIIFE = (function (arr) {
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primes.push(arr[i]);
    }
  }
  return primes;
})(numbers.slice()); // Make sure to slice to avoid modifying the original array

// Using an arrow function
let primesArrow = ((arr) => {
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primes.push(arr[i]);
    }
  }
  return primes;
})(numbers.slice()); // Make sure to slice to avoid modifying the original array

console.log(getPrimes(numbers.slice()));
console.log(primesIIFE);
console.log(primesArrow);

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
