//The below done is known as function definition

// function intro(userName = 'Default',post='Default', age = 22) { //using default parameter
//   console.log('Hi,')
//   console.log(`My name is ${userName}.`)
//   console.log(`I am a ${post}.`)
//   console.log(`I am ${age} years Old.`);
//   console.log('***********************************************')
//   return 
// }
//this is called function calling
// const value = intro()

// intro('Basanta Khatri','Web Developer',25)
// intro(`Something`,'Don`t know',27)
// intro()


function addTwoNumbers(a, b) {
  return a + b
}

function subtractTwoNumbers(a, b) {
  return a - b
}

function multiplyTwoNumbers(a, b) {
  return a * b
}

function divideTwoNumbers(a, b) {
  return a / b
}

const resultAdd = addTwoNumbers(24, 6)
const resultSubtract = subtractTwoNumbers(24, 6)
const resultMultiply = multiplyTwoNumbers(24, 6)
const resultDivide = divideTwoNumbers(24, 6)