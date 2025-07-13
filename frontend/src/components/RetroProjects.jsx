import React, { useState } from 'react';

const RetroProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  const projects = [
    {
      title: 'AI-Powered Cyber Defense Research',
      category: 'AI & Cybersecurity',
      status: 'RESEARCHING',
      description: 'Exploring the integration of artificial intelligence with cybersecurity operations to enhance threat detection, automate incident response, and develop next-generation defensive capabilities.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Deep Learning', 'Cybersecurity APIs'],
      features: [
        'AI-driven threat pattern recognition',
        'Automated security analysis workflows',
        'Machine learning for anomaly detection',
        'Intelligent security operations enhancement',
        'Research-based cybersecurity AI applications',
        'Advanced threat intelligence correlation'
      ],
      goals: [
        'Master AI implementation in cybersecurity',
        'Develop intelligent threat detection systems',
        'Research automated security response capabilities',
        'Build foundation for next-gen cyber defense'
      ],
      icon: '🛡️',
      color: 'green',
      ascii: `
╔══════════════════════════════════════╗
║   █████╗ ██╗      ██████╗██╗   ██╗   ║
║  ██╔══██╗██║     ██╔════╝╚██╗ ██╔╝   ║
║  ███████║██║     ██║      ╚████╔╝    ║
║  ██╔══██║██║     ██║       ╚██╔╝     ║
║  ██║  ██║██║     ╚██████╗   ██║      ║
║  ╚═╝  ╚═╝╚═╝      ╚═════╝   ╚═╝      ║
╚══════════════════════════════════════╝`
    },
    {
      title: 'ITACHI - Intelligent Task Automation',
      category: 'AI & Automation',
      status: 'PLANNING',
      description: 'ITACHI (Intelligent Task Automation Command & Helper Interface) - A fully automated, voice-activated assistant for everyday PC tasks and advanced actions without physical input.',
      technologies: ['Python', 'Voice Recognition', 'Speech-to-Text', 'Task Automation', 'AI'],
      features: [
        'Fully voice-activated PC control',
        'Automated task execution without physical input',
        'Intelligent command interpretation',
        'System-wide automation capabilities',
        'Voice-controlled file management',
        'Hands-free computing experience'
      ],
      goals: [
        'Achieve complete hands-free PC operation',
        'Develop advanced voice automation system',
        'Create intelligent task interpretation',
        'Build seamless voice-computer interface'
      ],
      icon: '🗣️',
      color: 'cyan',
      ascii: `
╔══════════════════════════════════════╗
║  ██╗████████╗ █████╗  ██████╗██╗  ██╗██╗║
║  ██║╚══██╔══╝██╔══██╗██╔════╝██║  ██║██║║
║  ██║   ██║   ███████║██║     ███████║██║║
║  ██║   ██║   ██╔══██║██║     ██╔══██║██║║
║  ██║   ██║   ██║  ██║╚██████╗██║  ██║██║║
║  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝║
╚══════════════════════════════════════╝`
    },
    {
      title: 'Paris 2024 Olympics Security Operations',
      category: 'Critical Infrastructure',
      status: 'COMPLETED',
      description: 'Led critical log parsing and security monitoring for the Paris 2024 Olympics and Paralympics as part of Atos cybersecurity team.',
      technologies: ['Java', 'Log Processing', 'Real-time Analytics', 'SIEM', 'Critical Infrastructure'],
      features: [
        '99.99% uptime for critical log parsing systems',
        'Real-time log visibility to Security Operations Centre',
        'Java-based connectors and parsers optimization',
        '30% increase in log processing speed',
        'Zero security incidents during Games period'
      ],
      goals: [
        'Ensure seamless Olympic Games security',
        'Maintain critical infrastructure protection',
        'Deliver real-time threat visibility',
        'Support global cybersecurity operations'
      ],
      icon: '🏅',
      color: 'yellow',
      ascii: `
╔══════════════════════════════════════╗
║ ██████╗  █████╗ ██████╗ ██╗███████╗  ║
║ ██╔══██╗██╔══██╗██╔══██╗██║██╔════╝  ║
║ ██████╔╝███████║██████╔╝██║███████╗  ║
║ ██╔═══╝ ██╔══██║██╔══██╗██║╚════██║  ║
║ ██║     ██║  ██║██║  ██║██║███████║  ║
║ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝  ║
║                                      ║
║        ██████╗  ██████╗ ██████╗ ██╗  ║
║        ╚════██╗██╔═████╗╚════██╗██║  ║
║         █████╔╝██║██╔██║ █████╔╝██║  ║
║        ██╔═══╝ ████╔╝██║██╔═══╝ ██║  ║
║        ███████╗╚██████╔╝███████╗██║  ║
║        ╚══════╝ ╚═════╝ ╚══════╝╚═╝  ║
╚══════════════════════════════════════╝`
    },
    {
      title: 'AIsaac SIEM Architecture Mastery',
      category: 'Enterprise Security',
      status: 'ACHIEVED',
      description: 'Mastered the complete architecture of AIsaac proprietary SIEM & SOAR platform, gaining deep understanding of enterprise security monitoring ecosystems.',
      technologies: ['AIsaac SIEM', 'Apache NiFi', 'Custom Connectors', 'DevSecOps', 'Log Processing'],
      features: [
        'End-to-end SIEM architecture comprehension',
        'Custom connector development expertise',
        'Production-scale log ingestion optimization',
        'Real-time threat detection pipelines',
        'Enterprise security data lake management'
      ],
      goals: [
        'Master enterprise SIEM architecture principles',
        'Understand scalable security data processing',
        'Develop expertise in threat detection pipelines',
        'Build foundation for any SIEM platform mastery'
      ],
      icon: '🏗️',
      color: 'purple',
      ascii: `
╔══════════════════════════════════════╗
║   █████╗ ██╗███████╗ █████╗  █████╗  ║
║  ██╔══██╗██║██╔════╝██╔══██╗██╔══██╗ ║
║  ███████║██║███████╗███████║███████║ ║
║  ██╔══██║██║╚════██║██╔══██║██╔══██║ ║
║  ██║  ██║██║███████║██║  ██║██║  ██║ ║
║  ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ║
║                                      ║
║             ██████╗                  ║
║            ██╔════╝                  ║
║            ██║                       ║
║            ██║                       ║
║            ╚██████╗                  ║
║             ╚═════╝                  ║
╚══════════════════════════════════════╝`
    },
    {
      title: 'Data Pipeline Engineering Excellence',
      category: 'Data Architecture',
      status: 'ONGOING',
      description: 'Building sophisticated data engineering skills through Apache NiFi, Java development, and AI integration to revolutionize future cybersecurity capabilities.',
      technologies: ['Apache NiFi', 'Java', 'JSON/XML', 'ETL Tools', 'n8n', 'AI/ML'],
      features: [
        'High-volume data processing pipelines',
        'Complex data transformation workflows',
        'Automated ETL orchestration',
        'AI-driven data processing algorithms',
        'Machine learning foundation for cybersecurity'
      ],
      goals: [
        'Master data engineering for cybersecurity enhancement',
        'Build ML algorithms for threat detection',
        'Develop next-gen security data processing',
        'Create intelligent automation frameworks'
      ],
      icon: '🔧',
      color: 'blue',
      ascii: `
╔══════════════════════════════════════╗
║  ██████╗  █████╗ ████████╗ █████╗    ║
║  ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗   ║
║  ██║  ██║███████║   ██║   ███████║   ║
║  ██║  ██║██╔══██║   ██║   ██╔══██║   ║
║  ██████╔╝██║  ██║   ██║   ██║  ██║   ║
║  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝   ║
╚══════════════════════════════════════╝`
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      green: {
        bg: 'bg-green-500/20',
        border: 'border-green-400/30',
        text: 'text-green-400',
        button: 'bg-green-500',
        glow: 'shadow-green-500/20'
      },
      cyan: {
        bg: 'bg-cyan-500/20',
        border: 'border-cyan-400/30',
        text: 'text-cyan-400',
        button: 'bg-cyan-500',
        glow: 'shadow-cyan-500/20'
      },
      yellow: {
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-400/30',
        text: 'text-yellow-400',
        button: 'bg-yellow-500',
        glow: 'shadow-yellow-500/20'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-400/30',
        text: 'text-purple-400',
        button: 'bg-purple-500',
        glow: 'shadow-purple-500/20'
      },
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-400/30',
        text: 'text-blue-400',
        button: 'bg-blue-500',
        glow: 'shadow-blue-500/20'
      }
    };
    return colorMap[color] || colorMap.green;
  };

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 300);
  };

  return (
    <section id="projects" className="py-24 bg-gray-900 relative retro-section">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Retro Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-purple-400 font-bold retro-label">PROJECT_FILES.dir</span>
            </div>
            <h2 
              className={`text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight retro-title cursor-pointer ${glitchActive ? 'glitch' : ''}`}
              onClick={triggerGlitch}
              data-text="cyber.projects"
            >
              cyber
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 neon-glow">projects.exe</span>
            </h2>
            <div className="w-16 h-1 bg-purple-400 mx-auto neon-glow mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
              Strategic initiatives in cybersecurity, AI development, and critical infrastructure protection
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-black/80 backdrop-blur-sm border-2 border-purple-400/30 rounded-lg p-6 sticky top-8 retro-card">
                <h3 className="text-xl font-bold text-purple-400 mb-6 tracking-wider font-mono">PROJECT.PORTFOLIO</h3>
                <div className="space-y-4">
                  {projects.map((project, index) => {
                    const colors = getColorClasses(project.color);
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveProject(index)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 font-mono ${
                          activeProject === index
                            ? `${colors.bg} border-l-4 ${colors.border} text-white`
                            : 'bg-black/20 border-l-4 border-transparent text-gray-400 hover:bg-purple-500/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xl">{project.icon}</span>
                          <span className="font-semibold text-sm tracking-wider">{project.title}</span>
                        </div>
                        <div className={`text-xs ${colors.text} tracking-wider`}>{project.category}</div>
                        <div className="text-xs text-gray-500 font-mono">[{project.status}]</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <div className="bg-black/80 backdrop-blur-sm border-2 border-purple-400/30 rounded-lg p-8 retro-card">
                {(() => {
                  const project = projects[activeProject];
                  const colors = getColorClasses(project.color);
                  return (
                    <>
                      {/* Header */}
                      <div className="mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-4xl">{project.icon}</span>
                          <div>
                            <h3 className="text-2xl font-bold text-white retro-title font-mono">{project.title}</h3>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className={`${colors.text} font-semibold tracking-wider font-mono`}>{project.category}</span>
                              <span className="text-gray-400">•</span>
                              <span className={`inline-block ${colors.bg} border ${colors.border} rounded-lg px-3 py-1 text-sm ${colors.text} font-medium font-mono tracking-wider`}>
                                [{project.status}]
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed font-mono">{project.description}</p>
                      </div>

                      {/* ASCII Art - Removed due to spelling issues */}
                      <div className="mb-8 hidden">
                        <pre className={`${colors.text} text-xs font-mono opacity-60`}>
                          {project.ascii}
                        </pre>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4 tracking-wider font-mono">🛠️ TECH_STACK.json</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-black to-gray-900 border border-green-400/30 rounded-lg text-sm text-green-400 font-mono retro-tech-tag"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4 tracking-wider font-mono">✨ FEATURES.list</h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 ${colors.button} rounded-full mt-2 flex-shrink-0 neon-glow`}></div>
                              <span className="text-gray-300 leading-relaxed font-mono">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Goals */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 tracking-wider font-mono">🎯 OBJECTIVES.cfg</h4>
                        <div className="grid gap-3">
                          {project.goals.map((goal, idx) => (
                            <div key={idx} className={`flex items-center space-x-3 p-3 ${colors.bg} border ${colors.border} rounded-lg retro-achievement`}>
                              <div className={`w-3 h-3 ${colors.button} rounded-full flex-shrink-0 neon-glow`}></div>
                              <span className="text-gray-100 font-mono">{goal}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black/80 backdrop-blur-sm border-2 border-purple-400/30 rounded-lg p-6 text-center retro-card">
              <div className="text-2xl font-bold text-purple-400 font-mono">{projects.length}</div>
              <div className="text-gray-400 text-sm font-mono">ACTIVE_PROJECTS</div>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border-2 border-cyan-400/30 rounded-lg p-6 text-center retro-card">
              <div className="text-2xl font-bold text-cyan-400 font-mono">24/7</div>
              <div className="text-gray-400 text-sm font-mono">DEV_CYCLE</div>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border-2 border-green-400/30 rounded-lg p-6 text-center retro-card">
              <div className="text-2xl font-bold text-green-400 font-mono">∞</div>
              <div className="text-gray-400 text-sm font-mono">LEARNING_RATE</div>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border-2 border-blue-400/30 rounded-lg p-6 text-center retro-card">
              <div className="text-2xl font-bold text-blue-400 font-mono">🚀</div>
              <div className="text-gray-400 text-sm font-mono">INNOVATION_LVL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetroProjects;