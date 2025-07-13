import React, { useState, useEffect, useRef } from 'react';

const InteractiveTerminalHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [matrixChars, setMatrixChars] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [showCommandLine, setShowCommandLine] = useState(false);
  const [konami, setKonami] = useState([]);
  const [matrixMode, setMatrixMode] = useState(false);
  const inputRef = useRef(null);

  const terminalLines = [
    '> INITIALIZING NEURAL INTERFACE...',
    '> LOADING THREAT INTELLIGENCE MATRIX...',
    '> CONNECTING TO CYBER GRID...',
    '> WELCOME TO soldier0x00.CYBERSPACE',
    '> STATUS: JACK IN COMPLETE',
    '> TYPE "help" FOR COMMANDS',
    '> READY FOR INPUT...',
  ];

  const commands = {
    help: () => [
      'AVAILABLE COMMANDS:',
      '  help     - Show this help menu',
      '  whoami   - Display user information',
      '  ls       - List skills and projects',
      '  hack     - Initialize hacking sequence',
      '  matrix   - Enter the Matrix',
      '  clear    - Clear terminal',
      '  skills   - Display skill tree',
      '  social   - Show social links',
      '  easter   - Find hidden features',
      '  exit     - Exit command mode',
    ],
    whoami: () => [
      'USER PROFILE LOADED...',
      'USERNAME: soldier0x00',
      'REAL_NAME: Sai Harsha Vardhan',
      'ROLE: Data Integration Specialist',
      'PREV_ROLE: Cyber Threat Hunter',
      'CLEARANCE: TOP_SECRET',
      'SKILLS: SIEM, Threat Hunting, Data Engineering',
      'STATUS: ONLINE',
      'LOCATION: Cyberspace',
    ],
    ls: () => [
      'DIRECTORY LISTING:',
      'drwxr-xr-x  skills/',
      'drwxr-xr-x  projects/',
      'drwxr-xr-x  experience/',
      '-rw-r--r--  threat_hunting.exe',
      '-rw-r--r--  data_engineering.dll',
      '-rw-r--r--  ai_neural.sys',
      '-rw-r--r--  resume.pdf',
      'Total: 8 items',
    ],
    hack: () => [
      '[INITIALIZING HACK SEQUENCE...]',
      'Scanning for vulnerabilities...',
      'Found 0 vulnerabilities (You\'re secure!)',
      '████████████████ 100%',
      '[HACK COMPLETE]',
      'RESULT: System hardened successfully!',
      'Welcome to the team, fellow hacker! 🕶️',
    ],
    matrix: () => {
      setMatrixMode(true);
      setTimeout(() => setMatrixMode(false), 5000);
      return [
        '[ENTERING THE MATRIX...]',
        'Reality.exe has stopped working',
        'Loading alternate reality...',
        'Welcome to the real world, Neo.',
      ];
    },
    clear: () => {
      setCommandHistory([]);
      return [];
    },
    skills: () => [
      'SKILL TREE LOADED:',
      '├── Cybersecurity',
      '│   ├── Threat Hunting ████████████ 95%',
      '│   ├── SIEM/SOAR     ███████████  90%',
      '│   └── Forensics     ██████████   85%',
      '├── Data Engineering',
      '│   ├── Apache NiFi   ████████████ 88%',
      '│   ├── Java          ██████████   82%',
      '│   └── ETL Tools     █████████    80%',
      '└── AI/ML',
      '    ├── Algorithms    ████████     75%',
      '    └── Neural Nets   ███████      70%',
    ],
    social: () => [
      'SOCIAL NETWORK LINKS:',
      'LinkedIn: https://linkedin.com/in/sai-harsha-vardhan/',
      'TryHackMe: https://tryhackme.com/p/soldier0x00',
      'Medium: https://soldier0x00.medium.com/',
      'GitHub: [CLASSIFIED]',
      'Status: All systems operational',
    ],
    easter: () => [
      'EASTER EGG FINDER ACTIVATED...',
      'Hint: Try the Konami Code ↑↑↓↓←→←→BA',
      'Hidden command: Type "soldier0x00"',
      'Secret: Click my name for glitch effect',
      'Pro tip: Matrix mode auto-exits after 5s',
      'Keep exploring, there\'s more! 🥚',
    ],
    soldier0x00: () => [
      '    ███████╗ ██████╗ ██╗     ██████╗ ██╗███████╗██████╗ ',
      '    ██╔════╝██╔═══██╗██║     ██╔══██╗██║██╔════╝██╔══██╗',
      '    ███████╗██║   ██║██║     ██║  ██║██║█████╗  ██████╔╝',
      '    ╚════██║██║   ██║██║     ██║  ██║██║██╔══╝  ██╔══██╗',
      '    ███████║╚██████╔╝███████╗██████╔╝██║███████╗██║  ██║',
      '    ╚══════╝ ╚═════╝ ╚══════╝╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝',
      '',
      '    ████████╗██╗  ██╗██████╗ ███████╗ █████╗ ████████╗',
      '    ╚══██╔══╝██║  ██║██╔══██╗██╔════╝██╔══██╗╚══██╔══╝',
      '       ██║   ███████║██████╔╝█████╗  ███████║   ██║   ',
      '       ██║   ██╔══██║██╔══██╗██╔══╝  ██╔══██║   ██║   ',
      '       ██║   ██║  ██║██║  ██║███████╗██║  ██║   ██║   ',
      '       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ',
      '',
      '           ██╗  ██╗██╗   ██╗███╗   ██╗████████╗███████╗██████╗ ',
      '           ██║  ██║██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗',
      '           ███████║██║   ██║██╔██╗ ██║   ██║   █████╗  ██████╔╝',
      '           ██╔══██║██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗',
      '           ██║  ██║╚██████╔╝██║ ╚████║   ██║   ███████╗██║  ██║',
      '           ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝',
      '',
      'The Matrix has you... but you found the truth! 🕶️',
    ],
    exit: () => {
      setShowCommandLine(false);
      return ['Command mode disabled. Click terminal to re-enable.'];
    },
  };

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  const matrixCharacters = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
          newChars[i] = { char: text, y: drops[i] * 20, id: i };
          if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        return newChars.slice(0, 30);
      });
    }, matrixMode ? 50 : 150);

    return () => clearInterval(matrix);
  }, [matrixMode]);

  // Terminal typing effect
  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + terminalLines[currentLineIndex] + '\n');
        setCurrentLineIndex(prev => prev + 1);
        if (currentLineIndex === terminalLines.length - 1) {
          setTimeout(() => setShowCommandLine(true), 1000);
        }
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  // Cursor blink
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Konami code listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKonami(prev => {
        const newKonami = [...prev, e.code].slice(-10);
        if (newKonami.join(',') === konamiCode.join(',')) {
          triggerKonamiEaster();
          return [];
        }
        return newKonami;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerKonamiEaster = () => {
    setGlitchActive(true);
    setMatrixMode(true);
    setCommandHistory(prev => [...prev, { command: 'KONAMI CODE ACTIVATED!', output: commands.soldier0x00() }]);
    setTimeout(() => {
      setGlitchActive(false);
      setMatrixMode(false);
    }, 3000);
  };

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 200);
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      setCommandHistory(prev => [...prev, { command: cmd, output }]);
    } else {
      setCommandHistory(prev => [...prev, { 
        command: cmd, 
        output: [`Command not found: ${cmd}`, 'Type "help" for available commands'] 
      }]);
    }
    setCommandInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(commandInput);
    }
  };

  return (
    <section className={`min-h-screen bg-black relative overflow-hidden flex items-center retro-crt ${matrixMode ? 'matrix-active' : ''}`}>
      {/* Enhanced Matrix Rain Background */}
      <div className={`absolute inset-0 pointer-events-none ${matrixMode ? 'opacity-60' : 'opacity-15'} transition-opacity duration-1000`}>
        {matrixChars.map((char, i) => (
          <div
            key={`${char.id}-${i}`}
            className={`absolute text-green-400 text-sm font-mono ${matrixMode ? 'animate-pulse' : ''}`}
            style={{
              left: `${i * 20}px`,
              top: `${char.y}px`,
              textShadow: '0 0 10px #00ff00',
              fontSize: matrixMode ? '18px' : '14px',
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
            <div className="text-lg font-mono">Reality.exe has stopped working</div>
          </div>
        </div>
      )}

      {/* Scanlines Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none scanlines"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Retro Content */}
          <div className="text-left order-2 lg:order-1">
            <div className="mb-8">
              {/* Glitch Name Effect */}
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight retro-title cursor-pointer ${glitchActive ? 'glitch' : ''}`}
                onClick={triggerGlitch}
                data-text="soldier0x00"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 neon-glow">
                  soldier0x00
                </span>
              </h1>
              
              {/* Retro Role Display */}
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 space-y-2 retro-text">
                <div className="text-green-400 font-bold tracking-wider">► DATA_ARCHITECT.exe</div>
                <div className="text-cyan-400 font-bold tracking-wider">► CYBER_HUNTER.dll</div>
                <div className="text-yellow-400 font-bold tracking-wider">► AI_NEURAL.sys</div>
              </div>
              
              <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed retro-description">
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
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/50 transform hover:-translate-y-1 retro-button"
                onMouseEnter={() => triggerGlitch()}
              >
                <span className="relative z-10 tracking-widest text-sm sm:text-base">JACK_IN &gt;&gt;</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="https://soldier0x00.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-400 text-green-400 font-bold rounded-lg transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-xl hover:shadow-green-400/50 transform hover:-translate-y-1 text-center retro-button tracking-widest text-sm sm:text-base"
              >
                DOWNLOAD_BLOGS
              </a>
            </div>

            {/* Retro Stats Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-green-400/30">
              <div className="text-center retro-stat">
                <div className="text-xl sm:text-2xl font-bold text-green-400 neon-glow">03+</div>
                <div className="text-gray-400 text-xs tracking-wider">YEARS_ONLINE</div>
              </div>
              <div className="text-center retro-stat">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 neon-glow">99.99%</div>
                <div className="text-gray-400 text-xs tracking-wider">UPTIME_RATING</div>
              </div>
              <div className="text-center retro-stat">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400 neon-glow">∞</div>
                <div className="text-gray-400 text-xs tracking-wider">NEURAL_CAPACITY</div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Terminal */}
          <div className="order-1 lg:order-2">
            <div 
              className="bg-black border-2 border-green-400 rounded-lg shadow-2xl shadow-green-500/20 max-w-md mx-auto retro-terminal cursor-pointer"
              onClick={() => {
                setShowCommandLine(true);
                setTimeout(() => inputRef.current?.focus(), 100);
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-green-400/10 border-b-2 border-green-400 rounded-t-lg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <span className="text-green-400 text-xs sm:text-sm font-mono tracking-wider">NEURAL_INTERFACE_v3.0</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 sm:p-6 h-64 sm:h-80 font-mono text-green-400 text-xs sm:text-sm bg-black retro-screen overflow-y-auto">
                <pre className="whitespace-pre-wrap">
                  {displayText}
                  {commandHistory.map((entry, idx) => (
                    <div key={idx}>
                      <div className="text-cyan-400">$ {entry.command}</div>
                      {entry.output.map((line, lineIdx) => (
                        <div key={lineIdx} className="text-green-400">{line}</div>
                      ))}
                    </div>
                  ))}
                  {showCommandLine && (
                    <div className="flex items-center">
                      <span className="text-cyan-400">$ </span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={commandInput}
                        onChange={(e) => setCommandInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="bg-transparent border-none outline-none text-green-400 font-mono flex-1 ml-1"
                        autoFocus
                        placeholder="Type 'help' for commands..."
                      />
                    </div>
                  )}
                  {showCursor && !showCommandLine && <span className="bg-green-400 text-black animate-pulse">█</span>}
                </pre>
              </div>
            </div>

            {/* Terminal Hint */}
            <div className="text-center mt-4">
              <div className="text-green-400/60 text-xs font-mono animate-pulse">
                Click terminal to enable interactive mode
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retro Floating Icons */}
      <div className="absolute top-20 left-10 text-green-400/30 text-2xl sm:text-4xl animate-pulse retro-icon">🛡️</div>
      <div className="absolute top-40 right-20 text-cyan-400/30 text-xl sm:text-3xl animate-bounce retro-icon">🔒</div>
      <div className="absolute bottom-32 left-20 text-yellow-400/30 text-xl sm:text-3xl animate-pulse retro-icon">⚡</div>
      <div className="absolute bottom-20 right-10 text-red-400/30 text-2xl sm:text-4xl animate-bounce retro-icon">🔍</div>

      {/* Retro Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center retro-scroll">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse neon-glow"></div>
        </div>
      </div>

      {/* Easter Egg Indicator */}
      <div className="absolute top-4 right-4 text-green-400/40 text-xs font-mono animate-pulse hidden sm:block">
        Try: ↑↑↓↓←→←→BA
      </div>
    </section>
  );
};

export default InteractiveTerminalHero;