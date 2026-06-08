import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { NavMenu } from './ui/menu-hover-effects';
import { Heart, ShoppingBag, User, LayoutGrid, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
        isScrolled || isMobileMenuOpen ? 'bg-[#0B0B0D]/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-5 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-20">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] flex items-center justify-center shadow-lg shadow-[#C6A75E]/20">
              <span className="text-[#0B0B0D] font-bold text-lg lg:text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                E
              </span>
            </div>
          </Link>

          {/* Center Navigation (Desktop) */}
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <NavMenu menuItems={navLinks} />
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-4 lg:gap-8 z-20">
            <div className="hidden lg:flex items-center border-r border-white/10 pr-8 gap-6">
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

            <Link to="/quote" className="hidden sm:block">
              <button className={`px-6 lg:px-8 py-3 rounded-[10px] bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] text-[#0B0B0D] font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_30px_rgba(198,167,94,0.5)] ${
                location.pathname === '/quote' ? 'shadow-[0_6px_30px_rgba(198,167,94,0.5)] scale-105' : ''
              }`}>
                Get Quote
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white hover:text-[#C6A75E] transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-[100%] left-0 right-0 bg-[#0B0B0D]/98 backdrop-blur-xl border-t border-white/5 overflow-y-auto"
          >
            <div className="flex flex-col py-10 px-6 space-y-8 min-h-[calc(100vh-80px)]">
              {/* Mobile Links */}
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 text-2xl font-serif tracking-wide border-b border-white/5 ${
                        location.pathname === link.path ? 'text-[#C6A75E]' : 'text-white/80'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Action Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center justify-around py-8 border-t border-b border-white/5"
              >
                <Link to="/hub" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#C6A75E]">
                  <LayoutGrid size={24} />
                  <span className="text-[10px] uppercase tracking-widest">Hub</span>
                </Link>
                <Link to="/wishlist" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#C6A75E]">
                  <Heart size={24} />
                  <span className="text-[10px] uppercase tracking-widest">Saved</span>
                </Link>
                <Link to="/cart" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#C6A75E]">
                  <ShoppingBag size={24} />
                  <span className="text-[10px] uppercase tracking-widest">Cart</span>
                </Link>
                <Link to="/login" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#C6A75E]">
                  <User size={24} />
                  <span className="text-[10px] uppercase tracking-widest">Login</span>
                </Link>
              </motion.div>

              {/* Mobile Quote Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="pt-4 pb-20"
              >
                <Link to="/quote">
                  <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] text-[#0B0B0D] font-bold uppercase tracking-[0.3em] text-xs">
                    Get a Quote
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}