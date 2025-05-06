import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">My Portfolio</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Home</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">About</a>
              <a href="#skills" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Skills</a>
              <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Projects</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg 
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Home</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">About</a>
          <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Skills</a>
          <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
