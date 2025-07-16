import React, { useState, useEffect } from 'react';

const RetroSkills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [matrixMode, setMatrixMode] = useState(false);

  const skillCategories = {
    technical: {
      title: 'CYBER_ARSENAL.exe',
      icon: '⚡',
      skills: [
        { name: 'SIEM & SOAR', level: 95, color: 'green' },
        { name: 'Threat Hunting', level: 92, color: 'cyan' },
        { name: 'MITRE ATT&CK', level: 90, color: 'red' },
        { name: 'Log Analysis', level: 88, color: 'yellow' },
        { name: 'OSINT', level: 85, color: 'purple' },
        { name: 'Linux Administration', level: 82, color: 'blue' },
        { name: 'Cloud Security (AWS/Azure)', level: 80, color: 'pink' },
        { name: 'Vulnerability Assessment', level: 88, color: 'indigo' },
      ]
    },
    tools: {
      title: 'SECURITY_TOOLS.dll',
      icon: '🛠️',
      skills: [
        { name: 'AIsaac SIEM (Proprietary)', level: 95, color: 'green' },
        { name: 'ArcSight Logger', level: 90, color: 'cyan' },
        { name: 'Nessus', level: 88, color: 'red' },
        { name: 'Wireshark', level: 87, color: 'yellow' },
        { name: 'Nmap', level: 85, color: 'purple' },
        { name: 'OpenVAS', level: 82, color: 'blue' },
        { name: 'VMware Workstation', level: 88, color: 'pink' },
        { name: 'Shodan', level: 80, color: 'indigo' },
      ]
    },
    data: {
      title: 'DATA_ENGINE.sys',
      icon: '🔧',
      skills: [
        { name: 'Apache NiFi', level: 90, color: 'green' },
        { name: 'Java Development', level: 85, color: 'cyan' },
        { name: 'JSON/XML Parsing', level: 88, color: 'red' },
        { name: 'ETL Tools', level: 83, color: 'yellow' },
        { name: 'n8n Automation', level: 80, color: 'purple' },
        { name: 'Data Architecture', level: 85, color: 'blue' },
        { name: 'RabbitMQ', level: 78, color: 'pink' },
        { name: 'Kubernetes', level: 75, color: 'indigo' },
      ]
    },
    frameworks: {
      title: 'COMPLIANCE.lib',
      icon: '📋',
      skills: [
        { name: 'MITRE ATT&CK', level: 92, color: 'green' },
        { name: 'MITRE D3FEND', level: 85, color: 'cyan' },
        { name: 'NIST Framework', level: 88, color: 'red' },
        { name: 'CIS Controls', level: 85, color: 'yellow' },
        { name: 'ISO 27001', level: 75, color: 'purple' },
        { name: 'OWASP', level: 80, color: 'blue' },
      ]
    },
    ai: {
      title: 'AI_NEURAL.net',
      icon: '🤖',
      skills: [
        { name: 'Generative AI', level: 78, color: 'green' },
        { name: 'Machine Learning', level: 75, color: 'cyan' },
        { name: 'Data Analysis', level: 85, color: 'red' },
        { name: 'Big Data Analysis', level: 82, color: 'yellow' },
        { name: 'Neural Networks', level: 70, color: 'purple' },
        { name: 'AI for Cybersecurity', level: 80, color: 'blue' },
      ]
    }
  };

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      green: type === 'bg' ? 'bg-green-500' : type === 'border' ? 'border-green-400' : 'text-green-400',
      cyan: type === 'bg' ? 'bg-cyan-500' : type === 'border' ? 'border-cyan-400' : 'text-cyan-400',
      red: type === 'bg' ? 'bg-red-500' : type === 'border' ? 'border-red-400' : 'text-red-400',
      yellow: type === 'bg' ? 'bg-yellow-500' : type === 'border' ? 'border-yellow-400' : 'text-yellow-400',
      purple: type === 'bg' ? 'bg-purple-500' : type === 'border' ? 'border-purple-400' : 'text-purple-400',
      blue: type === 'bg' ? 'bg-blue-500' : type === 'border' ? 'border-blue-400' : 'text-blue-400',
      pink: type === 'bg' ? 'bg-pink-500' : type === 'border' ? 'border-pink-400' : 'text-pink-400',
      indigo: type === 'bg' ? 'bg-indigo-500' : type === 'border' ? 'border-indigo-400' : 'text-indigo-400',
    };
    return colorMap[color] || colorMap.green;
  };

  // Animate skills when category changes
  useEffect(() => {
    const skills = skillCategories[activeCategory].skills;
    setAnimatedSkills({});
    
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => ({
          ...prev,
          [skill.name]: skill.level
        }));
      }, index * 100);
    });
  }, [activeCategory]);

  // Matrix mode trigger
  const triggerMatrix = () => {
    setMatrixMode(true);
    setTimeout(() => setMatrixMode(false), 2000);
  };

  return (
    <section id="skills" className={`py-24 bg-black relative retro-section ${matrixMode ? 'matrix-active' : ''}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Retro Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-6">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-green-400 font-bold retro-label">SKILL_TREE.db</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight retro-title">
              neural
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 neon-glow">inventory.sys</span>
            </h2>
            <div className="w-16 h-1 bg-green-400 mx-auto neon-glow mb-6"></div>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-mono px-4">
              A comprehensive arsenal of cybersecurity tools, frameworks, and emerging technologies
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-2">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 retro-button font-mono tracking-wider text-xs sm:text-sm min-h-[48px] focus:outline-none focus:ring-2 focus:ring-green-400/50 ${
                  activeCategory === key
                    ? 'bg-green-500 text-black shadow-lg shadow-green-500/50 neon-glow'
                    : 'bg-black/40 backdrop-blur-sm border border-green-400/30 text-green-400 hover:bg-green-400/10'
                }`}
              >
                <span className="mr-1 sm:mr-2">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{key.toUpperCase()}</span>
              </button>
            ))}
          </div>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="bg-black/80 backdrop-blur-sm border-2 border-green-400/30 rounded-xl p-8 retro-card">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white font-mono tracking-wider">
                {skillCategories[activeCategory].icon} {skillCategories[activeCategory].title}
              </h3>
              <button 
                onClick={triggerMatrix}
                className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm"
              >
                [MATRIX_MODE]
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => {
                const colors = getColorClasses(skill.color);
                const animatedLevel = animatedSkills[skill.name] || 0;
                
                return (
                  <div key={index} className="group retro-skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium font-mono tracking-wider">{skill.name}</span>
                      <span className={`text-sm font-bold ${colors.text} font-mono`}>
                        {animatedLevel}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden border border-gray-600/50">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${colors.bg} relative`}
                        style={{ width: `${animatedLevel}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Retro Progress Text */}
                    <div className="mt-1 font-mono text-xs text-gray-500">
                      {'█'.repeat(Math.floor(animatedLevel/10))}{'░'.repeat(10 - Math.floor(animatedLevel/10))} {animatedLevel}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Specialization Areas */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-black/80 backdrop-blur-sm border-2 border-green-400/30 rounded-lg p-6 text-center retro-card hover:border-green-400/50 transition-all">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-green-400 font-bold mb-2 font-mono tracking-wider">THREAT_HUNTING.exe</h4>
              <p className="text-gray-400 text-sm font-mono">Advanced persistent threat detection and behavioral analysis</p>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border-2 border-cyan-400/30 rounded-lg p-6 text-center retro-card hover:border-cyan-400/50 transition-all">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="text-cyan-400 font-bold mb-2 font-mono tracking-wider">DIGITAL_FORENSICS.dll</h4>
              <p className="text-gray-400 text-sm font-mono">Incident investigation and evidence analysis</p>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border-2 border-purple-400/30 rounded-lg p-6 text-center retro-card hover:border-purple-400/50 transition-all">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="text-purple-400 font-bold mb-2 font-mono tracking-wider">AI_INTEGRATION.sys</h4>
              <p className="text-gray-400 text-sm font-mono">Building intelligent security automation solutions</p>
            </div>
          </div>

          {/* ASCII Art Divider */}
          <div className="mt-16 text-center">
            <pre className="text-green-400/30 text-xs font-mono hidden sm:block">
{`
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║  ███████╗██╗  ██╗██╗██╗     ██╗         ████████╗██████╗ ███████╗███████╗                   ║
║  ██╔════╝██║ ██╔╝██║██║     ██║         ╚══██╔══╝██╔══██╗██╔════╝██╔════╝                   ║
║  ███████╗█████╔╝ ██║██║     ██║            ██║   ██████╔╝█████╗  █████╗                     ║
║  ╚════██║██╔═██╗ ██║██║     ██║            ██║   ██╔══██╗██╔══╝  ██╔══╝                     ║
║  ███████║██║  ██╗██║███████╗███████╗       ██║   ██║  ██║███████╗███████╗                   ║
║  ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝       ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝                   ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetroSkills;