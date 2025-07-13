import React, { useState, useEffect } from 'react';

const RetroTerminalHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [matrixChars, setMatrixChars] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);

  const terminalLines = [
    '> INITIALIZING NEURAL INTERFACE...',
    '> LOADING THREAT INTELLIGENCE MATRIX...',
    '> CONNECTING TO CYBER GRID...',
    '> WELCOME TO soldier0x00.CYBERSPACE',
    '> STATUS: JACK IN COMPLETE',
    '> ROLE: DATA_ARCHITECT.exe',
    '> EXPERTISE: ADVANCED_PERSISTENT_HUNTER',
    '> MISSION: DEFEND.HUNT.EVOLVE',
  ];

  const matrixCharacters = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ0123456789';

  // Matrix rain effect
  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20);
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const matrix = setInterval(() => {
      setMatrixChars(prevChars => {
        const newChars = [...prevChars];
        for (let i = 0; i < drops.length; i++) {
          const text = matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
          newChars[i] = { char: text, y: drops[i] * 20 };
          if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        return newChars.slice(0, 20); // Limit for performance
      });
    }, 100);

    return () => clearInterval(matrix);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLineIndex < terminalLines.length) {
        setDisplayText(prev => prev + terminalLines[currentLineIndex] + '\n');
        setCurrentLineIndex(prev => prev + 1);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [currentLineIndex]);

  // Cursor blink
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  // Glitch effect trigger
  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 200);
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center retro-crt">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {matrixChars.map((char, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-sm font-mono animate-pulse"
            style={{
              left: `${i * 20}px`,
              top: `${char.y}px`,
              textShadow: '0 0 5px #00ff00'
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none scanlines"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Retro Content */}
          <div className="text-left">
            <div className="mb-8">
              {/* Glitch Name Effect */}
              <h1 
                className={`text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight retro-title ${glitchActive ? 'glitch' : ''}`}
                onClick={triggerGlitch}
                style={{ cursor: 'pointer' }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 neon-glow">
                  soldier0x00
                </span>
              </h1>
              
              {/* Retro Role Display */}
              <div className="text-xl lg:text-2xl text-gray-300 mb-6 space-y-2 retro-text">
                <div className="text-green-400 font-bold tracking-wider">► DATA_ARCHITECT.exe</div>
                <div className="text-cyan-400 font-bold tracking-wider">► CYBER_HUNTER.dll</div>
                <div className="text-yellow-400 font-bold tracking-wider">► AI_NEURAL.sys</div>
              </div>
              
              <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed retro-description">
                <span className="text-green-400">&gt;</span> Engineering data architectures with Java, NiFi & AI
                <br />
                <span className="text-cyan-400">&gt;</span> Building ML algorithms for enhanced threat detection
                <br />
                <span className="text-yellow-400">&gt;</span> Mastering data parsing to revolutionize cybersecurity
              </p>
            </div>
            
            {/* Retro CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/50 transform hover:-translate-y-1 retro-button"
                onMouseEnter={() => triggerGlitch()}
              >
                <span className="relative z-10 tracking-widest">JACK_IN &gt;&gt;</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="https://soldier0x00.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-bold rounded-lg transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-xl hover:shadow-green-400/50 transform hover:-translate-y-1 text-center retro-button tracking-widest"
              >
                DOWNLOAD_BLOGS
              </a>
            </div>

            {/* Retro Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-green-400/30">
              <div className="text-center retro-stat">
                <div className="text-2xl font-bold text-green-400 neon-glow">03+</div>
                <div className="text-gray-400 text-xs tracking-wider">YEARS_ONLINE</div>
              </div>
              <div className="text-center retro-stat">
                <div className="text-2xl font-bold text-cyan-400 neon-glow">99.99%</div>
                <div className="text-gray-400 text-xs tracking-wider">UPTIME_RATING</div>
              </div>
              <div className="text-center retro-stat">
                <div className="text-2xl font-bold text-yellow-400 neon-glow">∞</div>
                <div className="text-gray-400 text-xs tracking-wider">NEURAL_CAPACITY</div>
              </div>
            </div>
          </div>

          {/* Right Side - Retro Terminal */}
          <div className="lg:block">
            <div className="bg-black border-2 border-green-400 rounded-lg shadow-2xl shadow-green-500/20 max-w-md mx-auto retro-terminal">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-green-400/10 border-b-2 border-green-400 rounded-t-lg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <span className="text-green-400 text-sm font-mono tracking-wider">NEURAL_INTERFACE_v2.1</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 h-64 font-mono text-green-400 text-sm bg-black retro-screen">
                <pre className="whitespace-pre-wrap">
                  {displayText}
                  {showCursor && <span className="bg-green-400 text-black animate-pulse">█</span>}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retro Floating Icons */}
      <div className="absolute top-20 left-10 text-green-400/30 text-4xl animate-pulse retro-icon">🛡️</div>
      <div className="absolute top-40 right-20 text-cyan-400/30 text-3xl animate-bounce retro-icon">🔒</div>
      <div className="absolute bottom-32 left-20 text-yellow-400/30 text-3xl animate-pulse retro-icon">⚡</div>
      <div className="absolute bottom-20 right-10 text-red-400/30 text-4xl animate-bounce retro-icon">🔍</div>

      {/* Retro Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center retro-scroll">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse neon-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default RetroTerminalHero;