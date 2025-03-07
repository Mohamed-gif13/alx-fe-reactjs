import React, { useState } from 'react';

// Composant TodoList
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Apprendre React', completed: false },
    { id: 2, text: 'Faire les exercices ALX', completed: false },
    { id: 3, text: 'Créer une app Todo', completed: false }
  ]);

  // Ajouter une nouvelle tâche
  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  // Marquer une tâche comme terminée
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Supprimer une tâche
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Ma Liste de Tâches</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo('Nouvelle tâche')}>Ajouter</button>
    </div>
  );
};

export default TodoList;
