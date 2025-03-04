// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent route for Profile */}
        <Route path="/profile" element={<Profile />}>
          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails />} /> {/* Profile Details */}
          <Route path="settings" element={<ProfileSettings />} /> {/* Profile Settings */}
        </Route>

        {/* Other routes */}
        <Route path="/" element={<h1>Home Page</h1>} /> {/* Home Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
}

export default App;