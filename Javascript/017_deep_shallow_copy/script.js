
// const userName1 = 'Basanta'
// let userName2 = userName1

// userName2 = userName2 + ' Khatri'


const fruits = ['Apple','Mango','Banana']
// const myFruits =fruits


//By using assign
// Object.assign(myFruits, fruits)
// myFruits.push('Grapes','Dates')


//by using spread operator
// const myFruits =[...fruits]


//by using concat
// const myFruits = [].concat(fruits)

//by using slice
// const myFruits = fruits.slice()



const user1 = {
  firstName: 'Basanta',
  lastName: 'Khatri',
  add: {
    address:'Butwal',
    pincode: 897653
  }
}

// const user2 = {}

// Object.assign(user2,user1)

const user2 ={ ...user1 } //spread operator
//ITS A Shallow copy which only does 1 level copy. 
