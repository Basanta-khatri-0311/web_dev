//We are learning about the string template literals.. which is used for easier string interpolation
//and multi-line strings.
const message = "Hello World!!"
console.log( message.length)




const trimMessage = `   Hello, how are you how can i help you.       `
console.log(trimMessage.trim()) //removes space from front back.

console.log(trimMessage.trimStart())// removes space from front.
console.log(trimMessage.trimEnd())//removes space from back.


console.log(trimMessage.includes('Hello'));

console.log(trimMessage.indexOf('how'));

console.log(trimMessage.replace('Hello', 'Hi'));

console.log(trimMessage.concat(message));


const lastFourDigits = '7890'
console.log(lastFourDigits.padStart(16, '*')); 
console.log(lastFourDigits.padEnd(16, '*')); 

console.log(trimMessage.charAt(20));

console.log(trimMessage.charCodeAt(3));

console.log(trimMessage.split(' '));


// console.log(`Last four digit of my card is `.concat(lastFourDigits));
console.log(`Last four digit of my card is ${lastFourDigits.padStart(16,'*')}.`);