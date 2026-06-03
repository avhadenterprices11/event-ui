import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

interface MenuItem {
  label: string;
  path: string;
}

interface NavMenuProps {
  menuItems: MenuItem[];
}

export default function NavMenu({ menuItems }: NavMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative w-full">
      {/* Mobile menu toggle button - only visible on small screens */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden absolute top-0 right-0 z-20 p-2"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className={`w-6 h-0.5 bg-[#F5F5F5] mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-[#F5F5F5] mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-[#F5F5F5] transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
      </button>
      
      {/* Menu container - adapts to screen size */}
      <div className={`
        fixed lg:relative top-20 lg:top-0 left-0 lg:left-auto right-0 lg:right-auto
        bg-[#0B0B0D]/98 lg:bg-transparent
        backdrop-blur-lg lg:backdrop-blur-none
        flex items-center justify-center w-full 
        lg:block lg:h-auto
        ${isMenuOpen ? 'block min-h-[50vh] py-12' : 'hidden lg:block'}
      `}>
        <ul className={`
          flex flex-col items-center space-y-6
          lg:flex-row lg:space-y-0 lg:space-x-4 lg:justify-center
          xl:space-x-8
        `}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.label} className="list-none">
                <Link 
                  to={item.path}
                  className="relative inline-block group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Link text */}
                  <span className={`
                    relative z-10 block uppercase 
                    font-sans font-medium transition-colors duration-500 
                    group-hover:text-[#0B0B0D]
                    text-xl py-2 px-3
                    lg:text-sm lg:py-2 lg:px-3
                    xl:text-sm xl:py-2 xl:px-4
                    tracking-wide
                    ${isActive ? 'text-[#C6A75E]' : 'text-[#F5F5F5]'}
                  `}>
                    {item.label}
                  </span>
                  {/* Top & bottom border animation */}
                  <span className="
                    absolute inset-0 border-t-2 border-b-2 border-[#C6A75E]
                    transform scale-y-[2] opacity-0 
                    transition-all duration-500 origin-center
                    group-hover:scale-y-100 group-hover:opacity-100
                  " />
                  {/* Background fill animation */}
                  <span className="
                    absolute top-[2px] left-0 w-full h-full bg-[#C6A75E]
                    transform scale-0 opacity-0
                    transition-all duration-500 origin-top
                    group-hover:scale-100 group-hover:opacity-100
                  " />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export { NavMenu };
