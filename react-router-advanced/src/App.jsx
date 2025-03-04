// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';  // Assurez-vous que le chemin est correct
import ProfileDetails from './components/ProfileDetails';  // Assurez-vous que le chemin est correct
import ProfileSettings from './components/ProfileSettings';  // Assurez-vous que le chemin est correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
