function add() {
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

//default parameter

function multiply(a,b=1) {
  return a * b
}


function rollADice(face = 6){
  return Math.floor(Math.random()*face)+1
}