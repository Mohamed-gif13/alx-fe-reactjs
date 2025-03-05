// Emplacement : src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;