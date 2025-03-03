import React, { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({
    username: '',  // Valeur initiale vide pour 'username'
    email: '',     // Valeur initiale vide pour 'email'
    password: '',  // Valeur initiale vide pour 'password'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation basique
    if (!form.username || !form.email || !form.password) {
      alert('Please fill all fields');
      return;
    }
    alert('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}  // Utilisation de form.username
        onChange={handleChange} 
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}  // Utilisation de form.email
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}  // Utilisation de form.password
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

