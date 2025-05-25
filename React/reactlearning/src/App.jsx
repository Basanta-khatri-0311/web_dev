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

// import { useState } from "react";
// import Profile from "./Profile";

// const App = () => {
//   const [userData, setUserData] = useState({});
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const addData = (e) => {
//     e.preventDefault;
//     setUserData({
//       name,
//       age
//     });
//     setAge("")
//     setName("")
//   };
//   return (
//     <div>
//       <h1>Hi from Main page</h1>

//       <label htmlFor="Name">Name: </label>
//       <input type="text" name="" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>

//       <label htmlFor="age">Age: </label>
//       <input type="number" name="" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/>

//       <button onClick={addData}>Submit</button>

//       <Profile user={userData} />
//     </div>
//   );
// };

// export default App;



// import {useState} from 'react'
// import TodoForm from './Todo/TodoForm'


// const App = () => {
//   const [userTask, setUserTask] = useState("")
//   return (
//     <div>
//       <TodoForm userTask = {userTask} setUserTask = {setUserTask}/>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>
      <ul>
        <li>Super Popular Library</li>
        <li>Will help me be even more employable</li>
        <li>React has a preety well logo</li>
      </ul>
    </div>
  )
}

export default App
