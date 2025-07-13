import React, { useState, useEffect, useRef } from 'react';
import { sanitizeInput, validateCommand } from '../utils/security';

const SecureTerminal = ({ onCommand }) => {
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const inputRef = useRef(null);

  // Initialize terminal with welcome messages
  useEffect(() => {
    if (!isInitialized) {
      const initMessages = [
        'INITIALIZING SECURE NEURAL INTERFACE...',
        'LOADING ENCRYPTED THREAT INTELLIGENCE...',
        'ESTABLISHING SECURE CYBER GRID CONNECTION...',
        'WELCOME TO soldier0x00.CYBERSPACE',
        'SECURITY STATUS: MAXIMUM ENCRYPTION',
        'TERMINAL STATUS: HARDENED & READY',
        'TYPE "help" FOR AVAILABLE COMMANDS',
      ];

      let index = 0;
      const interval = setInterval(() => {
        if (index < initMessages.length) {
          // Add as proper command history entry
          setCommandHistory(prev => [...prev, {
            command: '',
            output: [initMessages[index]]
          }]);
          index++;
        } else {
          clearInterval(interval);
          setIsInitialized(true);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isInitialized]);

  const secureCommands = {
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
      'Found 0 vulnerabilities (System secured!)',
      '████████████████ 100%',
      '[HACK COMPLETE]',
      'RESULT: All systems hardened!',
      'Nice try! This system is bulletproof! 🕶️',
    ],
    matrix: () => {
      if (onCommand) onCommand('matrix');
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
      'Instagram: https://www.instagram.com/harsha_soldier0x00',
      'Twitter: https://x.com/soldier0x00',
      'Status: All systems operational',
    ],
    easter: () => [
      'EASTER EGG FINDER ACTIVATED...',
      'Hint: Try the Konami Code ↑↑↓↓←→←→BA',
      'Hidden command: Type "soldier0x00"',
      'Secret: Click my name for glitch effect',
      'Pro tip: Matrix mode auto-exits after 5s',
      'Security: All inputs are sanitized! 🔒',
      'Fun fact: Check the HTML source for ASCII art!',
      'Bonus: Try entering malicious code for a surprise 😏',
      'Developer secret: This site has zero jQuery!',
      '🕵️‍♂️ You found the easter egg command! You are worthy.'
    ],
    soldier0x00: () => [
      '    ███████╗ ██████╗ ██╗     ██████╗ ██╗███████╗██████╗ ',
      '    ██╔════╝██╔═══██╗██║     ██╔══██╗██║██╔════╝██╔══██╗',
      '    ███████╗██║   ██║██║     ██║  ██║██║█████╗  ██████╔╝',
      '    ╚════██║██║   ██║██║     ██║  ██║██║██╔══╝  ██╔══██╗',
      '    ███████║╚██████╔╝███████╗██████╔╝██║███████╗██║  ██║',
      '    ╚══════╝ ╚═════╝ ╚══════╝╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝',
      '',
      '           ██╗  ██╗██╗   ██╗███╗   ██╗████████╗███████╗██████╗ ',
      '           ██║  ██║██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗',
      '           ███████║██║   ██║██╔██╗ ██║   ██║   █████╗  ██████╔╝',
      '           ██╔══██║██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗',
      '           ██║  ██║╚██████╔╝██║ ╚████║   ██║   ███████╗██║  ██║',
      '           ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝',
      '',
      'The Matrix has you... but you found the truth! 🕶️',
      'Security Level: MAXIMUM 🔒',
    ],
    exit: () => {
      setIsActive(false);
      return ['Command mode disabled. Click terminal to re-enable.'];
    },
  };

  const handleSecureCommand = (rawInput) => {
    // Sanitize and validate input
    const sanitizedInput = sanitizeInput(rawInput);
    const validatedCommand = validateCommand(sanitizedInput);
    
    if (!validatedCommand) {
      setCommandHistory(prev => [...prev, { 
        command: sanitizedInput, 
        output: [
          'SECURITY ALERT: Invalid command detected!',
          'Command blocked for security reasons.',
          'Type "help" for available commands.'
        ]
      }]);
      setCommandInput('');
      return;
    }

    const commandName = validatedCommand.toLowerCase().split(' ')[0];
    
    if (secureCommands[commandName]) {
      const output = secureCommands[commandName]();
      setCommandHistory(prev => [...prev, { command: validatedCommand, output }]);
    } else {
      setCommandHistory(prev => [...prev, { 
        command: validatedCommand, 
        output: [`Command not found: ${commandName}`, 'Type "help" for available commands'] 
      }]);
    }
    
    setCommandInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSecureCommand(commandInput);
    }
  };

  const handleInputChange = (e) => {
    // Additional input sanitization on change
    const sanitized = sanitizeInput(e.target.value);
    setCommandInput(sanitized);
  };

  return (
    <div 
      className="bg-black border-2 border-green-400 rounded-lg shadow-2xl shadow-green-500/20 max-w-md mx-auto retro-terminal cursor-pointer"
      onClick={() => {
        setIsActive(true);
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
        <span className="text-green-400 text-xs sm:text-sm font-mono tracking-wider">SECURE_TERMINAL_v3.0</span>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 sm:p-6 h-64 sm:h-80 font-mono text-green-400 text-xs sm:text-sm bg-black retro-screen overflow-y-auto">
        <div className="whitespace-pre-wrap">
          {commandHistory.map((entry, idx) => (
            <div key={idx}>
              <div className="text-cyan-400">$ {entry.command}</div>
              {entry.output.map((line, lineIdx) => (
                <div key={lineIdx} className="text-green-400">{line}</div>
              ))}
            </div>
          ))}
          {isActive && (
            <div className="flex items-center">
              <span className="text-cyan-400">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={commandInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="bg-transparent border-none outline-none text-green-400 font-mono flex-1 ml-1"
                maxLength={100}
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                placeholder="Type 'help' for commands..."
              />
            </div>
          )}
          {!isActive && (
            <div className="text-green-400/60 animate-pulse">
              Click to activate secure terminal...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecureTerminal;