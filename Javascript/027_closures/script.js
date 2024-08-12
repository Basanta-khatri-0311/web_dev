
//returning named function

// function outer() {
//   const a = 4
//   function parent() {
//     const b = 6
//     function add() {
//       console.log(a + b);
//     }
//     return add       named function
//   }
//   return parent ()
// }

// const add1 = outer()
// // console.log(add1);
// console.dir(add1)




//returning anonymous function
function outer() {
  const a = 4
  function parent() {
    const b = 6
    return function() {     //anonymous function
      console.log(a + b);
    }
  }
  return parent ()
}

const add1 = outer()
// console.log(add1);
console.dir(add1)