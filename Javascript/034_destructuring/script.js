const colors = ['red', 'green', 'yellow', 'blue', 'black']

const user = {
  name: 'Basanta',
  age: 22,
  address: {
    city: 'Butwal',
    state: 'Lumbini'
  }
}

// const [, , color1] = colors

// const { 3: color4 } = colors

// const {name,age}=user

// const {name: userName, age: userAge} = user   renaming the variable created after extracting property

// const { address: { city: userCity } } = user


function intro({age}){
  console.log(age);
}