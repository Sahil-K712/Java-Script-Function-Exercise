// question 1: Given an array of numbers, use map() to create a new array with the squares of each number.
function squareNumbers(arr) {
    return arr.map(num => num * num); // Simple square each number
  }
  
  // question 2: Given an array of numbers, use filter() to return an array of only even numbers.
  function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0); // Return only even numbers
  }
  
  // question 3: Given an array of numbers, use reduce() to calculate the sum of all elements.
  function sumOfNumbers(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0); // Sum of all numbers
  }
  
  // question 4: Filter odd numbers, square the remaining even numbers, and calculate their sum.
  function sumOfSquaredEvenNumbers(arr) {
    return arr
      .filter(num => num % 2 === 0)   // Filter even numbers
      .map(num => num * num)          // Square the remaining numbers
      .reduce((acc, curr) => acc + curr, 0); // Sum the squared numbers
  }
  
  // Test Cases
  
  console.log(squareNumbers([2, 3, 4, 5]));    // Expected Output: [4, 9, 16, 25]

  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));    // Expected Output: [2, 4, 6]

  console.log(sumOfNumbers([5, 10, 15, 20]));   // Expected Output: 50

  console.log(sumOfSquaredEvenNumbers([1, 2, 3, 4, 5]));  // Expected Output: 20
  
  