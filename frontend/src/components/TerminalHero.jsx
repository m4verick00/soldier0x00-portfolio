import React, { useState, useEffect } from 'react';

const TerminalHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    '> Initializing security protocols...',
    '> Loading threat intelligence feeds...',
    '> Establishing secure connection...',
    '> Welcome to soldier0x00.cyberspace',
    '> System Status: READY',
    '> Current Role: Data Integration Specialist',
    '> Expertise Level: Advanced Persistent',
    '> Mission: Defend. Hunt. Secure.',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLineIndex < terminalLines.length) {
        setDisplayText(prev => prev + terminalLines[currentLineIndex] + '\n');
        setCurrentLineIndex(prev => prev + 1);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [currentLineIndex]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden flex items-center">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0">
        <div className="matrix-bg opacity-10"></div>
      </div>
      
      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-left">
            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  soldier0x00
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 mb-6 space-y-2">
                <div className="text-cyan-400 font-medium">Data Integration Specialist</div>
                <div className="text-blue-400">Cyber Threat Hunter</div>
                <div className="text-green-400">AI Enthusiast</div>
              </div>
              <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
                Enhancing cybersecurity through advanced data integration, threat hunting, and building the future of AI-powered security automation
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Explore Arsenal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="https://soldier0x00.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-xl hover:shadow-cyan-400/50 transform hover:-translate-y-1 text-center"
              >
                View Blog Posts
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">99.99%</div>
                <div className="text-gray-400 text-sm">Uptime (Olympics)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-gray-400 text-sm">Learning Curve</div>
              </div>
            </div>
          </div>

          {/* Right Side - Terminal */}
          <div className="lg:block">
            <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg shadow-2xl shadow-cyan-500/20 max-w-md mx-auto">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-cyan-400/20 rounded-t-lg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-cyan-400 text-sm font-mono">soldier0x00@cyberspace:~</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 h-64 font-mono text-green-400 text-sm">
                <pre className="whitespace-pre-wrap">
                  {displayText}
                  {showCursor && <span className="bg-green-400 text-black">_</span>}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Security Icons */}
      <div className="absolute top-20 left-10 text-cyan-400/20 text-4xl animate-pulse">🛡️</div>
      <div className="absolute top-40 right-20 text-blue-400/20 text-3xl animate-bounce">🔒</div>
      <div className="absolute bottom-32 left-20 text-green-400/20 text-3xl animate-pulse">⚡</div>
      <div className="absolute bottom-20 right-10 text-purple-400/20 text-4xl animate-bounce">🔍</div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;