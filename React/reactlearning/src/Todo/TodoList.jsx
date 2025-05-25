import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ tasks, setTasks }) => {
  return (
    <div>
      <ul>
        {tasks.length === 0 ? (
          <p>No task Available</p>
        ) : (
          tasks.map((task, index) => (
              <li key={index}>
                {" "}
                {task}{" "}
                <TodoItems task={task} index ={index} setTasks ={setTasks}/>
              </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
