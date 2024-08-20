const userNameInput = document.querySelector('#username')
const para = document.querySelector('p')
const form = document.querySelector('form')

userNameInput.addEventListener('click', () => {
  console.log('input field clicked')
})

form.addEventListener('click',(e)=>console.log(e))

// userNameInput.addEventListener('input', (e) => para.innerText = e.target.value)  input event
// userNameInput.addEventListener('change', (e) => para.innerText = e.target.value)  change event
// userNameInput.addEventListener('focus', (e) => para.innerText = e.target.value) // focus event
// userNameInput.addEventListener('blur', (e) => para.innerText = e.target.value) // blur event