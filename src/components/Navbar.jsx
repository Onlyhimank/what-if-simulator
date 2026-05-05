import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const USER_KEY = "whatIfUser";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem(USER_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem(USER_KEY);
    setUser(null);
    navigate("/login");
  }

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/generator">Generator</Link>
        <Link to="/history">History</Link>
        <Link to="/about">About</Link>
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span>Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
