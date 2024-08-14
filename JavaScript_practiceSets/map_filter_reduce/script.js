
//1.Uppercase Conversion:
//Given an array of strings representing names, create a new array where each name is in uppercase.


const names = ['alice', 'bob', 'charlie', 'dave'];
const upperNames = names.map((name) => name.toLocaleUpperCase())
console.log(upperNames);


//2.Filter Even Numbers:
//You have an array of numbers. Create a new array that contains only the even numbers from 
//the original array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 == 0)
console.log(evenNumbers);


//3.Double and Filter:
//You have an array of numbers. First, use map to double each number. 
//Then, use filter to create a new array that contains only the numbers greater than 10.

const numbers1 = [1, 5, 8, 12, 15, 20]


const doubledNumbers = numbers1.map((num1) => num1 * 2)

const filteredNumbers1 = doubledNumbers.filter((numFil) => numFil > 10)

console.log(filteredNumbers1);


//4.Extract Properties:
//Given an array of objects representing people, use map to 
//create a new array containing only the names of people who are over 18 years old.

const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 16 },
  { name: 'Dave', age: 25 }
];

const over18 = people.filter((person) => person.age > 18)
  .map((person) => person.name)
console.log(over18);


//5.Grade Transformation:
//Given an array of student objects, each containing a name and a grade property,
// create a new array where the grade is increased by 10%, but the maximum grade does not exceed 100.

const students = [
  { name: 'Alice', grade: 88 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 79 },
  { name: 'Dave', grade: 95 }
];

const transformedGrade = students.map((student) => ({
  ...student,
  grade: Math.min(student.grade * 1.1, 100)
})).filter((student) => student.grade <= 100)
console.log(transformedGrade);

//6.String Length Filter:
//You have an array of strings. Create a new array that includes only the strings 
//that have a length greater than 5 characters.

const words = ['JavaScript', 'map', 'filter', 'reduce', 'array', 'function'];

const lengthChecker = words.filter((word) => word.length > 5)
console.log(lengthChecker);


//7.Price Adjustment:
//Given an array of product objects, each with a name and a price, increase the price by 20% 
//for all products priced below $50. Then, filter out products that are still below $50 after 
//the increase.

const products = [
  { name: 'Shirt', price: 40 },
  { name: 'Pants', price: 60 },
  { name: 'Socks', price: 30 },
  { name: 'Shoes', price: 80 }
];

const updatedPrice = products.map((product) => ({
  ...product,
  price: (product.price < 50 ? product.price * 1.2 : product.price)
})).filter((product) => product.price >= 50)
console.log(updatedPrice);


//8. Discount Application and Filtering
// Given an array of product objects, each with a name and a price, apply a 15% discount 
//to all products that are priced at $100 or more. Then, filter out products that are priced below $80 
//after the discount.

const products1 = [
  { name: 'Laptop', price: 1200 },
  { name: 'Headphones', price: 150 },
  { name: 'Keyboard', price: 90 },
  { name: 'Mouse', price: 45 }
];

const updatePrice1 = products1.map((product1) => ({
  ...product1,
  price: (product1.price >= 100 ? product1.price * 0.85 : product1.price)
})).filter((product1) => product1.price >= 80)
console.log(updatePrice1);


//9.Convert Array of Numbers to Their Squares:

//Problem: Given an array of numbers, use the map method to create a new array containing the 
//squares of each number.

const nums = [1, 2, 3, 4, 5];


const squareNums = nums.map((num) => (num * num))

console.log(squareNums);

//10.Convert Array of Objects to Array of Strings:

//Problem: You have an array of objects, each representing a person with a name and age property. 
//Use the map method to create a new array containing only the names.

const peoples = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
// Expected output: ['Alice', 'Bob', 'Charlie']

const pep = peoples.map((pep) => pep.name)
console.log(pep);

//11.Filter Even Numbers:

//Problem: Given an array of numbers, use the filter method to create a new array that contains only 
//the even numbers.

const numbersToFilterEven = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]

const filteredEvenNumbers = numbersToFilterEven.filter((evenFiltered) => evenFiltered % 2 === 0)

console.log(filteredEvenNumbers);


//12.Filter People Above a Certain Age:

//Problem: You have an array of objects representing people with name and age properties.
//Use the filter method to create a new array containing only the people who are older than 30.

const peopleNames = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
  { name: 'Charlie', age: 32 }
];
// Expected output: [{ name: 'Bob', age: 35 }, { name: 'Charlie', age: 32 }]

const filteredPeopleName = peopleNames.filter((filteredName) => filteredName.age > 30)
console.log(filteredPeopleName);


//13.Sum of an Array:

//Problem: Given an array of numbers, use the reduce method to calculate the sum of all the numbers.

const numbersToBeSum = [1, 2, 3, 4, 5];
// Expected output: 15

const sumNumbers = numbersToBeSum.reduce((eachNumber,currentValue)=> eachNumber+currentValue)
console.log(sumNumbers);


//14.Count Occurrences of a Value:

//Problem: Given an array of strings, use the reduce method to count how many times a specific 
//string appears in the array.

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple'];
const target = 'apple';
// Expected output: 3

const occurNumber = fruits.reduce((occurrence,currentValue)=>{
  if(currentValue === target){
    occurrence+=1
  }
  return occurrence
},0)
console.log(occurNumber);

