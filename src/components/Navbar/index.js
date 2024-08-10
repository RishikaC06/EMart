import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu
  };

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-[#b642be] rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">EMart</span>
          </Link>
          <button className="text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white flex items-center transition-colors duration-300 md:hidden" onClick={() => navigate('/cart')}>
            <i className="fa fa-shopping-cart me-1"></i>
          </button>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden md:flex">
          {navigations.map((navigation) => (
            <Link to={navigation.path} className="mr-5 hover:text-[#b642be]" key={navigation.name}>{navigation.name}</Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2 hidden md:flex">
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white transition-colors duration-300" onClick={() => navigate('/login')}>Login</button>
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white transition-colors duration-300" onClick={() => navigate('/register')}>Sign Up</button>
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white flex items-center transition-colors duration-300" onClick={() => navigate('/cart')}>
            <i className="fa fa-shopping-cart me-1"></i>Cart
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-start pl-4">
            {navigations.map((navigation) => (
              <button onClick={() => handleNavigation(navigation.path)} className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-200 text-left" key={navigation.name}>{navigation.name}</button>
            ))}
            <button className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white transition-colors duration-300 mt-2 text-left" onClick={() => handleNavigation('/login')}>Login</button>
            <button className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white transition-colors duration-300 mt-2 text-left" onClick={() => handleNavigation('/register')}>Sign Up</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
