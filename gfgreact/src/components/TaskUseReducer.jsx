import React, { useReducer, useState } from "react";

const initialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
      };
      return [...state, newTodo];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    default:
      return state;
  }
};

const TaskUseReducer = () => {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Todo App (useReducer)</h2>
      <input
        type="text"
        placeholder="Enter your todos here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <ul style={{ marginTop: "20px", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
            style={{
              cursor: "pointer",
              textDecoration: todo.isCompleted ? "line-through" : "none",
              listStyle: "none",
              marginBottom: "10px",
            }}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent toggle on delete click
                dispatch({ type: "DELETE_TODO", payload: todo.id });
              }}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskUseReducer;
