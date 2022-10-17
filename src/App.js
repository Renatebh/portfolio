import "./App.css";
import Home from "./pages/Home";
import Cv from "./pages/Cv";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
