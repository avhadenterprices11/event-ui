import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { NavMenu } from './ui/menu-hover-effects';
import { Heart, ShoppingBag, User, LayoutGrid } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Events', path: '/events' },
    { label: 'Venues', path: '/venues' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0B0B0D]/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] flex items-center justify-center shadow-lg shadow-[#C6A75E]/20">
              <span className="text-[#0B0B0D] font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                E
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          <div className="flex-1 flex items-center justify-center">
            <NavMenu menuItems={navLinks} />
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-6 md:gap-8 z-20">
            <div className="hidden md:flex items-center border-r border-white/10 pr-8 gap-6">
               <Link 
                to="/hub" 
                className="text-white/20 hover:text-[#C6A75E] transition-colors"
                title="Project Hub"
               >
                 <LayoutGrid size={18} />
               </Link>

               <Link 
                to="/wishlist" 
                className={`transition-all transform hover:scale-110 ${location.pathname === '/wishlist' ? 'text-[#C6A75E]' : 'text-white/60 hover:text-white'}`}
                title="Wishlist"
               >
                 <Heart size={20} className={location.pathname === '/wishlist' ? 'fill-[#C6A75E]' : ''} />
               </Link>

               <Link 
                to="/cart" 
                className={`transition-all transform hover:scale-110 ${location.pathname === '/cart' ? 'text-[#C6A75E]' : 'text-white/60 hover:text-white'}`}
                title="Cart"
               >
                 <ShoppingBag size={20} />
               </Link>

               <Link 
                to="/login" 
                className={`transition-all transform hover:scale-110 ${location.pathname === '/login' ? 'text-[#C6A75E]' : 'text-white/60 hover:text-white'}`}
                title="Login"
               >
                 <User size={20} />
               </Link>
            </div>

            <Link to="/quote">
              <button className={`px-6 lg:px-8 py-3 rounded-[10px] bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] text-[#0B0B0D] font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_30px_rgba(198,167,94,0.5)] ${
                location.pathname === '/quote' ? 'shadow-[0_6px_30px_rgba(198,167,94,0.5)] scale-105' : ''
              }`}>
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}