import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Sintetix</div>
      <div className="hidden md:flex space-x-4">
        <a href="/home" className="hover:text-gray-300">Home</a>
        <a href="/blog" className="hover:text-gray-300">Blog</a>
        <a href="/tecnologias" className="hover:text-gray-300">Tecnologías</a>
        <a href="/sobre-nosotros" className="hover:text-gray-300">Sobre Nosotros</a>
        <a href="/more" className="hover:text-gray-300">More</a>
      </div>
      <div className="flex items-center border-2 border-purple-500 rounded">
        <input type="text" placeholder="Search" className="px-4 py-2 bg-gray-800 outline-none" />
        <button type="submit" className="px-4 text-purple-500 bg-gray-800 hover:text-purple-300">
          🔍
        </button>
      </div>
      <div className="space-x-2">
        <button className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-400">Login</button>
        <button className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-400">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;