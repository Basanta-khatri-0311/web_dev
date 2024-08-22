const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// green.addEventListener('click',(e)=>{
//   console.log('Green event listener');
// },true)
// pink.addEventListener('click',(e)=>{
//   console.log('Pink event listener');
// },true)
// blue.addEventListener('click',(e)=>{
//   e.stopPropagation()
//   console.log('Blue event listener');
// },true)
green.addEventListener('click',(e)=>{
  console.log('Green event listener');
},{capture:true, once:true})
pink.addEventListener('click',(e)=>{
  console.log('Pink event listener');
},{capture:true, once:true})
blue.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('Blue event listener');
},{capture:true, once:true})