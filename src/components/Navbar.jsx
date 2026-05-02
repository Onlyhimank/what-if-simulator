import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 px-6 py-4 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          What If
        </Link>

        <div className="flex gap-5 text-sm text-slate-300">
          <Link to="/">Home</Link>
          <Link to="/generator">Generator</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
