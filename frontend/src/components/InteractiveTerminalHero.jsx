import React, { useEffect, useState } from "react";
import EnhancedTerminal from '../terminal/EnhancedTerminal';


const InteractiveTerminalHero = () => {
  const [matrixChars, setMatrixChars] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const [konami, setKonami] = useState([]);
  const [matrixMode, setMatrixMode] = useState(false);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  const matrixCharacters = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Matrix rain effect optimized for mobile
  useEffect(() => {
    // Reduce performance impact on mobile and social media browsers
    const isMobile = window.innerWidth < 768;
    const isSmallScreen = window.innerWidth < 480;
    
    if (isSmallScreen) {
      // Disable matrix effect on very small screens for better performance
      return;
    }
    
    const columns = Math.floor(window.innerWidth / 20);
    // Significantly reduce particles on mobile for better performance
    const maxColumns = isMobile ? Math.min(columns, 8) : Math.min(columns, 30);
    const drops = [];
    
    for (let i = 0; i < maxColumns; i++) {
      drops[i] = 1;
    }

    const matrix = setInterval(() => {
      // Skip animation if tab is not visible (performance optimization)
      if (document.hidden) return;
      
      setMatrixChars(prevChars => {
        const newChars = [...prevChars];
        for (let i = 0; i < drops.length; i++) {
          const text = matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
          newChars[i] = { char: text, y: drops[i] * 20, id: i };
          if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        return newChars.slice(0, maxColumns);
      });
    }, matrixMode ? 50 : (isMobile ? 300 : 150)); // Much slower on mobile

    return () => clearInterval(matrix);
  }, [matrixMode]);


  // Konami code listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKonami(prev => {
        const newKonami = [...prev, e.code].slice(-10);
        if (newKonami.join(',') === konamiCode.join(',')) {
          triggerSecretMode();
          return [];
        }
        return newKonami;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerSecretMode = () => {
    setGlitchActive(true);
    setMatrixMode(true);
    setTimeout(() => {
      setGlitchActive(false);
      setMatrixMode(false);
    }, 5000);
  };

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 200);
  };

  const handleTerminalCommand = (command) => {
    if (command === 'matrix') {
      setMatrixMode(true);
      setTimeout(() => setMatrixMode(false), 5000);
    }
  };

  return (
    <section className={`min-h-screen bg-black relative overflow-hidden flex items-center retro-crt ${matrixMode ? 'matrix-active' : ''}`}>
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden sm:block">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="absolute text-green-400 font-mono opacity-80"
            style={{
              left: `${char.id * 20}px`,
              top: `${char.y}px`,
              textShadow: '0 0 8px #00ff00, 0 0 12px #00ff00',
              fontSize: matrixMode ? (window.innerWidth < 768 ? '16px' : '18px') : (window.innerWidth < 768 ? '12px' : '14px'),
              transition: 'font-size 0.3s ease'
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Matrix Overlay for Full Matrix Mode */}
      {matrixMode && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="text-green-400 text-center animate-pulse">
            <div className="text-4xl font-mono mb-4">ENTERING THE MATRIX...</div>
            <div className="text-lg font-mono">🔒 SECURE CONNECTION ESTABLISHED 🔒</div>
          </div>
        </div>
      )}

      {/* Scanlines Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none scanlines"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Side - Retro Content */}
          <div className="text-left order-2 lg:order-1 py-8 lg:py-0">
            <div className="mb-6 lg:mb-8">
              {/* Glitch Name Effect */}
              <h1 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 font-mono tracking-wider transition-all duration-300 ${
                  glitchActive ? 'animate-pulse text-red-400' : 'text-green-400'
                }`}
                style={{
                  textShadow: '0 0 10px currentColor',
                  filter: glitchActive ? 'hue-rotate(180deg)' : 'none',
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                  lineHeight: '1.2'
                }}
              >
                SOLDIER0X00
              </h1>
              
              {/* Role Descriptions */}
              <div className="space-y-2 lg:space-y-3 text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">
                <div className="flex items-center space-x-2 flex-wrap">
                  <span className="text-green-400 shrink-0">▶</span>
                  <span className="text-green-400 font-mono text-xs sm:text-sm lg:text-base">DATA_ARCHITECT.exe</span>
                </div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <span className="text-cyan-400 shrink-0">▶</span>
                  <span className="text-cyan-400 font-mono text-xs sm:text-sm lg:text-base">CYBER_HUNTER.dll</span>
                </div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <span className="text-yellow-400 shrink-0">▶</span>
                  <span className="text-yellow-400 font-mono text-xs sm:text-sm lg:text-base">AI_NEURAL.sys</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-gray-300 leading-relaxed space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                  <span className="text-gray-400">></span> Engineering secure data architectures with Java, NiFi & AI
                </p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                  <span className="text-gray-400">></span> Learning ML algorithms to enhance threat detection
                </p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                  <span className="text-gray-400">></span> Mastering data parsing to revolutionize cybersecurity
                </p>
              </div>

              {/* CTA Button */}
              <button
                className="w-full sm:w-auto min-h-[48px] px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50 focus:outline-none focus:ring-4 focus:ring-green-500/50 font-mono tracking-wider active:scale-95"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                JACK_IN >>
              </button>
            </div>

            {/* Retro Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-cyan-400/30">
              <div className="text-center retro-stat">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400 neon-glow">∞</div>
                <div className="text-gray-400 text-xs tracking-wider">NEURAL_CAPACITY</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Interactive Terminal */}
          <div className="order-1 lg:order-2 py-8 lg:py-0">
            <div className="max-w-full overflow-hidden">
              <EnhancedTerminal 
                onCommand={handleTerminalCommand}
                className="shadow-2xl shadow-green-400/20 w-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Retro Floating Icons - Hidden on small screens for better readability */}
      <div className="absolute top-20 left-4 sm:left-10 text-green-400/30 text-lg sm:text-2xl md:text-4xl animate-pulse retro-icon hidden sm:block">🛡️</div>
      <div className="absolute top-40 right-4 sm:right-20 text-cyan-400/30 text-base sm:text-xl md:text-3xl animate-bounce retro-icon hidden sm:block">🔒</div>
      <div className="absolute bottom-32 left-4 sm:left-20 text-yellow-400/30 text-base sm:text-xl md:text-3xl animate-pulse retro-icon hidden sm:block">⚡</div>
      <div className="absolute bottom-20 right-4 sm:right-10 text-red-400/30 text-lg sm:text-2xl md:text-4xl animate-bounce retro-icon hidden sm:block">🔍</div>

      {/* Retro Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center retro-scroll">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse neon-glow"></div>
        </div>
      </div>

      {/* Easter Egg Indicator */}
      <div className="absolute top-4 right-4 text-green-400/40 text-xs font-mono animate-pulse hidden sm:block">
        🔒 Secured: Try ↑↑↓↓←→←→BA
      </div>
    </section>
  );
};

export default InteractiveTerminalHero;