
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children, onClick }: NavItemProps) => {
  return (
    <li>
      <a 
        href={href} 
        onClick={onClick}
        className="relative px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        {children}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a 
            href="#top" 
            className="text-xl font-display font-bold relative z-10"
            aria-label="Yashwanth - Full Stack Developer"
          >
            Yashwanth
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center md:space-x-1">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden z-20 text-foreground p-2"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation Menu */}
          <div 
            className={cn(
              "fixed inset-0 z-10 bg-background backdrop-blur-xl md:hidden flex flex-col transition-all duration-300 ease-in-out",
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <div className="h-20" />
            <ul className="flex flex-col items-center justify-center space-y-8 p-8 mt-12">
              <NavItem href="#about" onClick={closeMenu}>About</NavItem>
              <NavItem href="#projects" onClick={closeMenu}>Projects</NavItem>
              <NavItem href="#skills" onClick={closeMenu}>Skills</NavItem>
              <NavItem href="#contact" onClick={closeMenu}>Contact</NavItem>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
