const userNameInput = document.querySelector('#username')
const para = document.querySelector('p')

userNameInput.addEventListener('click', () => {
  console.log('input field clicked')
})

userNameInput.addEventListener('input', (e) => para.innerText = e.target.value)