function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr); // Call the callback function with the current element, index, and array
    }
  }
  
  // Example 
  const numbers = [1, 2, 3, 4, 5];
  
  forEachCustom(numbers, (element, index, array) => {
    console.log(`Element at index ${index} is ${element}`);
  });

//    output will be like this 

// Element at index 0 is 1
// Element at index 1 is 2
// Element at index 2 is 3
// Element at index 3 is 4
// Element at index 4 is 5


