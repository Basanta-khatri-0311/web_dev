const userAge = 15

const isSchoolStudent = (userAge >=5) && (userAge <=18)
const isCollegeStudent = (userAge >= 18) && (userAge <=24)


const isStudent = isSchoolStudent || isCollegeStudent

const orResult = 0 || 2
const andResult =  0 && 2

const andResult2 = '' && `hello`
const orResult2 = '' || `hello`

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null


const andResult4 = '' && 4+8
const orResult4 = undefined || 4+8

const andResult5 = 'Hello' && console.log(`Hello`);
const orResult5 = undefined || console.log(`Hello`);