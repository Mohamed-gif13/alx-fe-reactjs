import React from 'react';
import Welcome from './components/Welcome';  // Correct chemin relatif
import Counter from './components/Counter';  // Correct chemin relatif

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenue dans l'application React</h1>
      </header>
      
      <Welcome name="Mohamed" />  {/* Passage de la prop 'name' */}
      <Counter />  {/* Utilisation du compteur */}
    </div>
  );
}

export default App;
