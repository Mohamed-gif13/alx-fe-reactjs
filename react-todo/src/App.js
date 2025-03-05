import React from 'react';
import Welcome from './Welcome'; // Exemple de composant enfant
import Counter from './Counter'; // Exemple d'un autre composant enfant

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenue dans l'application React</h1>
      </header>
      
      <Welcome name="Mohamed" />  {/* Exemple d'utilisation de props */}
      <Counter />  {/* Exemple d'utilisation de l'état */}
    </div>
  );
}

export default App;
