// const userName =  prompt("Enter your Name")
// const userAge  = +prompt("Enter Your Age.")
// const userAge  = Number(prompt("Enter Your Age.")) 
// const userAge  = parseInt (prompt("Enter Your Age."))
const userName =  prompt("Enter your Name") || `Basanta Khatri`
const userAge  = Number(prompt("Enter Your Age.")) || 22
const gender = prompt("Enter M/m for male and F/f for female")

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);
console.log(`Gender: ${gender}`);

if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is a College Student.`)
  if(gender ==`f`|| gender ==`F`){
    console.log(`And she is learning java script.`);
  }
  if(gender ==`m`|| gender ==`M`){
    console.log(`And he is learning java script.`);
  }
}
if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is a Working professional.`)
  if(gender ==`f`|| gender ==`F`){
    console.log(`And she is a web developer`);
  }
  if(gender ==`m`|| gender ==`M`){
    console.log(`And he is a web developer.`);
  }
}

if (userAge > 45) {
  console.log(`${userName} is a retired `)
  if(gender ==`f`|| gender ==`F`){
    console.log(`And she reads newspaper.`);
  }
  if(gender ==`m`|| gender ==`M`){
    console.log(`And he reads newspaper.`);
  }
}

console.log(`Program Ended!!!`);