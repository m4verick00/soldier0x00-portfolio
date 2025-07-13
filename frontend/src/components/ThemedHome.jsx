import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Import components
import Navigation from './Navigation';
import InteractiveTerminalHero from './InteractiveTerminalHero';
import About from './About';
import RetroExperience from './RetroExperience';
import RetroSkills from './RetroSkills';
import RetroProjects from './RetroProjects';
import YouTubeFavorites from './YouTubeFavorites';
import Blog from './Blog';
import Contact from './Contact';
import ThemeToggle from './ThemeToggle';
import SecurityAlert from './SecurityAlert';

const ThemedHome = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-black text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <ThemeToggle />
      <SecurityAlert />
      <Navigation />
      <InteractiveTerminalHero />
      <About />
      <RetroExperience />
      <RetroSkills />
      <RetroProjects />
      <YouTubeFavorites />
      <Blog />
      <Contact />
      
      {/* Footer */}
      <footer className={`border-t py-8 retro-section transition-colors duration-500 ${
        isDarkMode
          ? 'bg-black border-green-400/30'
          : 'bg-white border-gray-300'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`text-sm mb-4 md:mb-0 font-mono transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2025 soldier0x00. Built with React & Neural Networks.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://soldier0x00.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors font-mono tracking-wider ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-green-400' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                MEDIUM.dll
              </a>
              <a
                href="https://linkedin.com/in/sai-harsha-vardhan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors font-mono tracking-wider ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-cyan-400' 
                    : 'text-gray-600 hover:text-cyan-600'
                }`}
              >
                LINKEDIN.exe
              </a>
              <a
                href="https://tryhackme.com/p/soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors font-mono tracking-wider ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-purple-400' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                TRYHACKME.sys
              </a>
              <a
                href="https://www.instagram.com/harsha_soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors font-mono tracking-wider ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-pink-400' 
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                INSTAGRAM.dll
              </a>
              <a
                href="https://x.com/soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors font-mono tracking-wider ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                TWITTER.exe
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThemedHome;