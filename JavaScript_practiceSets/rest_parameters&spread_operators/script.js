//1.Merge Multiple Arrays:

//Problem: Given the arrays arr1 = [1, 2, 3], arr2 = [4, 5, 6], and arr3 = [7, 8, 9], 
//combine them into a single array called mergedArray.

arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
arr3 = [7, 8, 9]

const mergedArray = [...arr1, ...arr2, ...arr3]

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
  yourNumber.forEach((num)=>{
    if(!uniqueNumbers.includes(num)){
      uniqueNumbers.push(num)
    }
  })
  return uniqueNumbers
}


//7.Destructure an Array into Variables:

//Problem: Given the array data = [1, 2, 3, 4, 5], extract the first two elements into variables first and second, and the rest into another 
//array called rest.

data = [1, 2, 3, 4, 5]



//8.Merge Multiple Objects:

//Problem: Given the objects obj1 = { a: 1, b: 2 } and obj2 = { c: 3, d: 4 }, combine them into a single object called mergedObj.

obj1 = { a: 1, b: 2 } 
obj2 = { c: 3, d: 4 }
