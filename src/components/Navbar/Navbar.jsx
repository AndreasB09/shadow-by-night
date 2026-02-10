import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [showTowerDropdown, setShowTowerDropdown] = useState(false)

    return (
      <nav className="navbar">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <div
          className="dropdown"
          onMouseEnter={() => setShowTowerDropdown(true)}
          onMouseLeave={() => setShowTowerDropdown(false)}
        >
          <span className="nav-item">The Tower</span>
          {showTowerDropdown && (
            <div className="dropdown-menu">
              <Link to="/clan">Toreador</Link>
              <Link to="/clan">Nosferatu</Link>
              <Link to="/clan">Ventrue</Link>
            </div>
          )}
        </div>

        <Link to="/clan" className="nav-item">
          The Movement
        </Link>
        <Link to="/clan" className="nav-item">
          The Independents
        </Link>
        <Link to="/clan" className="nav-item">
          The Domain
        </Link>
        <Link to="/clan" className="nav-item">
          About
        </Link>
      </nav>
    );
}

export default Navbar;