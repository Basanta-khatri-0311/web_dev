const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

//runs while clicking
// card.addEventListener('click', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })


//runs immediately after clicking
// card.addEventListener('mousedown', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs after the mouse is lifted after clicked
// card.addEventListener('mouseup', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs after the mouse enters the area
// card.addEventListener('mouseenter', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs after the mouse leaves the area
// card.addEventListener('mouseleave', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs as much the mouse moves in that area
// card.addEventListener('mousemove', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs if we move inside the child of that particular element
card.addEventListener('mouseover', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})