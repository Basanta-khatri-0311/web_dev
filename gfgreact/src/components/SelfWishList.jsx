import React, { useState } from "react";
import { v4 as uuid, v4 } from "uuid";

const SelfWishList = () => {
  const [toDo, settoDo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onInputChange = (e) => {
    settoDo(e.target.value);
  };

  const onAddClick = () => {
    if (toDo.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    setTodoList([
      ...todoList,
      { id: uuid(), todo: toDo.trim(), isCompleted: false },
    ]);
    settoDo("");
  };

  const onDeleteClicked = (deletingId) => {
    setTodoList(todoList.filter((value) => value.id !== deletingId));
  };

  const onCheckBoxChanged = (changedId) => {
    setTodoList(
      todoList.map((item) =>
        item.id === changedId
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  };

  return (
    <>
      <div>
        <input
          value={toDo}
          onChange={onInputChange}
          onKeyDown={(e) => {
            (e.key === 'Enter') ? onAddClick() : ""
          }}
          type="text"
          name=""
          id=""
        />
        <button onClick={onAddClick}>Add Item</button>
      </div>
      <div>
        {todoList.length > 0 ? (
          <>
            <div>
              <br />
              <h3>Added Items....</h3>
            </div>
            <div>
              <br />
              <br />
              {todoList.map((item) => (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => onCheckBoxChanged(item.id)}
                  />
                  <span className={item.isCompleted ? "line-strike" : ""}>
                    {item.todo}
                  </span>{" "}
                  ----
                  <button onClick={() => onDeleteClicked(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h3>No Iteam to show...</h3>
        )}
      </div>
    </>
  );
};

export default SelfWishList;
