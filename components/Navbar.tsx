
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm border-b border-gray-200' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-vibrant rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
            <span className={`text-xl font-bold font-heading tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Locolock<span className="text-indigo-600">Technologies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium hover:text-indigo-600 transition-colors ${location.pathname === link.path ? 'text-indigo-600' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/consultation"
              className="bg-vibrant text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-indigo-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`md:hidden absolute w-full glass shadow-xl transition-all duration-300 ${isOpen ? 'top-full opacity-100 visible' : 'top-[-400px] opacity-0 invisible'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 border-b border-gray-100"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <Link
              to="/consultation"
              className="block w-full bg-vibrant text-white text-center px-5 py-3 rounded-xl font-semibold"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
