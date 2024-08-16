

// const imagesCollection1 = document.images
// const imagesCollection = document.getElementsByTagName('img')

// const cssImage = document.getElementsByClassName('css-image')

// const realImage =document.getElementById()

// document.querySelector('#css-image') 
// document.querySelectorAll('#css-image') //gives node list


// const jsImage = document.querySelector('.js-image')

// const ht = document.querySelector('#ht-cs-js')
// const cssValue = document.querySelector('#css-image')
// const jsValue = document.querySelector('#js-image')

// ht.src ='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'
// cssValue.src ='https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk='
// jsValue.src ='https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'



const imagePlace = document.querySelectorAll('img')
const ourImageUrl = [
  'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
  'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk=',
  'https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]


// for (let i = 0; i < imagePlace.length; i++) {
//   imagePlace[i].src = ourImageUrl[i]
// }

// imagePlace.forEach((image,i)=>{
//   image.src = ourImageUrl[i]
// })