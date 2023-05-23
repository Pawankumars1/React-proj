
import './App.css';
import React, { useState } from 'react';

 

  const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    const handleInputChange = (e) => {
      setNewTodo(e.target.value);
    };
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        setTodos([...todos, newTodo]);
        setNewTodo('');
      }
    };
  
    const handleDeleteTodo = (index) => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    };
  
    return (
      <div className="container">
         <h1 className="todo-heading"><span className="heading-text">Todo List</span> </h1>
        <div className="tab-container">
        <input className="tab-input"type="text" value={newTodo} onChange={handleInputChange} />
        <button className="tab-button"  onClick={handleAddTodo}>Add Todo</button>
        </div>
        <ul className="todo-list">
     {todos.map((todo, index) => (
    <li key={index} className="todo-item">
       <span className="todo-number">{index + 1}.</span>
      <span className="todo-text">{todo}</span>
      
      <button
        className="todo-delete"
        onClick={() => handleDeleteTodo(index)}
      >
        Delete
      </button>
    </li>
    
  ))}
</ul>

      </div>
    );
  };
  
  export default TodoList;
  

