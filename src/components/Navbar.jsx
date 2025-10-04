import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Map route to page title
  const pageTitles = {
    "/": "HOME",
    "/about": "ABOUT",
    "/projects": "PROJECTS",
    "/contact": "CONTACT",
  };

  const currentPage = pageTitles[location.pathname] || "";

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16 relative">
        {/* Desktop Menu (centered) */}
        <div className="hidden md:flex space-x-8 text-xl">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>

        {/* Mobile Menu Button (absolute right) */}
        <div className="p-2 md:hidden absolute right-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`p-2 text-right md:hidden absolute right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col space-y-2">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            HOME
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            ABOUT
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            PROJECTS
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
