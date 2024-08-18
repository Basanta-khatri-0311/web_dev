const h1 = document.querySelector('h1')
const container = document.querySelector(".container")

// const imageTag = document.querySelector('img')

const imageTag = document.createElement('img')

for(let i =0; i<=100; i++){
  const  newImg = imageTag.cloneNode()
  imageTag.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  container.append(imageTag)

}

container.append(p)

p.innerText=''



// for (i = 2; i <= 100; i++){
//   const newImage =imageTag.cloneNode()
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.append(newImage)
// }