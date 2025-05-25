import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = ({ userTask, setUserTask }) => {
  const [tasks, setTasks] = useState([]);
  const handelButton = (e) => {
    e.preventDefault();
    if (userTask.trim() === "") return;

    // Add the task to the list
    setTasks([...tasks, userTask]);

    // Clear input
    setUserTask("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={userTask}
          onChange={(e) => setUserTask(e.target.value)}
        />
        <button onClick={handelButton}>Add Task</button>
      </form>
      <TodoList tasks = {tasks} setTasks = {setTasks}/>
    </div>

  );
};

export default TodoForm;
