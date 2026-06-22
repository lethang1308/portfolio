import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    setIsOpen(false);
    if (item.href.startsWith('/#')) {
      e.preventDefault();
      const targetId = item.href.replace('/#', '');
      
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  };

  const navItems = [
    { label: 'ABOUT', href: '/about', isPage: true },
    { label: 'SKILLS', href: '/skills', isPage: true },
    { label: 'PROJECTS', href: '/#projects' },
    { label: 'CONTACT', href: '/contact', isPage: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logoImg} alt="Hoang Duy Logo" className="h-16 md:h-20 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isPage ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <a
            href="#cv"
            className="inline-flex items-center bg-slate-950 text-white px-5 py-2.5 text-xs font-bold tracking-widest rounded-md hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-6 px-6 space-y-4 flex flex-col items-center">
          {navItems.map((item) => (
            item.isPage ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 transition-colors w-full text-center py-2 block"
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 transition-colors w-full text-center py-2 block"
              >
                {item.label}
              </a>
            )
          ))}
          <a
            href="#cv"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-slate-950 text-white py-3 text-xs font-bold tracking-widest rounded-md hover:bg-slate-800 transition-all block"
          >
            DOWNLOAD CV
          </a>
        </div>
      )}
    </nav>
  );
}
