// Do the below program using  anonymous function and  IIFE and arrow Function  - Print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using an anonymous function
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers);


// Using an IIFE
((arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers);

// Using an arrow function
numbers.forEach((num) => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});
