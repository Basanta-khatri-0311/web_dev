// const dayNumber = 4

// if(dayNumber == 0){
//   console.log(`Its sunday Today.`);
// } else if(dayNumber === 1){
//   console.log(`Its monday Today.`);
// } else if(dayNumber === 2){
//   console.log(`Its tuesday Today.`);
// } else if(dayNumber === 3){
//   console.log(`Its wednesday Today.`);
// } else if(dayNumber === 4){
//   console.log(`Its thursday Today.`);
// } else if(dayNumber === 5){
//   console.log(`Its friday Today.`);
// }else if(dayNumber === 6){
//   console.log(`Its saturday Today.`);
// } else{
//   console.log(`Please enter a valid day number.`);
// }



const dayNumber = 4

switch (dayNumber) {
  case 0:
    console.log(`Its sunday Today.`);
    break
  case 1:
    console.log(`Its monday Today.`);
    break
  case 2:
    console.log(`Its tuesday Today.`);
    break

  case 3:
    console.log(`Its wednesday Today.`);
    break

  case 4:
    console.log(`Its thursday Today.`);
    break
  case 5:
    console.log(`Its friday Today.`);
    break

  case 6:
    console.log(`Its saturday Today.`);
    break
  default:
    console.log(`Please enter a valid day number.`);

}


console.log(`Program Ended for day!!!`);


const userName = `Basanta Khatri`
const userAge = 22

console.log(`UserName: ${userName}`);
console.log(`Age: ${userAge}`);

switch (true) {
  case (userAge >= 0 && userAge <= 4):
    console.log(`${userName} is a toddler.`)
    break

  case (userAge >= 5 && userAge <= 17):
    console.log(`${userName} is a School Student.`)
    break

  case (userAge >= 18 && userAge <= 24):
    console.log(`${userName} is a College Student.`)
    break

  case (userAge >= 25 && userAge <= 45):
    console.log(`${userName} is a Working professional.`)
    break

  case (userAge > 45 && userAge <= 121):
    console.log(`${userName} is retired`)
    break

  case (userAge >= 121):
    console.log(`${userName} is immortal.`);
    break

  default:
    console.log(`Please enter a valid age.`);


}