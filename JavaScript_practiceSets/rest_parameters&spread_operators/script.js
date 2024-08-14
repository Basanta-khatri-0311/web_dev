//1.Merge Multiple Arrays:

//Problem: Given the arrays arr1 = [1, 2, 3], arr2 = [4, 5, 6], and arr3 = [7, 8, 9], 
//combine them into a single array called mergedArray.

arr4 = [1, 2, 3]
arr5 = [4, 5, 6]
arr6 = [7, 8, 9]

const mergedArray = [...arr4, ...arr5, ...arr6]

//2.Find Maximum in an Array:

//Problem: Write a function that takes an array numbers = [10, 20, 30, 40, 50] and 
//returns the maximum number.

numbers = [10, 20, 30, 40, 50]

function maximum(...max) {
  return max.reduce((myMax, i) => {
    return myMax > i ? myMax : i
  }, max[0])
}

//3.Concatenate Multiple Strings:

//Problem: Create a function that takes multiple string arguments str1 = 'Hello', str2 = 'world', 
//str3 = '!' and returns them as a single concatenated string.

str1 = 'Hello'
str2 = 'world'
str3 = '!'

function concStr(...stringss) {
  return stringss.reduce((acc, current) => acc + current)
}

//4.Clone and Modify an Object:

//Problem: Given an object person = { name: 'Alice', age: 25 }, create a new object called 
//updatedPerson that is a clone of person but with an additional property city set to 'New York'.

person = { name: 'Alice', age: 25 }

const updatePerson = { ...person, city: 'NewYork' }


//5.Pass Multiple Arguments to a Function:

//Problem: Write a function sum that can accept any number of arguments and returns their sum.
//Test it with arguments 1, 2, 3, 4, 5.

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr)
}

//6.Remove Duplicates from an Array:

//Problem: Given the array numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5], 
//create a new array called uniqueNumbers with duplicates removed.

numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5]

function unique(...yourNumber) {
  let uniqueNumbers = []
  yourNumber.forEach((num) => {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num)
    }
  })
  return uniqueNumbers
}


//7.Destructure an Array into Variables:

//Problem: Given the array data = [1, 2, 3, 4, 5], extract the first two elements into variables 
//first and second, and the rest into another array called rest.

data = [1, 2, 3, 4, 5]
const [first, second, ...rest] = data



//8.Merge Multiple Objects:

//Problem: Given the objects obj1 = { a: 1, b: 2 } and obj2 = { c: 3, d: 4 }, combine them into a single object called mergedObj.

obj1 = { a: 1, b: 2 }
obj2 = { c: 3, d: 4 }

const mergedObj = { ...obj1, ...obj2 }


//9.Merge and Sort Arrays:

//Problem: Given two arrays arr1 = [5, 10, 15] and arr2 = [3, 6, 9], merge them into a single array and 
//then sort the array in ascending order.Variables: arr1 = [5, 10, 15], arr2 = [3, 6, 9]

arr11 = [5, 10, 15]
arr21 = [3, 6, 9]

const newArray = [...arr11, ...arr21]
sortedArray = newArray.sort((a, b) => a - b)
console.log(sortedArray);


//10.Copy and Modify an Array:

//Problem: Given an array originalArray = [1, 2, 3], create a copy of this array and add the elements 
//4 and 5 to the end of the copied array, leaving the original array unchanged.
//Variables: originalArray = [1, 2, 3]

originalArray = [1, 2, 3]

const copiedArray = [...originalArray, 4, 5]
console.log(copiedArray);

//11.Merge Multiple Objects with Conflicting Properties:

//Problem: Given two objects obj1 = { x: 1, y: 2 } and obj2 = { y: 3, z: 4 }, merge them into a 
//single object. If a property exists in both objects, the value from obj2 should overwrite the 
//value from obj1.Variables: obj1 = { x: 1, y: 2 }, obj2 = { y: 3, z: 4 }

obj1 = { x: 1, y: 2 }
obj2 = { y: 3, z: 4 }

const singleObject = { ...obj1, ...obj2 }

console.log(singleObject);


//12.Create a Function that Accepts Multiple Arrays:

//Problem: Write a function concatenateArrays that takes multiple arrays as arguments and returns a 
//single array containing all the elements from the input arrays.Variables: Use any arrays of your 
//choice to test the function.


function concatenateArrays(...n) {
  return n.reduce((acc, curr) => acc.concat(curr))
}


//13.Destructure Nested Arrays:

//Problem: Given a nested array nestedArray = [1, [2, 3], [4, 5, 6]], destructure the first element, 
//the second element (which is an array), and the rest of the array into separate variables.
// Variables: nestedArray = [1, [2, 3], [4, 5, 6]]


nestedArray = [1, [2, 3], [4, 5, 6]]
const [first1, second1, third] = nestedArray

console.log(first1);
console.log(second1);
console.log(third);


// 14.Combine Arrays with Unique Elements:

// Problem: Given two arrays arr1 = [1, 2, 3, 4] and arr2 = [3, 4, 5, 6], merge them into a single array 
// called uniqueArray that contains only unique elements from both arrays.
// Variables: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]


arr111 = [1, 2, 3, 4]
arr222 = [3, 4, 5, 6]


const combinedArray = [...new Set([...arr111, ...arr222])]
console.log(combinedArray);


// 15.Flatten a Nested Array:

// Problem: Write a function flattenArray that takes a nested array nestedArray = [1, [2, [3, 4], 5], 6] 
// and returns a single flattened array.Variables: nestedArray = [1, [2, [3, 4], 5], 6]
nestedArray = [1, [2, [3, 4], 5], 6]

function flattenArray(arrays) {
  let result = []
  arrays.forEach((items) => {
    if (Array.isArray(items)) {
      result = result.concat(flattenArray(items))
    } else {
      result.push(items)
    }
  })
  return result
}
console.log(flattenArray(nestedArray));
console.log('-----------------------------------------------------------------------------------------')

function flattenArray2(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray2(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]


//16.Pass Array Elements as Function Arguments:

//Problem: Given an array nums = [10, 20, 30, 40], write a function multiply that takes four 
//arguments and returns their product. Use the spread operator to pass the elements of the array 
//to the function.Variables: nums = [10, 20, 30, 40]

nums = [10, 20, 30, 40]

function multiply(...multiplier) {
  return multiplier.reduce((acc, curr) => acc * curr, 1)
}

console.log(multiply(...nums));

//17.Destructure and Swap Values:

//Problem: Given an object obj = { a: 1, b: 2 }, write a function that swaps the values of a 
//and b using destructuring assignment.Variables: obj = { a: 1, b: 2 }

obj = { a: 1, b: 2 }

const { a: b, b: a } = obj  // the first a is the property of obj when gives its value to the b and vice versa in b
const swappedObj = { a, b }


//18.Merge Multiple Arrays and Remove Duplicates:

//Problem: Given three arrays arr1 = [1, 2, 3], arr2 = [2, 3, 4], and arr3 = [4, 5, 6], merge 
//them into a single array called uniqueMergedArray that contains only unique elements, sorted 
//in ascending order.Variables: arr1 = [1, 2, 3], arr2 = [2, 3, 4], arr3 = [4, 5, 6]


arr121 = [1, 2, 3]
arr212 = [2, 3, 4]
arr313 = [4, 5, 6]

const uniqueMergedArray = [...arr121, ...arr212, ...arr313]

function filteredNumber(...filteringNumbers) {
  let unique = []
  filteringNumbers.forEach((value) => {
    if (!unique.includes(value)) {
      unique.push(value)
    }
  })
  return unique
}
console.log(filteredNumber(...uniqueMergedArray));



numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5]

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [4, 5, 6];

const uniqueMergedArray1 = [...new Set([...arr1, ...arr2, ...arr3])].sort((a, b) => a - b);

console.log(uniqueMergedArray1);

//19. Combine Arrays with Different Types of Data:

//Problem: Given two arrays, arr1 = [1, 'two', 3] and arr2 = ['four', 5, 6], 
//combine them into a single array called combinedArray that contains all the elements from 
//both arrays.


arr101 = [1, 'two', 3]
arr202 = ['four', 5, 6]


const combinedArray101 =[...arr101,...arr202]
console.log(combinedArray101);

//20. . Merge Objects with Nested Properties:

//Problem: Given two objects, obj1 = { a: { x: 1 }, b: 2 } and obj2 = { a: { y: 3 }, c: 4 }, 
//merge them into a single object called mergedObj so that nested properties are also merged.

obj1 = { a: { x: 1 }, b: 2 }
obj2 = { a: { y: 3 }, c: 4 }

const mergedObj101 ={...obj1,...obj2}

console.log(mergedObj101);

//21. Extract and Assign Values from an Object:

//Problem: Given an object person = { name: 'John', age: 30, city: 'New York' }, extract the 
//name and age properties into separate variables, and create a new object called basicInfo 
//containing just these two properties.

person101 = { name: 'John', age: 30, city: 'New York' }

const {name,age} =person101
const basicInfo ={name,age}

console.log(basicInfo)

// 22.Flatten and Remove Duplicates from an Array:

// Problem: Write a function flattenAndUnique that takes a nested array 
// nestedArray = [1, [2, [3, 3, 4], 5, [5]], 6] and returns a flattened array with 
// unique elements.

nestedArray1 = [1, [2, [3, 3, 4], 5, [5]], 6]

function flattenAndUnique(arr) {
  let result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenAndUnique(item))
    } else {
      result.push(item)
    }

  })
  const uniqueValue = []

  result.forEach((value) => {
    if (!uniqueValue.includes(value)) {
      uniqueValue.push(value)
    }
  })
  return uniqueValue
}


console.log(flattenAndUnique(nestedArray1).sort((a, b) => a - b))


//23. Use Spread Operator in Function Arguments:

//Problem: Write a function calculateSum that accepts four numbers and returns their sum.
//Test the function with an array values = [12, 34, 56, 78] by passing its elements as arguments 
//to calculateSum.

values = [12, 34, 56, 78]

function calculateSum(...sumNumber){
  return sumNumber.reduce((curr,acc)=> curr+acc)
}

console.log(calculateSum(12,34,56,78));