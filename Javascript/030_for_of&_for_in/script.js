const fruit = ['apple', 'banana', 'grapes', 'water-melon']

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i] = i);
}
console.log('--------------------------------------------------------------')

for (value of fruit) {
  console.log(value);
}
console.log('--------------------------------------------------------------')
const userNames = 'Basanta Khatri'

for (const userName of userNames) {
  if (userName === ' ') {
    console.log('This is a space');
  } else {
    console.log(userName);
  }
}

console.log('--------------------------------------------------------------')

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'Banglore'
}

for (const key in person) {
  console.log(person[key]);
}
console.log('--------------------------------------------------------------')
const personKey = Object.keys(person)

for (const key of personKey) {
  console.log(person[key]);
}
//const personKey = Object.keys(person)
//const personValue = Object.values(person)
//const personEntries = Object.entries(person)


//reverse a string
// const string1 ='Basanta Khatri'

// console.log( string1.split('').reverse().join(''))