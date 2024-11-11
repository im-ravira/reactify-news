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
          <div className="flex items-center space-x-2 max-sm:mx-4 lg:ml-6">
            <div className="relative flex items-center justify-center ">
              <img
                src={ReactIcon}
                className="h-auto w-10 md:w-12 lg:w-14 text-blue-200 animate-spin-slow"
                alt="React Icon"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={GlobeIcon} className="w-[0.4rem] md:w-3 h-auto" alt="Globe Icon" />
              </div>
            </div>
            <span className="text-2xl md:text-3xl font-bold text-gray-100">
              Reactify News<span className="text-base gradient-text ml-1">🇮🇳</span>
            </span>
          </div>
        </Link>

        {/* Categories for large screens */}
        <div className="hidden lg:flex space-x-6 mr-6">
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
        <div className="lg:hidden max-sm:mr-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-300 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="w-6 md:w-10 h-auto"
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
        <div className="lg:hidden mt-4 bg-gray-800 px-4 md:px-10 py-2 rounded-b-md shadow-md">
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
