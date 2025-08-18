import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false); // close menu when link clicked
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-gray-900 font-semibold"
      : "text-gray-700 hover:text-gray-800";

  // Map route to page title
  const pageTitles = {
    "/": "HOME",
    "/about": "ABOUT",
    "/projects": "PROJECTS",
    "/contact": "CONTACT",
  };

  const currentPage = pageTitles[location.pathname] || "";

  return (
    <nav className="sticky top-0 bg-white z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16 relative">
        {/* Mobile Current Page (where logo usually is) */}
        <div className="md:hidden absolute left-4 font-bold text-2xl text-gray-800">
          {currentPage}
        </div>

        {/* Desktop Menu (centered) */}
        <div className="hidden md:flex space-x-8 text-xl">
          <NavLink to="/" className={navLinkClass}>
            HOME
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            ABOUT
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            PROJECTS
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            CONTACT
          </NavLink>
        </div>

        {/* Mobile Menu Button (absolute right) */}
        <div className="md:hidden absolute right-4">
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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col space-y-2">
          <NavLink to="/" className={navLinkClass} onClick={handleLinkClick}>
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={handleLinkClick}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/projects"
            className={navLinkClass}
            onClick={handleLinkClick}
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={handleLinkClick}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
