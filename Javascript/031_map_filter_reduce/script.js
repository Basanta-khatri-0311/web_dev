const months = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November',
  'December']

// const obMonths = {
//   january: 1,
//   february: 2,
//   march: 3,
//   april: 4,
//   may: 5
// }

// months.forEach((month)=>{
//   console.log(month);
// })

// const capMonths = months.forEach((month,index)=>{
//   console.log(index+1,month);
//   return month.toLocaleUpperCase()
// })

// const capMonths = months.map((month,index,array)=>{
//   console.log(index+1,month);
//   // console.log(array);
//   return month.toLocaleUpperCase()
// })


//Returns months having m or M.
// const filterMonths = months.filter((month, index) => {
//   console.log(month);
//   return month.includes('m') || month.includes('M')
// })

//returns months in odd place
// const filterMonths = months.filter((month, index) => {
//   console.log(month);
//   return (index + 1) % 2 === 1
// })




// const key = Object.keys(obMonths)
// console.log(key);

// for(keys in key){
//   console.log(obMonths[key[keys]]);
// }


// for(keys of key){
//   console.log(obMonths[keys]);
// }




// const students = [
//   {
//     name: 'Basanta',
//     age: 22
//   },
//   {
//     name: 'sameer',
//     age: 18
//   },
//   {
//     name: 'sumit',
//     age: 23
//   }
// ]

// const value = students.filter((student) => student.age > 18).map((student)=> student.name
// ).filter((student)=>student.includes('a'))
// console.log(value);



const nums = [6, 2, 3, 4, 5, 6]

// nums.reduce((accumulator, current, index, arr) => {
//   console.log(accumulator, current)
//   return accumulator + current
// })

// console.log(nums.some((num,i) => {
//   if(num>2){
//     console.log(i);
//   }
//   return num > 2
// })
//  );   

console.log(nums.every((num, i) => {
  if (num > 2) {
    console.log(i);
  }
  return num > 2
}));