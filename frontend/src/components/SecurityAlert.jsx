import React, { useState, useEffect } from 'react';

const SecurityAlert = () => {
  const [alert, setAlert] = useState(null);
  const isDarkMode = true; // Always dark mode

  useEffect(() => {
    const handleMaliciousInput = (event) => {
      setAlert(event.detail);
      // Auto-hide after 5 seconds
      setTimeout(() => setAlert(null), 5000);
    };

    window.addEventListener('maliciousInputDetected', handleMaliciousInput);
    
    return () => {
      window.removeEventListener('maliciousInputDetected', handleMaliciousInput);
    };
  }, []);

  if (!alert) return null;

  return (
    <div className={`
      fixed top-20 right-6 z-[70] max-w-sm p-4 rounded-lg border-2 backdrop-blur-sm
      animate-bounce transition-all duration-300
      ${isDarkMode 
        ? 'bg-red-900/80 border-red-400/30 text-red-100' 
        : 'bg-red-100/80 border-red-400/50 text-red-900'
      }
    `}>
      <div className="flex items-start space-x-3">
        <div className="text-2xl animate-pulse">🚨</div>
        <div>
          <h3 className="font-bold font-mono text-sm mb-1">SECURITY BREACH DETECTED!</h3>
          <p className="text-xs font-mono leading-relaxed">
            {alert.message}
          </p>
        </div>
        <button
          onClick={() => setAlert(null)}
          className={`
            ml-auto text-lg leading-none transition-colors
            ${isDarkMode ? 'text-red-300 hover:text-white' : 'text-red-600 hover:text-red-800'}
          `}
        >
          ×
        </button>
      </div>
      
      {/* Glitch effect */}
      <div className="mt-2 text-xs font-mono opacity-60">
        <span className="animate-pulse">ANALYZING THREAT...</span>
        <div className="w-full bg-gray-500/20 rounded-full h-1 mt-1">
          <div className="bg-red-400 h-1 rounded-full animate-pulse" style={{width: '100%'}}></div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAlert;