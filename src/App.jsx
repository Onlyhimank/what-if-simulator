import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Login from "./pages/Login";
import Result from "./pages/Result";
import History from "./pages/History";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    if (darkMode) {
      document.body.classList.add("dark-body");
    } else {
      document.body.classList.remove("dark-body");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />

          <Route
            path="/generator"
            element={<Generator darkMode={darkMode} />}
          />

          <Route path="/login" element={<Login darkMode={darkMode} />} />

          <Route path="/result" element={<Result darkMode={darkMode} />} />

          <Route path="/history" element={<History darkMode={darkMode} />} />

          <Route path="/about" element={<About darkMode={darkMode} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
