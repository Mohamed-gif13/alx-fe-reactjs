import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      {/* Affichage du formulaire avec composants contrôlés */}
      <RegistrationForm />
      {/* Affichage du formulaire avec Formik */}
      <FormikForm />
    </div>
  );
}

export default App;
