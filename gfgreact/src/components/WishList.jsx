import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const WishList = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onToDoChange = (e) => {
    setToDo(e.target.value);
  };

  const onDeleteClicked = (deletingId) => {
    setToDoList(toDoList.filter((todo) => todo.id !== deletingId));
  };

  const onAddToDoClicked = () => {
    if (toDo.trim() === "") return alert("Please enter something!");
    setToDoList((prev) => [...prev, { id: uuid(), todo: toDo.trim() }]);
    setToDo("");
  };

  return (
    <div className="container">
      <h2>My Wishlist</h2>

      <div className="input-section">
        <input
          value={toDo}
          onChange={onToDoChange}
          type="text"
          placeholder="Add Your WishList here..."
        />
        <button onClick={onAddToDoClicked}>Add</button>
      </div>

      <div>
        {toDoList.length > 0 ? toDoList.map((value) => (
          <div className="todo-item" key={value.id}>
            <span>{value.todo}</span>
            <button onClick={() => onDeleteClicked(value.id)}>Delete</button>
          </div>
        )):<h3>No value Added</h3>}
      </div>
    </div>
  );
};

export default WishList;
