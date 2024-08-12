
//Write a function greet that accepts a name and a callback function.
//The callback function should log a greeting message to the console. 
//Implement this using a callback.
function greet(name, callBack) {
  callBack(name)
}

function sayHi(name) {
  console.log(`Hello ${name}`);
}

greet('basanta', sayHi)



//Create a function processArray that takes an array and a callback function. 
//The function should apply the callback function to each element 
//of the array and return a new array with the results.
function processArray(arr, callBack) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callBack(arr[i]))
  }
  console.log(result);
  // return result
}

function sqr(num) {
  return num ** 2
}

const num = [1, 2, 3, 4, 5]

processArray(num, sqr)