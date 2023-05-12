import React from 'react';

const Todo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(todo.id);
  };

  return (
    <div className={todo.complete ? "strike" : ""} onClick={handleClick}>
      {todo.task}
    </div>
  );
}

export default Todo;
