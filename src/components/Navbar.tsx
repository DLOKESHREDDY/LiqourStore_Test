import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Wine, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; href: string }) => {
    e.preventDefault();
    navigate(link.href);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-burgundy-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center group"
            onClick={(e) => handleNavClick(e, { name: 'Home', href: '/' })}
          >
            <Wine 
              size={28} 
              className="mr-2 transition-transform duration-300 group-hover:rotate-12 text-gold-400"
            />
            <span className="font-serif font-bold text-xl md:text-2xl tracking-tight">
              <span className="text-white">Rise</span>
              <span className="text-gold-400"> Spirits</span>
              <span className="text-white"> & wine</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative font-medium text-lg transition-colors duration-300 group text-white hover:text-gold-400 ${
                  location.pathname === link.href ? 'text-gold-400' : ''
                }`}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden flex items-center p-2 rounded-lg text-white hover:bg-burgundy-800/50 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div 
          className={`md:hidden fixed inset-x-0 top-[57px] transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-burgundy-900/95 backdrop-blur-md shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`block px-6 py-4 text-lg transition-colors duration-300 ${
                  location.pathname === link.href 
                    ? 'bg-burgundy-800 text-gold-400' 
                    : 'text-white hover:bg-burgundy-800 hover:text-gold-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;