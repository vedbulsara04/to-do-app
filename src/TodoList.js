import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, handleToggle }) => {
  return (
    <div className="todo-list">
      {todoList.map(todo => (
        <Todo key={todo.id} todo={todo} handleToggle={handleToggle} />
      ))}
    </div>
  );
}

export default TodoList;
