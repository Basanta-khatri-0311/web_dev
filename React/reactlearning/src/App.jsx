// import { useState } from "react"
// import Counter from "./Counter"

// const App = () => {
//   const [count, setcount] = useState(0)
//   const increase = () => setcount(count + 1)
//   const decrease = () => count > 0 ? setcount(count - 1) : 0
//   const reset = () => setcount(0)
//   return (
//     <div>
//       <h1>Hello, Basanta 👋</h1>
//       <p>This is your first React component!</p>
//       <Counter
//       count ={count}
//       increase = {increase}
//       decrease = {decrease}
//       reset = {reset}
//       />
//     </div>
//   )
// }

// export default App


import React from 'react'
import Profile from './Profile'

const App = () => {
  const userData = {name:"Basanta", age:22}
  return (
    <div>
      <h1>Hi from Main page</h1>
      <Profile user = {userData}/>
    </div>
  )
}

export default App

