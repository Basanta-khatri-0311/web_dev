const h1 = document.querySelector('h1')
const container = document.querySelector(".container")

// const imageTag = document.querySelector('img')




// for (i = 2; i <= 100; i++){
//   const newImage =imageTag.cloneNode()
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.append(newImage)
// }



for (let i = 1; i <= 100; i++) {
  const imageTag = document.createElement('img')
  imageTag.classList.add('my-para')
  imageTag.id = 'para-id'
  imageTag.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  container.append(imageTag)
}

// container.append(p)

