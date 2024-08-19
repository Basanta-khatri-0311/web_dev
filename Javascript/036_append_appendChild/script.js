const container = document.querySelector(".container")
const card = document.querySelector('.card')
const h1 = document.querySelector('h1')




// for(let i =2; i<= 100; i++){
//   const newCard =  card.cloneNode()
//   newCard.innerText = i
//   container.appendChild(newCard)
// }

function sayHi(){
  console.log('Hello');
}

// function sayHello(){
//   console.log('Hello!!!!');
// }

// h1.onclick = sayHi

h1.addEventListener('click',sayHi)
h1.addEventListener('click',function(){
  console.log('Second Say hii!!!');
})