const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const inputBox = document.querySelector('input')

let count = 1

setTimeout(()=>{
  inputBox.focus()
},2000)

//runs while clicking
// card.addEventListener('click', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// const intervalId = setInterval(()=>{
// if(count<=100){
//   card.click()
// }else{
//   clearInterval(intervalId)
// }
// },20)

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
// card.addEventListener('mouseover', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs if we scroll over the track pad or mouse wheel
// card.addEventListener('wheel', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs whenever the page is scrollable
// document.addEventListener('scroll', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs in mobile devices whenever element is touched
//   card.addEventListener('touchstart', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs whenever element is leaved after its touched
//   card.addEventListener('touchend', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs whenever we touch and move 
// card.addEventListener('touchmove', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//runs whenever we drag but that element needs to be set as draggable true
// card.addEventListener('drag', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })


// runs whenever we touch and move 
// card.addEventListener('pointermove', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })