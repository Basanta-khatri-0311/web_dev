import React from "react";

const TodoItems = ({tasks,index,  }) => {

  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };
  return <button onClick={() => handleDelete(index)}>Delete</button>;
};

export default TodoItems;
