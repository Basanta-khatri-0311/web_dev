const h1 = document.querySelector('h1')
const container = document.querySelector(".container")

// const imageTag = document.querySelector('img')




// for (i = 2; i <= 100; i++){
//   const newImage =imageTag.cloneNode()
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.append(newImage)
// }



// for (let i = 1; i <= 100; i++) {
//   const imageTag = document.createElement('img')
// const imageName = document.createElement('figcaption')
//   imageTag.classList.add('my-para')
//   imageTag.id = 'para-id'
// imageTag.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
// imageName.innerText = `${i}`
// container.append(imageTag)
// container.append(imageName)
// }

// container.append(p)

// for (let i = 1; i <= 100; i++) {

//   const imageContainer = document.createElement('div')
//   imageContainer.classList.add('img-container')

//   const imageValue = document.createElement('img')
//   imageValue.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//   const paragraphTag = document.createElement('p')
//   paragraphTag.innerText = i

//   imageContainer.append(imageValue,paragraphTag)
//   container.append(imageContainer)
  
// }
for (let i = 1; i <= 100; i++) {
  const imageContainer = document.createElement('div')
  imageContainer.classList.add('img-container')

  const myHtml =`
  <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
  <p>${i}</p>`
  imageContainer.innerHTML = myHtml
  container.append(imageContainer)

}
