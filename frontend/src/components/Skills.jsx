import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: 'Technical Arsenal',
      icon: '⚡',
      skills: [
        { name: 'SIEM & SOAR', level: 95, color: 'cyan' },
        { name: 'Log Analysis', level: 90, color: 'green' },
        { name: 'MITRE ATT&CK', level: 88, color: 'blue' },
        { name: 'OSINT', level: 85, color: 'purple' },
        { name: 'Linux Administration', level: 82, color: 'red' },
        { name: 'Cloud Security (AWS/Azure)', level: 80, color: 'yellow' },
        { name: 'Vulnerability Assessment', level: 88, color: 'pink' },
        { name: 'Packet Analysis', level: 85, color: 'indigo' },
      ]
    },
    tools: {
      title: 'Security Tools',
      icon: '🛠️',
      skills: [
        { name: 'ArcSight Logger', level: 95, color: 'cyan' },
        { name: 'Nessus', level: 90, color: 'green' },
        { name: 'Wireshark', level: 88, color: 'blue' },
        { name: 'Nmap', level: 85, color: 'purple' },
        { name: 'OpenVAS', level: 82, color: 'red' },
        { name: 'VMware Workstation', level: 88, color: 'yellow' },
        { name: 'Shodan', level: 80, color: 'pink' },
        { name: 'ServiceNOW', level: 85, color: 'indigo' },
      ]
    },
    frameworks: {
      title: 'Frameworks & Standards',
      icon: '📋',
      skills: [
        { name: 'MITRE ATT&CK', level: 92, color: 'cyan' },
        { name: 'MITRE D3FEND', level: 85, color: 'green' },
        { name: 'NIST Framework', level: 88, color: 'blue' },
        { name: 'CIS Controls', level: 85, color: 'purple' },
        { name: 'ISO 27001', level: 75, color: 'red' },
        { name: 'OWASP', level: 80, color: 'yellow' },
      ]
    },
    ai: {
      title: 'AI & Development',
      icon: '🤖',
      skills: [
        { name: 'Generative AI', level: 75, color: 'cyan' },
        { name: 'Python', level: 80, color: 'green' },
        { name: 'Machine Learning', level: 70, color: 'blue' },
        { name: 'Data Analysis', level: 85, color: 'purple' },
        { name: 'Apache NiFi', level: 78, color: 'red' },
        { name: 'Kubernetes', level: 75, color: 'yellow' },
      ]
    }
  };

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      cyan: type === 'bg' ? 'bg-cyan-500' : type === 'border' ? 'border-cyan-400' : 'text-cyan-400',
      green: type === 'bg' ? 'bg-green-500' : type === 'border' ? 'border-green-400' : 'text-green-400',
      blue: type === 'bg' ? 'bg-blue-500' : type === 'border' ? 'border-blue-400' : 'text-blue-400',
      purple: type === 'bg' ? 'bg-purple-500' : type === 'border' ? 'border-purple-400' : 'text-purple-400',
      red: type === 'bg' ? 'bg-red-500' : type === 'border' ? 'border-red-400' : 'text-red-400',
      yellow: type === 'bg' ? 'bg-yellow-500' : type === 'border' ? 'border-yellow-400' : 'text-yellow-400',
      pink: type === 'bg' ? 'bg-pink-500' : type === 'border' ? 'border-pink-400' : 'text-pink-400',
      indigo: type === 'bg' ? 'bg-indigo-500' : type === 'border' ? 'border-indigo-400' : 'text-indigo-400',
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="skills" className="py-20 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400">skills</span>
              <span className="text-white">.</span>
              <span className="text-green-400">inventory()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive arsenal of cybersecurity tools, frameworks, and emerging technologies
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                  activeCategory === key
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-black/40 backdrop-blur-sm border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {skillCategories[activeCategory].icon} {skillCategories[activeCategory].title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className={`text-sm font-bold ${getColorClasses(skill.color, 'text')}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${getColorClasses(skill.color)} relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-green-400 font-bold mb-2">Threat Hunting</h4>
              <p className="text-gray-400 text-sm">Advanced persistent threat detection and behavioral analysis</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-blue-400 font-bold mb-2">Digital Forensics</h4>
              <p className="text-gray-400 text-sm">Incident investigation and evidence analysis</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="text-purple-400 font-bold mb-2">AI Integration</h4>
              <p className="text-gray-400 text-sm">Building intelligent security automation solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;