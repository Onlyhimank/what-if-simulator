import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const USER_KEY = "whatIfUser";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    function loadUser() {
      const savedUser = localStorage.getItem(USER_KEY);
      setUser(savedUser ? JSON.parse(savedUser) : null);
    }

    loadUser();
    window.addEventListener("focus", loadUser);

    return () => {
      window.removeEventListener("focus", loadUser);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem(USER_KEY);
    setUser(null);
    navigate("/login");
  }

  return (
    <nav className="border-b border-[#12131a]/10 bg-[#eef3ff]/95 px-5 py-4 text-[#12131a] backdrop-blur lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link
          className="text-xl font-black uppercase tracking-[-0.06em]"
          to="/"
        >
          What If
        </Link>

        <div className="hidden items-center gap-6 text-sm font-bold text-[#51566b] md:flex">
          <Link className="transition hover:text-[#12131a]" to="/">
            Home
          </Link>
          <Link className="transition hover:text-[#12131a]" to="/generator">
            Generator
          </Link>
          <Link className="transition hover:text-[#12131a]" to="/history">
            History
          </Link>
          <Link className="transition hover:text-[#12131a]" to="/about">
            About
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-3">
            <span className="hidden text-sm font-black text-[#4b5bdc] sm:inline">
              Hi, {user.name}
            </span>
            <button
              className="rounded-full border border-[#12131a]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-[#12131a] hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            className="rounded-full border border-[#12131a]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-[#4b5bdc] hover:text-white"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
