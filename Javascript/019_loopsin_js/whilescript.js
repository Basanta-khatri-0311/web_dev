console.log('Program Started');

// let num = 0

// while(num < 10){
//   console.log(num)
//   num ++
// }
// console.log('Program Ended');

// let i = 1

// while(i <= 100){
//   console.log(i)
//   i++
// }

let friends = ['Ram', 'Shyam', 'Hari', 'Sita', 'Gita']

let i = 0

while (i < friends.length) {
  console.log(`${i + 1}. ${friends[i]} `);
  friends[i] = friends[i] + ' coder'
  i++
}

console.log('Program Ended');