

console.log('The calculation of  15 % 4 which gives the reminder ', 15 % 4);
console.log(`The calculation of 3 power 3 is `, 3 ** 3);

console.log(Math.PI);

console.log(Math.sqrt(25));
console.log(Math.sqrt(27));

console.log(Math.pow(2, 6));

console.log(Math.floor(2.5));
console.log(Math.floor(2.99889));
console.log(Math.floor(-2.5));

console.log(Math.ceil(-2.5));
console.log(Math.ceil(3.5));

console.log(Math.round(3.5));

console.log(Math.round(Math.random() * 20));
console.log(Math.round(Math.random() * 20));

//calculating the area of rectangle in js.

const breadth = 30
const length = 20

let area
area = length * breadth

console.log(`The area of rectangle of length ${length} and breadth ${breadth} is ${area}`);



//by taking input from user.
const length1 = +prompt(`Enter the length of a rectangle`)
const breadth1 = +prompt(`Enter the breadth of a rectangle`)

let area1
area1 = length1 * breadth1

console.log(`The area of rectangle of length ${length1} and breadth ${breadth1} is ${area1}`);
document.write(`The area of rectangle of length ${length1} and breadth ${breadth1} is ${area1}`)
