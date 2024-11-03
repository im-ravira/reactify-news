import { Link } from "react-router-dom";
import ReactIcon from "../assets/react.svg";
import GlobeIcon from "../assets/globe.svg";
import { useState } from "react";

const categories = [
  "General",
  "Business",
  "Sports",
  "Science",
  "Health",
  "Entertainment",
  "Technology",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo section */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <div className="relative flex items-center justify-center">
              <img
                src={ReactIcon}
                className="h-12 w-12 text-blue-200 animate-spin-slow"
                alt="React Icon"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={GlobeIcon} className="w-2 h-2" alt="Globe Icon" />
              </div>
            </div>
            <span className="text-3xl font-bold text-gray-100">
              Reactify News<span className="text-base gradient-text ml-1">🇮🇳</span>
            </span>
          </div>
        </Link>

        {/* Categories for large screens */}
        <div className="hidden md:flex space-x-6">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/news/${category.toLowerCase()}`}
              className="text-lg font-medium hover:text-blue-300 transition-colors duration-200 ease-in-out"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-300 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-800 px-4 py-2 rounded-lg shadow-md">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/news/${category.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-lg font-medium text-white hover:bg-gray-700 hover:text-blue-300 rounded-md transition-all duration-200"
            >
              {category}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
