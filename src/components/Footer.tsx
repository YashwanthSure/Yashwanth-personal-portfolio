
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-display font-bold mb-1">Yashwanth</div>
            <p className="text-sm text-muted-foreground">
              Full Stack Web Developer
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Yashwanth. All rights reserved.
          </div>
          
          <a 
            href="#top"
            className="hidden md:flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
