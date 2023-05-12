import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (task) => {
    const newTodoList = [...todoList, { id: Date.now(), task: task, complete: false }];
    setTodoList(newTodoList);
  };

  const handleToggle = (id) => {
    const mapped = todoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task };
    });
    setTodoList(mapped);
  };

  return (
    <div className="App">
      <Header />
      <TodoList todoList={todoList} handleToggle={handleToggle} />
      <div className="add-todo">
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
