// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
