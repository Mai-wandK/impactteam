import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold">
        scale
      </div>
      <div className="flex space-x-8">
        <a href="#" className="hover:text-gray-400">Products</a>
        <a href="#" className="hover:text-gray-400">Government</a>
        <a href="#" className="hover:text-gray-400">Customers</a>
        <a href="#" className="hover:text-gray-400">Resources</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-200">
          Book a Demo →
        </a>
        <a href="#" className="hover:text-gray-400">Log In</a>
      </div>
    </nav>
  );
};

export default Navbar;
