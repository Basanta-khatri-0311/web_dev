const container = document.querySelector(".container")
const card = document.querySelector('.card')
const h1 = document.querySelector('h1')




// for(let i =2; i<= 100; i++){
//   const newCard =  card.cloneNode()
//   newCard.innerText = i
//   container.appendChild(newCard)
// }

function sayHi() {
  console.log('Hello');
}

// function sayHello(){
//   console.log('Hello!!!!');
// }

// h1.onclick = sayHi

// h1.addEventListener('click',sayHi)
// h1.addEventListener('click',function(){
//   console.log('Second Say hii!!!');
// })

// card.addEventListener('click',()=>console.log('This is my Card'))


let count = 1

card.addEventListener('click', () => {
  // const newCard = document.createElement('div')
  // newCard.classList.add('card')
  const newCard = card.cloneNode()
  newCard.classList.remove('addCard')
  newCard.innerText = count
  count++
  container.append(newCard)
})