import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const USER_KEY = "whatIfUser";

export default function Login({ darkMode }) {
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

    const redirect = localStorage.getItem("redirectAfterLogin");

    if (redirect) {
      localStorage.removeItem("redirectAfterLogin");
      navigate(redirect);
    } else {
      navigate("/generator");
    }
  }

  function handleLogout() {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  }

  if (user) {
    return (
      <main className={`login-page ${darkMode ? "login-dark" : "login-light"}`}>
        <section
          className={`login-card ${
            darkMode ? "login-card-dark" : "login-card-light"
          }`}
        >
          <p className="login-subtitle">Logged in</p>

          <h1 className="login-title">Welcome, {user.name}</h1>

          <p className={`login-text ${darkMode ? "text-dark" : "text-light"}`}>
            You can continue generating more multiverse scenarios.
          </p>

          <div className="login-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/generator")}
            >
              Go to generator
            </button>

            <button
              className={`secondary-btn ${
                darkMode ? "secondary-dark" : "secondary-light"
              }`}
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
    <main className={`login-page ${darkMode ? "login-dark" : "login-light"}`}>
      <section className="login-layout">
        <div>
          <p className="login-subtitle">Login gate</p>

          <h1 className="login-heading">Continue your multiverse.</h1>

          <p className={`login-text ${darkMode ? "text-dark" : "text-light"}`}>
            Login is stored locally in the browser using localStorage. No
            backend is required for this capstone demo.
          </p>
        </div>

        <form
          className={`login-card ${
            darkMode ? "login-card-dark" : "login-card-light"
          }`}
          onSubmit={handleSubmit}
        >
          <label className="input-group">
            <span className="input-label">Name</span>

            <input
              className={`login-input ${
                darkMode ? "input-dark" : "input-light"
              }`}
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              required
              value={formData.name}
            />
          </label>

          <label className="input-group">
            <span className="input-label">Email</span>

            <input
              className={`login-input ${
                darkMode ? "input-dark" : "input-light"
              }`}
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
              type="email"
              value={formData.email}
            />
          </label>

          <button className="primary-btn full-btn">Login and continue</button>
        </form>
      </section>
    </main>
  );
}
