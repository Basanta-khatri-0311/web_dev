
// const maths = {
//   add: function (a, b) {
//     return a + b
//   },
//   subtract: function (a, b) {
//     return a - b
//   },
//   double: function (a){
//     return a*2
//   }
// }

//new method in es6
const maths = {
  add(a, b) {
    return a + b
  },
  subtract(a, b) {
    return a - b
  },
  double(a) {
    return a * 2
  },
  cube(num){
    return num**3
  }
}