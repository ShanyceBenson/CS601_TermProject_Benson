import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Interest from "./pages/Interests";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Game from "./pages/Game";

function App() {
  return (
    <div>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interests" element={<Interest />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
