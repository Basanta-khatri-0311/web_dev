
//function declaration

function sqr1(num) {
  // console.log(num ** 2);
  return num ** 2
}

//function expression

const sqr2 = function (num) {
  // console.log(num ** 2);
  return num ** 2
}

//arrow function expression

const sqr3 = num => {
  // console.log(num ** 2);
  return num ** 2
}

const sqr4 = (num) => num ** 2  //arrow function with implicit returning

const add = (num1, num2) => num1 + num2


const random = () =>  Math.floor(Math.random() * 10)

// setTimeout(()=> {console.log(`Hello`)} , 2000)