// /src/components/Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Déclaration du state 'count'

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez-moi</button>
    </div>
  );
}

export default Counter;
