import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Login from "./pages/Login";
import Result from "./pages/Result";
import History from "./pages/History";

const routerBaseName =
  import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL;

export default function App() {
  return (
    <BrowserRouter basename={routerBaseName}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/result" element={<Result />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
