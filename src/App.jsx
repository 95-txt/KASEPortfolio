import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="p-4 sticky top-0 backdrop-blur-sm bg-black/30 shadow-lg">
          <div className="container py-3 mx-auto flex flex-col sm:flex-row justify-center items-center gap-15 lg:gap-30">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-200 hover:text-white transition-colors duration-100"
            >
              SINAN
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-15 lg:gap-30 ">
              <Link to="/About" className="hover:text-white rounded-xl">
                ABOUT
              </Link>
              <Link to="/Projects" className="hover:text-white rounded-xl">
                PROJECTS
              </Link>
              <Link to="/Contact" className="hover:text-white rounded-xl">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
