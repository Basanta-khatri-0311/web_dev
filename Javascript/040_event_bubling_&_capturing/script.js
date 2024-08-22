const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

green.addEventListener('click',(e)=>{
  console.log('Green event listener');
})
pink.addEventListener('click',(e)=>{
  console.log('Pink event listener');
})
blue.addEventListener('click',(e)=>{
  e.stopPropagation()
  console.log('Blue event listener');
})