let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

// Using an anonymous function
let median = function (arr1, arr2) {
  let merged = mergeSortedArrays(arr1, arr2);
  let n = merged.length;
  if (n % 2 === 0) {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
};

// Using an IIFE
let medianIIFE = (function (arr1, arr2) {
  let merged = mergeSortedArrays(arr1, arr2);
  let n = merged.length;
  if (n % 2 === 0) {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
})(arr1.slice(), arr2.slice()); // Make sure to slice to avoid modifying the original arrays



// Using an arrow function
let medianArrow = ((arr1, arr2) => {
  let merged = mergeSortedArrays(arr1, arr2);
  let n = merged.length;
  if (n % 2 === 0) {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
})(arr1.slice(), arr2.slice()); // Make sure to slice to avoid modifying the original arrays

console.log(median(arr1.slice(), arr2.slice()));
console.log(medianIIFE);
console.log(medianArrow);




// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}
