// const timer1 = setTimeout(`console.log("hello-1")`, 1000)
// const timer2 = setTimeout(`console.log("hello-2")`, 2000)
// const timer3 = setTimeout(a, 3000)//H.O.F
// const timer1 = setInterval(`console.log("hello-1")`, 1000)
// const timer2 = setTimeout(`console.log("hello-2")`, 2000)
// const timer3 = setInterval(a, 3000)//    H.O.F

setTimeout(function (){
  console.log('hii')   //asynchronous
},2000)

// clearTimeout(timer1)
// clearTimeout(timer2)
// clearTimeout(timer3)

function a(){
  console.log(`Hello World..!`);
}

console.log(`Hello Worldddd..!`); //synchronous code

