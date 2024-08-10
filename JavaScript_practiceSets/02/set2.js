
// ------------------------------------------------------Practice set 2--------------------------------------------------------------------------//

//Q.1....Use logical operator to find the age of a person is in between 10-20

// --> Answer
// let age
// age = prompt('Enter your age')

// if (age > 10 && age < 20) {
//   console.log('Your age lies between 10 to 20.');
// } 
// else {
//   console.log("Your age doesn't lie between 10 to 20.");
// }


//Q.2....Use switch case in js

// --> Answer
// let age = parseInt(prompt('Enter your ag in switch case'))
// switch (true) {
//   case (age > 10 && age < 20):
//     console.log('Your age lies between 10 to 20.');
//     break
//   case (age > 20 && age < 30):
//     console.log('Your age lies between 20 to 30.');
//     break
//   default:
//     console.log("Your age doesn't lie between 10 to 20.");
// }




//Q.3... Wether a number is divisible by 2 & 3

// --> Answer

// let number = parseInt(prompt('Enter the number you want to check for divisible by 2 and 3.'))

// if (number % 2 === 0 && number % 3 === 0) {
//   console.log(`The number ${number} is divisible by both 2 and 3.`);
// } else {
//   console.log(`The number ${number} is not divisible by both 2 and 3.`);
// }



//Q.4....Wether a number is divisible by either 2 or 3

// --> Answer

// let number = prompt('Enter the number you want to check for divisible by 2 or 3.')

// if (number % 2 === 0 || number % 3 === 0) {
//   number % 2 === 0 ? number %3===0? console.log(`The number ${number} is divisible by  2 and 3.`) :  
//   console.log(`The number ${number} is divisible by  2.`):
//   console.log(`The number ${number} is divisible by 3.`)

// } else {
//   console.log(`The number ${number} is not divisible by 2 and 3.`);

// }
//Q.5....print you can drive or you cannot drive based on the age input if 18 respectively using ternary operator.

// --> Answer

// let age = prompt('Enter your age.')

// console.log(age > 18 ? 'You can drive': 'You cannot drive')

