import React, { useState } from 'react';

function Counter() {
  // Initialisation de l'état du compteur avec useState
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le compteur
  const increment = () => setCount(count + 1);
  
  // Fonction pour décrémenter le compteur
  const decrement = () => setCount(count - 1);
  
  // Fonction pour réinitialiser le compteur
  const reset = () => setCount(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Counter Application</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
}

export default Counter;
