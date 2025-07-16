import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Career', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'blog', label: 'Blog', href: 'https://soldier0x00.medium.com/', external: true },
    { id: 'threat-console', label: 'Threat Intel', href: '#threat-console' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href, external = false) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#')}
              className="text-lg sm:text-xl font-bold text-white hover:text-cyan-400 transition-colors min-h-[48px] flex items-center"
            >
              <span className="text-cyan-400">soldier0x00</span>
              <span className="text-green-400 ml-1">$</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href, item.external)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 min-h-[40px] ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {item.external && <span className="ml-1 text-xs">↗</span>}
                  {activeSection === item.id && !item.external && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-3 rotate-45' : 'top-1'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'top-3'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href, item.external)}
                    className={`block w-full text-left px-4 py-4 rounded-lg transition-all duration-300 hover:bg-cyan-400/10 min-h-[48px] flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                      activeSection === item.id 
                        ? 'text-cyan-400 bg-cyan-400/10' 
                        : 'text-gray-300'
                    }`}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.external && (
                      <span className="text-xs opacity-60">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => scrollToSection('#')}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-cyan-500 text-black rounded-full shadow-lg hover:bg-cyan-400 hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 active:scale-95"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Navigation;