import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/PexcelLogo.png';
const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = ({companyName = "Pexcel Solutions Limited" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-secondary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <img src={logo} alt="Company Logo" />
          </div>
          <span className="text-text font-bold text-xl">{companyName}</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map(({ name, path }) => (
            <button
              key={name}
              className={`text-primary hover:text-text font-semibold transition duration-300 ${
                location.pathname === path ? 'border-b-2 border-text' : ''
              }`}
              onClick={() => navigate(path)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-text transition duration-300"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-inner transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {links.map(({ name, path }) => (
              <button
                key={name}
                className="text-text hover:text-secondary font-semibold transition duration-300 text-left"
                onClick={() => {
                  navigate(path);
                  setIsMobileMenuOpen(false);
                }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
