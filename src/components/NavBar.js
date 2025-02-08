import { useState } from "react";
import logo from "../assets/logo.png"; // Adjust the path as needed

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-primary">TechMeet</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-primary">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-primary">
          Service
        </a>
        <a href="#" className="text-gray-700 hover:text-primary">
          Contact Us
        </a>
        <a href="#" className="text-gray-700 hover:text-primary">
          Help
        </a>
        <a href="#" className="text-gray-700 hover:text-primary">
          Blogs
        </a>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="text-primary border border-primary px-4 py-2 rounded-md">
          Sign Up
        </button>
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Log In
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-4 md:hidden">
          <a href="#" className="text-gray-700 hover:text-primary">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Service
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Contact Us
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Help
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Blogs
          </a>
          <button className="text-primary border border-primary px-4 py-2 rounded-md">
            Sign Up
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
