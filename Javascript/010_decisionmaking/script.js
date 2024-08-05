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

if (userAge >= 0 && userAge <= 4) {
  console.log(`${userName} is a toddler.`)
  if(gender ==`f`|| gender ==`F`){
    console.log(`And she is learning to walk and talk`);
  }
  if(gender ==`m`|| gender ==`M`){
    console.log(`And he is learning to walk and talk.`);
  }
}

else if (userAge >= 5 && userAge <= 17) {
  console.log(`${userName} is a School Student.`)
  if(gender ==`f`|| gender ==`F`){
    console.log(`And she is learning science and maths.`);
  }
  if(gender ==`m`|| gender ==`M`){
    console.log(`And he is learning science and maths`);
  }
}

else if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is a College Student.`)
  if(gender ==`f`|| gender ==`F`){
    console.log(`And she is learning java script.`);
  }
  if(gender ==`m`|| gender ==`M`){
    console.log(`And he is learning java script.`);
  }
}

else if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is a Working professional.`)
  if(gender ==`f`|| gender ==`F`){
    console.log(`And she is a web developer`);
  }
  if(gender ==`m`|| gender ==`M`){
    console.log(`And he is a web developer.`);
  }
}

else if (userAge > 45 && userAge <= 121) {
  console.log(`${userName} is retired`)
  if(gender ==`f`|| gender ==`F`){
    console.log(`And she reads newspaper`);
  }
  if(gender ==`m`|| gender ==`M`){
    console.log(`And he reads newspaper.`);
  }
}
else if (userAge >= 121 ){
  console.log(`${userName} is immortal.`);
}
else {
  console.log(`Please enter a valid age.`);
}

console.log(`Program Ended!!!`);