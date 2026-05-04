import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-[#12131a]/10 bg-[#eef3ff]/95 px-5 py-4 text-[#12131a] backdrop-blur lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link
          to="/"
          className="text-xl font-black uppercase tracking-[-0.06em]"
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

        <Link
          to="/login"
          className="rounded-full border border-[#12131a]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-[#4b5bdc] hover:text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
