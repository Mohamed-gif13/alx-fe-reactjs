import React, { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({
    username: 'JohnDoe',  // Valeur par défaut pour le nom d'utilisateur
    email: 'johndoe@example.com',  // Valeur par défaut pour l'email
    password: 'password123',  // Valeur par défaut pour le mot de passe
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
        value={form.username}  // Valeur de 'username'
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}  // Valeur de 'email'
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}  // Valeur de 'password'
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
