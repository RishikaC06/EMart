import React from 'react'
import { Link } from 'react-router-dom'

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
]

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-[#b642be] rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">EMart</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
              )
            })
          }
        </nav>
        <div className="flex items-center space-x-2">
        <a href="/Login" className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white transition-colors duration-300">Login</a>
        <a href="/Register" className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white transition-colors duration-300">Sign Up</a>
        <a href="/Cart" className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-[#b642be] hover:text-white flex items-center transition-colors duration-300">
        <i className="fa fa-shopping-cart me-1"></i>Cart</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
