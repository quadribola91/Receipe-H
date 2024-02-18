import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../Components/highC.jpeg";
import DropdownMenu from "./DropdownMenu";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-red-200 top-0 left-0 z-50 fixed mb-40px  w-full">
      <div className="max-w-7xl mx-auto px-2">
        <div className="lg:flex lg:justify-between lg:items-center lg:py-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-white">
                <img
                  src={logo1}
                  alt="Logo"
                  className="w-12 h-12 rounded-full"
                />
              </Link>
              <h1 className="hidden md:block md:text-4xl font-bold text-sans text-white ml-4">
                <em>HIGHFOODS!</em>
              </h1>
            </div>
            <button
              onClick={handleToggle}
              className="lg:hidden bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:flex-grow lg:items-center lg:justify-end`}
          >
            <div className="lg:flex lg:items-center lg:space-x-4">
              <Link
                to="/"
                className="text-gray-800 text-2xl font-bold hover:text-white"
                onClick={closeDropdown}
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className="text-gray-800 text-2xl font-bold hover:text-white focus:outline-none "
                  onClick={handleDropdownToggle}
                >
                  Services
                </button>
                {isDropdownOpen && <DropdownMenu />}
              </div>
              <Link
                to="/contact"
                className="text-gray-800 text-2xl font-bold hover:text-white"
                onClick={closeDropdown}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
