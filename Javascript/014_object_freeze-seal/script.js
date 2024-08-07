let userName = 'Basanta'
const user = {
  firstName : 'Basant' ,
  lastName: 'Khatri' ,
  add: {
    city : 'Butwal',
    postCode: '001122',
    state : 'Lumbini',
    details :{
      population : 12345678,
      area : '1234 sq km'
    },
  },
  age:15 ,
  isGraduate:false ,
}

// Object.seal(user)
Object.freeze(user)