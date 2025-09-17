import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState('/');

  // Set active page based on current URL path when component mounts or location changes
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return activePage === path;
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
            <Link to="/">
                <img className="h-40" src="/images/logo1.jpeg" alt="FoodDelivery Logo" />
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-orange-600 border-orange-500' : 'border-transparent text-gray-600 hover:border-orange-300 hover:text-orange-600'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className={`${isActive('/menu') ? 'text-orange-600 border-orange-500' : 'border-transparent text-gray-600 hover:border-orange-300 hover:text-orange-600'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Menu
              </Link>
              <Link 
                to="/specials" 
                className={`${isActive('/specials') ? 'text-orange-600 border-orange-500' : 'border-transparent text-gray-600 hover:border-orange-300 hover:text-orange-600'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Today's Specials
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-orange-600 border-orange-500' : 'border-transparent text-gray-600 hover:border-orange-300 hover:text-orange-600'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                About
              </Link>
             
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link to="/cart" className="flex items-center text-gray-600 hover:text-orange-500">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="ml-1 bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link to="/login" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-50">
                Admin Login
              </Link>
              <Link to="/signup" className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
                Admin Sign Up
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                aria-expanded={isOpen}
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'bg-orange-50 border-orange-500 text-orange-600' : 'border-transparent text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`${isActive('/menu') ? 'bg-orange-50 border-orange-500 text-orange-600' : 'border-transparent text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/specials" 
              className={`${isActive('/specials') ? 'bg-orange-50 border-orange-500 text-orange-600' : 'border-transparent text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Today's Specials
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'bg-orange-50 border-orange-500 text-orange-600' : 'border-transparent text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link to="/cart" className="flex items-center text-gray-600 hover:text-orange-500" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="ml-1 bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
            <div className="mt-3 space-y-1">
              <Link to="/login" className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50" onClick={() => setIsOpen(false)}>
                Admin Login
              </Link>
              <Link to="/signup" className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50" onClick={() => setIsOpen(false)}>
                Admin Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;