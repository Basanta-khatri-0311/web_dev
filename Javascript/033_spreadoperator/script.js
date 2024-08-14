// const ar1 = [1, 2, 3, 4, 5]
// const ar2 = [6, 7, 8, 9, 10]
// const name = 'Basanta'

// const added = ar1.concat(ar2)
// const added =[...ar1,...ar2]

// const user ={
//   name:'Basanta',
//   age: 22
// }

// const updatedUser = {...user, city: 'Butwal'}

// function add() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++){
//     sum += arguments[i]
//   }
//   return sum
// }


const nums1 = [1, 2, 3, 4]

// function add(...num) {
// return num.reduce((number,current)=> number+current)
// }

// function add() {
// return [...arguments].reduce((number,current)=> number+current)
// }

function add() {
return Array.from(arguments).reduce((number,current)=> number+current)
}