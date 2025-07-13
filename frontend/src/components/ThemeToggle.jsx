import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 z-[60] p-3 rounded-lg border-2 transition-all duration-300 
        backdrop-blur-sm hover:scale-110 group
        ${isDarkMode 
          ? 'bg-black/80 border-green-400/30 hover:border-green-400 text-green-400' 
          : 'bg-white/80 border-gray-400/30 hover:border-gray-600 text-gray-700'
        }
      `}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {isDarkMode ? (
          // Sun icon for light mode
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </div>
      
      {/* Tooltip */}
      <div className={`
        absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
        whitespace-nowrap text-xs font-mono
        ${isDarkMode 
          ? 'bg-black/90 text-green-400 border border-green-400/30' 
          : 'bg-white/90 text-gray-700 border border-gray-400/30'
        }
      `}>
        {isDarkMode ? 'LIGHT_MODE.exe' : 'DARK_MODE.dll'}
      </div>
    </button>
  );
};

export default ThemeToggle;