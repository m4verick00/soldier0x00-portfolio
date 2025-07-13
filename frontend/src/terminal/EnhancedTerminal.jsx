/**
 * EnhancedTerminal.jsx - Advanced terminal with file system, command history, and audio
 * Provides realistic cybersecurity terminal experience with full interactivity
 */

import React, { useState, useEffect, useRef } from 'react';
import { sanitizeInput } from '../utils/security';
import FileSystem from './FileSystem';

const EnhancedTerminal = ({ onCommand, className = "" }) => {
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandBuffer, setCommandBuffer] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [fileSystem] = useState(() => new FileSystem());
  const [isBooting, setIsBooting] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Boot sequence messages
  const bootMessages = [
    'CYBER OPERATIONS TERMINAL v3.0',
    'Initializing secure neural interface...',
    'Loading encrypted threat intelligence...',
    'Establishing secure cyber grid connection...',
    'Loading MITRE ATT&CK framework...',
    'Initializing threat hunting protocols...',
    'Starting behavioral analysis engine...',
    'Connecting to global threat intelligence feeds...',
    'Security status: MAXIMUM ENCRYPTION',
    'Terminal status: HARDENED & READY',
    '',
    'Welcome to soldier0x00.CYBERSPACE',
    'Type "help" for available commands',
    ''
  ];

  // Enhanced command definitions
  const commands = {
    help: () => [
      'AVAILABLE COMMANDS:',
      '===================',
      'System Commands:',
      '  help          - Show this help message',
      '  clear         - Clear terminal screen',
      '  whoami        - Display current user',
      '  pwd           - Show current directory',
      '  history       - Show command history',
      '',
      'File System:',
      '  ls [path]     - List directory contents',
      '  cd <path>     - Change directory',
      '  cat <file>    - Display file contents',
      '',
      'Network & Security:',
      '  nmap <target> - Network scan simulation',
      '  ps            - Show running processes',
      '  netstat       - Display network connections',
      '  hunt          - Start threat hunting session',
      '',
      'Fun Commands:',
      '  hack          - Initiate hacking sequence',
      '  matrix        - Enter the matrix',
      '  social        - Show social networks',
      '  easter        - Find hidden easter eggs',
      '  quotes        - Display hacker manifesto quotes',
      '',
      'Audio Controls:',
      '  audio toggle  - Toggle audio on/off',
      '  stealth       - Toggle professional mode',
    ],

    clear: () => {
      setCommandHistory([]);
      return [];
    },

    whoami: () => [
      'soldier0x00',
      'Security Clearance: CYBER_OPS_SPECIALIST',
      'Primary Role: Threat Hunter & Data Engineer',
      'Specialization: Defensive Security, Digital Forensics, Blue Team Operations',
      'Status: ACTIVE'
    ],

    history: () => [
      'COMMAND HISTORY:',
      '================',
      ...commandBuffer.map((cmd, idx) => `${idx + 1}. ${cmd}`)
    ],

    nmap: (target = 'localhost') => [
      `Starting Nmap scan on ${target}...`,
      '',
      'PORT     STATE SERVICE',
      '22/tcp   open  ssh',
      '80/tcp   open  http',
      '443/tcp  open  https',
      '8080/tcp open  http-alt',
      '',
      'Nmap scan report complete.',
      `Host ${target} appears to be up.`
    ],

    ps: () => [
      'PID    COMMAND',
      '1      /sbin/init',
      '1234   threat-hunter.py',
      '1337   siem-monitor',
      '2048   neural-analyzer',
      '3141   pattern-detector',
      '4096   log-parser',
      '5555   behavioral-engine',
      '8080   web-interface'
    ],

    netstat: () => [
      'Active Internet connections:',
      'Proto Local Address     Foreign Address   State',
      'tcp   127.0.0.1:8080    0.0.0.0:*         LISTEN',
      'tcp   0.0.0.0:22        0.0.0.0:*         LISTEN',
      'tcp   0.0.0.0:443       0.0.0.0:*         LISTEN',
      'udp   192.168.1.100:53  8.8.8.8:53        ESTABLISHED'
    ],

    hunt: () => [
      'THREAT HUNTING SESSION INITIATED',
      '================================',
      'Loading MITRE ATT&CK techniques...',
      'Analyzing behavioral patterns...',
      'Correlating threat intelligence...',
      '',
      'Current Threat Level: LOW',
      'Active Hunts: 3',
      'IOCs Tracked: 1,247',
      'False Positives: 12',
      '',
      'Recent Findings:',
      '- Suspicious PowerShell activity (investigated - benign)',
      '- Unusual network traffic (ongoing analysis)',
      '- Privilege escalation attempt (blocked)',
      '',
      'Threat hunting dashboard: operational'
    ],

    hack: () => [
      'INITIATING HACKING SEQUENCE...',
      '',
      'Bypassing firewall... ████████████ 100%',
      'Cracking encryption... ████████████ 100%', 
      'Accessing mainframe... ████████████ 100%',
      '',
      'Just kidding! 😄',
      'This is a legitimate cybersecurity portfolio.',
      'No actual hacking here, just ethical security research.',
      '',
      'Want to see real skills? Check out my OSINT tools!'
    ],

    matrix: () => {
      // Trigger matrix effect
      window.dispatchEvent(new CustomEvent('matrixMode', { detail: { enabled: true } }));
      return [
        'Welcome to the Matrix...',
        'Reality is about to become very interesting.',
        'Follow the white rabbit. 🐰',
        '',
        'Matrix mode activated for 10 seconds...'
      ];
    },

    social: () => [
      'SOCIAL NETWORK INTERFACES:',
      '==========================',
      'LinkedIn: https://linkedin.com/in/sai-harsha-vardhan/',
      'TryHackMe: https://tryhackme.com/p/soldier0x00',
      'Medium: https://soldier0x00.medium.com/',
      'Instagram: https://www.instagram.com/harsha_soldier0x00',
      'Twitter: https://x.com/soldier0x00',
      '',
      'Status: All systems operational'
    ],

    easter: () => [
      'EASTER EGG COLLECTION:',
      '=====================',
      'Found: ASCII art in HTML source code',
      'Found: Konami code secret (try ↑↑↓↓←→←→BA)',
      'Found: Matrix mode command',
      'Found: Hidden security alerts for malicious input',
      'Found: Boot sequence messages',
      'Hidden: Check network tab for additional easter eggs',
      'Hidden: Terminal command auto-completion',
      'Secret: Audio system with cyberpunk ambience',
      '',
      '🥚 You are a true digital archaeologist!'
    ],

    quotes: () => [
      'HACKER MANIFESTO EXCERPTS:',
      '=========================',
      '"We explore... and you call us criminals."',
      '"We seek after knowledge... and you call us criminals."',
      '"We exist without skin color, without nationality, without religious bias."',
      '"You may stop this individual, but you can\'t stop us all."',
      '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
      '',
      '- The Conscience of a Hacker, 1986',
      '',
      'Remember: With great power comes great responsibility.'
    ],

    audio: (action = '') => {
      return [
        'Audio system has been disabled for security reasons.',
        'All audio features have been permanently removed.',
        'Focus on the visual cybersecurity experience instead.'
      ];
    },

    stealth: () => {
      return [
        'Stealth mode: Always active',
        'Professional mode: Always enabled',
        'Audio system: Permanently disabled for security'
      ];
    }
  };

  // Boot sequence effect with typewriter
  useEffect(() => {
    if (isBooting) {
      let messageIndex = 0;
      let charIndex = 0;
      let currentMessage = '';
      
      const typewriterInterval = setInterval(() => {
        if (messageIndex < bootMessages.length) {
          const fullMessage = bootMessages[messageIndex];
          
          if (charIndex < fullMessage.length) {
            currentMessage += fullMessage[charIndex];
            charIndex++;
            
            // Update the current message being typed
            setCommandHistory(prev => {
              const newHistory = [...prev];
              
              // Remove any existing typing line for current message
              const typingIndex = newHistory.findIndex(entry => 
                entry.isTyping && entry.messageIndex === messageIndex
              );
              
              if (typingIndex !== -1) {
                newHistory[typingIndex] = {
                  command: '',
                  output: [currentMessage + '█'], // cursor effect
                  timestamp: new Date().toLocaleTimeString(),
                  isTyping: true,
                  messageIndex: messageIndex
                };
              } else {
                newHistory.push({
                  command: '',
                  output: [currentMessage + '█'],
                  timestamp: new Date().toLocaleTimeString(),
                  isTyping: true,
                  messageIndex: messageIndex
                });
              }
              return newHistory;
            });
          } else {
            // Message complete, remove cursor and move to next
            setCommandHistory(prev => {
              const newHistory = [...prev];
              const typingIndex = newHistory.findIndex(entry => 
                entry.isTyping && entry.messageIndex === messageIndex
              );
              
              if (typingIndex !== -1) {
                newHistory[typingIndex] = {
                  command: '',
                  output: [currentMessage],
                  timestamp: new Date().toLocaleTimeString(),
                  isTyping: false,
                  messageIndex: messageIndex
                };
              }
              return newHistory;
            });
            
            messageIndex++;
            charIndex = 0;
            currentMessage = '';
            
            // Small delay between messages
            setTimeout(() => {}, 100);
          }
        } else {
          clearInterval(typewriterInterval);
          setIsBooting(false);
          setIsInitialized(true);
        }
      }, 25); // Faster character typing speed (reduced from 50ms to 25ms)

      return () => clearInterval(typewriterInterval);
    }
  }, [isBooting]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  // Handle keyboard input
  const handleKeyDown = (e) => {
    if (!isInitialized) return;

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        navigateHistory('up');
        break;
      case 'ArrowDown':
        e.preventDefault();
        navigateHistory('down');
        break;
      case 'Tab':
        e.preventDefault();
        handleTabCompletion();
        break;
      case 'Enter':
        e.preventDefault();
        executeCommand();
        break;
    }
  };

  const navigateHistory = (direction) => {
    if (commandBuffer.length === 0) return;

    let newIndex;
    if (direction === 'up') {
      newIndex = historyIndex === -1 ? commandBuffer.length - 1 : Math.max(0, historyIndex - 1);
    } else {
      newIndex = historyIndex === -1 ? -1 : Math.min(commandBuffer.length - 1, historyIndex + 1);
    }

    setHistoryIndex(newIndex);
    setCommandInput(newIndex === -1 ? '' : commandBuffer[newIndex]);
  };

  const handleTabCompletion = () => {
    const commandNames = Object.keys(commands);
    const matches = commandNames.filter(cmd => cmd.startsWith(commandInput.toLowerCase()));
    
    if (matches.length === 1) {
      setCommandInput(matches[0]);
    } else if (matches.length > 1) {
      // Show available completions
      setCommandHistory(prev => [...prev, {
        command: commandInput,
        output: ['Available completions:', ...matches],
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  };

  const executeCommand = () => {
    if (!commandInput.trim()) return;

    const sanitizedInput = sanitizeInput(commandInput.trim());
    if (!sanitizedInput) {
      // Malicious input detected - security alert already triggered
      setCommandInput('');
      return;
    }

    const [command, ...args] = sanitizedInput.toLowerCase().split(' ');
    
    // Add to command buffer
    setCommandBuffer(prev => [...prev, sanitizedInput]);
    setHistoryIndex(-1);

    let output = [];

    // Try file system commands first
    const fsResult = fileSystem.executeCommand(command, args);
    if (fsResult !== null) {
      output = fsResult.split('\n').filter(line => line !== '');
    } else if (commands[command]) {
      output = commands[command](...args);
    } else {
      output = [`Command not found: ${command}`, 'Type "help" for available commands'];
    }

    // Add to history
    setCommandHistory(prev => [...prev, {
      command: sanitizedInput,
      output: Array.isArray(output) ? output : [output],
      timestamp: new Date().toLocaleTimeString()
    }]);

    // Clear input
    setCommandInput('');

    // Call parent handler if provided
    if (onCommand) {
      onCommand(command, args);
    }
  };

  const handleInputChange = (e) => {
    setCommandInput(e.target.value);
    setHistoryIndex(-1);
  };

  return (
    <div className={`bg-black border-2 border-green-400/30 rounded-lg font-mono text-sm transition-all duration-300 hover:border-green-400/50 ${className}`}>
      {/* Terminal Header */}
      <div className="bg-green-400/20 border-b border-green-400/30 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="text-green-400 text-xs tracking-wider">SECURE_TERMINAL_v3.0</div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="p-4 h-64 sm:h-80 text-green-400 text-sm bg-black overflow-y-auto scroll-smooth"
      >
        {/* Command History */}
        {commandHistory.map((entry, idx) => (
          <div key={idx} className="mb-2">
            {entry.command && (
              <div className="text-cyan-400">
                <span className="text-gray-500">[{entry.timestamp}]</span> $ {entry.command}
              </div>
            )}
            {entry.output.map((line, lineIdx) => (
              <div key={lineIdx} className="text-green-400 whitespace-pre-wrap leading-relaxed">
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Current Input Line */}
        {isInitialized && (
          <div className="flex items-center">
            <span className="text-green-400 mr-2">
              {fileSystem.pwd()} $
            </span>
            <input
              ref={inputRef}
              type="text"
              value={commandInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono"
              placeholder="Type command..."
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="bg-green-400/10 border-t border-green-400/30 px-4 py-2 text-xs text-green-400/60">
        Use ↑↓ for history • Tab for completion • Type "help" for commands
      </div>
    </div>
  );
};

export default EnhancedTerminal;