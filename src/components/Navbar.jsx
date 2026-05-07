import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <div className="navbar-container">
        <Link to="/" className="logo">
          What If
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/generator">Generator</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About</Link>
        </div>

        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}
