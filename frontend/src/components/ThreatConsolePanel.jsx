import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThreatConsolePanel = () => {
  const [activePanel, setActivePanel] = useState('terminal');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode } = useTheme();

  const addTerminalOutput = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setTerminalOutput(prev => [...prev, { 
      message, 
      type, 
      timestamp,
      id: Date.now() + Math.random()
    }]);
  };

  const executeCommand = async (action) => {
    setIsLoading(true);
    addTerminalOutput(`[${action.toUpperCase()}] Initializing threat intelligence query...`, 'command');

    switch(action) {
      case 'pwned-check':
        addTerminalOutput('Connecting to Have I Been Pwned...', 'info');
        setTimeout(() => {
          addTerminalOutput('🔍 BREACH CHECK INTERFACE READY', 'success');
          addTerminalOutput('Click here to check breaches: https://haveibeenpwned.com/', 'link');
          addTerminalOutput('Have I Been Pwned - Check if your email has been compromised', 'info');
        }, 1500);
        break;

      case 'cve-latest':
        addTerminalOutput('Fetching latest CVE data from MITRE/NVD...', 'info');
        setTimeout(() => {
          addTerminalOutput('📊 LATEST CVE VULNERABILITIES:', 'success');
          addTerminalOutput('CVE-2024-XXXX: Critical RCE in Popular Framework', 'error');
          addTerminalOutput('  └─ Remote code execution via deserialization flaw', 'warning');
          addTerminalOutput('CVE-2024-YYYY: High Severity SQL Injection', 'warning');
          addTerminalOutput('  └─ Blind SQL injection in authentication bypass', 'warning');
          addTerminalOutput('CVE-2024-ZZZZ: Medium Privilege Escalation', 'warning');
          addTerminalOutput('  └─ Local privilege escalation via kernel exploit', 'warning');
          addTerminalOutput('Click here for full CVE database: https://nvd.nist.gov/vuln/search', 'link');
          addTerminalOutput('National Vulnerability Database - Complete CVE listings', 'info');
        }, 2500);
        break;

      case 'show-ddos-map':
        addTerminalOutput('Loading Digital Attack Map...', 'info');
        setActivePanel('map');
        setTimeout(() => {
          addTerminalOutput('🌍 LIVE DDOS HEATMAP ACTIVATED', 'success');
          addTerminalOutput('Real-time DDoS attacks visualization loaded.', 'info');
        }, 1500);
        break;

      case 'otx-pulse':
        addTerminalOutput('Connecting to AlienVault OTX...', 'info');
        setTimeout(() => {
          addTerminalOutput('🚨 THREAT PULSE INDICATORS:', 'success');
          addTerminalOutput('Active APT Campaign: Operation Shadow Network', 'error');
          addTerminalOutput('New Malware Family: CyberGhost v2.1', 'warning');
          addTerminalOutput('Emerging IOCs: 45 new IP indicators', 'warning');
          addTerminalOutput('Full threat intelligence at otx.alienvault.com', 'info');
        }, 2000);
        break;

      default:
        addTerminalOutput('Unknown command executed.', 'error');
    }
    
    setIsLoading(false);
  };

  const getMessageColor = (type) => {
    if (isDarkMode) {
      switch(type) {
        case 'success': return 'text-green-400';
        case 'error': return 'text-red-400';
        case 'warning': return 'text-yellow-400';
        case 'command': return 'text-cyan-400';
        case 'link': return 'text-blue-400 underline cursor-pointer hover:text-blue-300';
        default: return 'text-gray-300';
      }
    } else {
      switch(type) {
        case 'success': return 'text-green-600';
        case 'error': return 'text-red-600';
        case 'warning': return 'text-orange-600';
        case 'command': return 'text-blue-600';
        case 'link': return 'text-blue-600 underline cursor-pointer hover:text-blue-800';
        default: return 'text-gray-700';
      }
    }
  };

  return (
    <section id="threat-console" className={`py-24 relative retro-section transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br opacity-5 ${
          isDarkMode 
            ? 'from-red-500 via-transparent to-orange-500' 
            : 'from-red-400 via-transparent to-orange-400'
        }`}></div>
        <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? 'bg-red-500' : 'bg-red-400'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className={`text-sm uppercase tracking-widest font-bold retro-label ${
                isDarkMode ? 'text-red-400' : 'text-red-600'
              }`}>THREAT_INTEL.sys</span>
            </div>
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight retro-title ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              threat
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r neon-glow ${
                isDarkMode 
                  ? 'from-red-400 to-orange-400' 
                  : 'from-red-600 to-orange-600'
              }`}>console.exe</span>
            </h2>
            <div className={`w-16 h-1 mx-auto neon-glow mb-6 ${
              isDarkMode ? 'bg-red-400' : 'bg-red-600'
            }`}></div>
            <p className={`text-lg max-w-2xl mx-auto font-mono ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Real-time threat intelligence dashboard with breach checking, CVE monitoring, and attack visualization
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Threat Console Controls */}
            <div className="lg:col-span-1">
              <div className={`backdrop-blur-sm border-2 rounded-lg p-6 retro-card transition-colors duration-500 ${
                isDarkMode 
                  ? 'bg-black/80 border-red-400/30' 
                  : 'bg-white/80 border-red-400/50'
              }`}>
                <h3 className={`text-xl font-bold mb-6 tracking-wider font-mono ${
                  isDarkMode ? 'text-red-400' : 'text-red-600'
                }`}>THREAT_OPS.panel</h3>
                
                <div className="space-y-4">
                  <button
                    onClick={() => executeCommand('pwned-check')}
                    disabled={isLoading}
                    className={`w-full p-4 rounded-lg font-mono text-left transition-all duration-300 hover:scale-105 disabled:opacity-50 ${
                      isDarkMode
                        ? 'bg-red-500/20 border-2 border-red-400/30 text-white hover:bg-red-500/30 hover:border-red-400'
                        : 'bg-red-100 border-2 border-red-300 text-red-900 hover:bg-red-200 hover:border-red-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🔍</span>
                      <div>
                        <div className="font-bold">Check Breach</div>
                        <div className="text-xs opacity-75">Have I Been Pwned API</div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => executeCommand('cve-latest')}
                    disabled={isLoading}
                    className={`w-full p-4 rounded-lg font-mono text-left transition-all duration-300 hover:scale-105 disabled:opacity-50 ${
                      isDarkMode
                        ? 'bg-orange-500/20 border-2 border-orange-400/30 text-white hover:bg-orange-500/30 hover:border-orange-400'
                        : 'bg-orange-100 border-2 border-orange-300 text-orange-900 hover:bg-orange-200 hover:border-orange-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📊</span>
                      <div>
                        <div className="font-bold">View CVEs</div>
                        <div className="text-xs opacity-75">MITRE/NVD Database</div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => executeCommand('show-ddos-map')}
                    disabled={isLoading}
                    className={`w-full p-4 rounded-lg font-mono text-left transition-all duration-300 hover:scale-105 disabled:opacity-50 ${
                      isDarkMode
                        ? 'bg-blue-500/20 border-2 border-blue-400/30 text-white hover:bg-blue-500/30 hover:border-blue-400'
                        : 'bg-blue-100 border-2 border-blue-300 text-blue-900 hover:bg-blue-200 hover:border-blue-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🌍</span>
                      <div>
                        <div className="font-bold">Show Live Map</div>
                        <div className="text-xs opacity-75">DDoS Attack Visualization</div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => executeCommand('otx-pulse')}
                    disabled={isLoading}
                    className={`w-full p-4 rounded-lg font-mono text-left transition-all duration-300 hover:scale-105 disabled:opacity-50 ${
                      isDarkMode
                        ? 'bg-purple-500/20 border-2 border-purple-400/30 text-white hover:bg-purple-500/30 hover:border-purple-400'
                        : 'bg-purple-100 border-2 border-purple-300 text-purple-900 hover:bg-purple-200 hover:border-purple-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🚨</span>
                      <div>
                        <div className="font-bold">Fetch Threat Pulse</div>
                        <div className="text-xs opacity-75">AlienVault OTX Intel</div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Panel Toggle */}
                <div className="mt-6 flex space-x-2">
                  <button
                    onClick={() => setActivePanel('terminal')}
                    className={`flex-1 py-2 px-4 rounded font-mono text-sm transition-all duration-300 ${
                      activePanel === 'terminal'
                        ? (isDarkMode ? 'bg-green-500 text-black' : 'bg-green-600 text-white')
                        : (isDarkMode ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : 'bg-green-100 text-green-700 hover:bg-green-200')
                    }`}
                  >
                    TERMINAL
                  </button>
                  <button
                    onClick={() => setActivePanel('map')}
                    className={`flex-1 py-2 px-4 rounded font-mono text-sm transition-all duration-300 ${
                      activePanel === 'map'
                        ? (isDarkMode ? 'bg-blue-500 text-black' : 'bg-blue-600 text-white')
                        : (isDarkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-700 hover:bg-blue-200')
                    }`}
                  >
                    LIVE MAP
                  </button>
                </div>
              </div>
            </div>

            {/* Display Area */}
            <div className="lg:col-span-2">
              {activePanel === 'terminal' ? (
                // Terminal Display
                <div className={`backdrop-blur-sm border-2 rounded-lg p-6 retro-card transition-colors duration-500 ${
                  isDarkMode 
                    ? 'bg-black/80 border-green-400/30' 
                    : 'bg-white/80 border-green-400/50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold tracking-wider font-mono ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>THREAT_TERMINAL.log</h3>
                    <button
                      onClick={() => setTerminalOutput([])}
                      className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                          : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                      }`}
                    >
                      CLEAR
                    </button>
                  </div>
                  
                  <div className={`h-96 overflow-y-auto font-mono text-sm p-4 rounded border ${
                    isDarkMode 
                      ? 'bg-black border-green-400/20' 
                      : 'bg-gray-50 border-green-400/30'
                  }`}>
                    {terminalOutput.length === 0 ? (
                      <div className={`text-center opacity-60 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Click a threat intelligence button to start analysis...
                      </div>
                    ) : (
                      terminalOutput.map((output) => (
                        <div key={output.id} className="mb-2">
                          <span className={`text-xs opacity-60 ${
                            isDarkMode ? 'text-gray-500' : 'text-gray-500'
                          }`}>
                            [{output.timestamp}]
                          </span>
                          {output.type === 'link' ? (
                            <span 
                              className={`ml-2 ${getMessageColor(output.type)}`}
                              onClick={() => {
                                const url = output.message.match(/https?:\/\/[^\s]+/)?.[0];
                                if (url) window.open(url, '_blank');
                              }}
                            >
                              {output.message}
                            </span>
                          ) : (
                            <span className={`ml-2 ${getMessageColor(output.type)}`}>
                              {output.message}
                            </span>
                          )}
                        </div>
                      ))
                    )}
                    {isLoading && (
                      <div className={`animate-pulse ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                        ▓ Processing threat intelligence query...
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // Live DDoS Map Display
                <div className={`backdrop-blur-sm border-2 rounded-lg p-6 retro-card transition-colors duration-500 ${
                  isDarkMode 
                    ? 'bg-black/80 border-blue-400/30' 
                    : 'bg-white/80 border-blue-400/50'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 tracking-wider font-mono ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>LIVE_DDOS_MAP.feed</h3>
                  
                  <div className="aspect-video rounded overflow-hidden border border-blue-400/30">
                    <iframe 
                      src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" 
                      width="100%" 
                      height="100%"
                      title="Live Cyber Attack Map"
                      className="w-full h-full"
                      allow="fullscreen"
                    />
                  </div>
                  
                  <div className={`mt-4 text-xs font-mono opacity-75 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    🌍 Real-time cyber attack visualization powered by Kaspersky Cyberthreat Real-time Map
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Threat Intelligence Credits */}
          <div className="mt-12">
            <div className={`backdrop-blur-sm border-2 rounded-lg p-6 retro-card transition-colors duration-500 ${
              isDarkMode 
                ? 'bg-black/60 border-gray-400/20' 
                : 'bg-white/60 border-gray-400/30'
            }`}>
              <h4 className={`text-lg font-bold mb-4 tracking-wider font-mono ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>🔗 THREAT_INTEL.sources</h4>
              <div className={`grid md:grid-cols-2 gap-4 text-sm font-mono ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <div>• Have I Been Pwned – Breach checking API</div>
                <div>• NVD / MITRE – CVE vulnerability database</div>
                <div>• AlienVault OTX – Open Threat Exchange</div>
                <div>• Kaspersky – Real-time cyber threat map</div>
              </div>
              <div className={`mt-4 text-xs opacity-60 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                This is a demonstration interface showcasing threat intelligence integration capabilities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatConsolePanel;