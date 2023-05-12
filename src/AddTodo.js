import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;
