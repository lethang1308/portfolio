import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="border-[2.5px] border-slate-900 px-3 py-1 font-display font-extrabold text-lg tracking-wider text-slate-900">
            HD
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
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
            <a 
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 transition-colors w-full text-center py-2"
            >
              {item.label}
            </a>
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
