import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const USER_KEY = "whatIfUser";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const savedUser = localStorage.getItem(USER_KEY);

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: formData.name,
      email: formData.email,
      loggedIn: true,
    };

    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    setUser(newUser);
    navigate("/generator");
  }

  function handleLogout() {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  }

  if (user) {
    return (
      <main className="min-h-screen bg-[#eef3ff] px-5 py-20 text-[#12131a] lg:px-10">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-[#12131a] bg-white p-8 text-center shadow-[12px_12px_0_#4b5bdc]">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#4b5bdc]">
            Logged in
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
            Welcome, {user.name}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[#51566b]">
            You can continue generating more multiverse scenarios.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              className="rounded-full bg-[#12131a] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
              onClick={() => navigate("/generator")}
            >
              Go to generator
            </button>

            <button
              className="rounded-full border border-[#12131a]/15 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#12131a]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#eef3ff] px-5 py-20 text-[#12131a] lg:px-10">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1fr] md:items-center">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#4b5bdc]">
            Login gate
          </p>

          <h1 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Continue your multiverse.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#51566b]">
            Save your profile on this browser and continue creating more
            multiverse scenarios.
          </p>
        </div>

        <form
          className="rounded-[2rem] border border-[#12131a] bg-white p-6 shadow-[12px_12px_0_#4b5bdc] md:p-8"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#69708c]">
              Name
            </span>

            <input
              className="mt-3 w-full rounded-2xl border border-[#12131a]/15 bg-[#eef3ff] px-5 py-4 text-lg font-bold outline-none focus:border-[#4b5bdc] focus:bg-white"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              required
              value={formData.name}
            />
          </label>

          <label className="mt-6 block">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#69708c]">
              Email
            </span>

            <input
              className="mt-3 w-full rounded-2xl border border-[#12131a]/15 bg-[#eef3ff] px-5 py-4 text-lg font-bold outline-none focus:border-[#4b5bdc] focus:bg-white"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
              type="email"
              value={formData.email}
            />
          </label>

          <button className="mt-7 w-full rounded-full bg-[#12131a] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white">
            Login and continue
          </button>
        </form>
      </section>
    </main>
  );
}
