import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    console.log("Form Submitted", { username, email, password });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom d'utilisateur:</label>
        <input
          type="text"
          name="username"
          value={username} // Correction ici
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // Correction ici
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input
          type="password"
          name="password"
          value={password} // Correction ici
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default RegistrationForm;
