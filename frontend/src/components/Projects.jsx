import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'JARVIS - Personal AI Assistant',
      category: 'AI & Cybersecurity',
      status: 'In Development',
      description: 'Building a local AI assistant inspired by Iron Man\'s JARVIS to understand AI implementation in cybersecurity operations and threat hunting workflows.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Local LLM', 'Cybersecurity APIs'],
      features: [
        'Voice-activated security operations assistant',
        'Threat intelligence analysis and reporting',
        'Automated incident response workflows',
        'Local deployment for data privacy',
        'Integration with SIEM and security tools',
        'Natural language query interface for security data'
      ],
      goals: [
        'Understand AI implementation in cybersecurity',
        'Create intelligent automation for threat hunting',
        'Develop local AI capabilities for sensitive operations',
        'Build voice-controlled security command center'
      ],
      icon: '🤖',
      color: 'purple'
    },
    {
      title: 'Paris 2024 Olympics Security Operations',
      category: 'Critical Infrastructure',
      status: 'Completed',
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
      color: 'yellow'
    },
    {
      title: 'Advanced Threat Hunting Platform',
      category: 'Enterprise Security',
      status: 'Ongoing',
      description: 'Development and optimization of threat hunting workflows using MITRE ATT&CK framework and advanced analytics.',
      technologies: ['SIEM', 'MITRE ATT&CK', 'Python', 'Data Analytics', 'Threat Intelligence'],
      features: [
        'Behavioral pattern analysis for APT detection',
        'MITRE ATT&CK technique mapping',
        'Automated threat hunting workflows',
        'Intelligence-driven security operations',
        'Custom detection rule development'
      ],
      goals: [
        'Proactive threat identification',
        'Reduce mean time to detection',
        'Enhanced security posture',
        'Intelligence-driven defense strategies'
      ],
      icon: '🎯',
      color: 'red'
    },
    {
      title: 'Cloud Security Architecture',
      category: 'Cloud Infrastructure',
      status: 'Ongoing',
      description: 'Design and implementation of scalable cloud security solutions across AWS and Azure environments.',
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Apache NiFi', 'Prometheus', 'RabbitMQ'],
      features: [
        'High-availability Kubernetes clusters',
        'Scalable data integration pipelines',
        'Multi-cloud security monitoring',
        'Automated incident response',
        'Infrastructure as Code (IaC)'
      ],
      goals: [
        'Scalable cloud security architecture',
        'Automated security operations',
        'Multi-cloud threat detection',
        'Infrastructure resilience'
      ],
      icon: '☁️',
      color: 'blue'
    },
    {
      title: 'Cybersecurity Knowledge Base',
      category: 'Knowledge Management',
      status: 'Completed',
      description: 'Development of comprehensive knowledge base for complex cybersecurity issues and solutions, recognized with Bronze Accolade Award.',
      technologies: ['Documentation', 'Knowledge Management', 'Process Optimization', 'Training Materials'],
      features: [
        'Comprehensive security procedures documentation',
        'Complex issue resolution guides',
        'Training materials for security teams',
        'Best practices and methodologies',
        'Incident response playbooks'
      ],
      goals: [
        'Standardize security procedures',
        'Accelerate incident resolution',
        'Knowledge sharing and training',
        'Continuous improvement processes'
      ],
      icon: '📚',
      color: 'green'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-400/30',
        text: 'text-purple-400',
        button: 'bg-purple-500',
        glow: 'shadow-purple-500/20'
      },
      yellow: {
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-400/30',
        text: 'text-yellow-400',
        button: 'bg-yellow-500',
        glow: 'shadow-yellow-500/20'
      },
      red: {
        bg: 'bg-red-500/20',
        border: 'border-red-400/30',
        text: 'text-red-400',
        button: 'bg-red-500',
        glow: 'shadow-red-500/20'
      },
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-400/30',
        text: 'text-blue-400',
        button: 'bg-blue-500',
        glow: 'shadow-blue-500/20'
      },
      green: {
        bg: 'bg-green-500/20',
        border: 'border-green-400/30',
        text: 'text-green-400',
        button: 'bg-green-500',
        glow: 'shadow-green-500/20'
      }
    };
    return colorMap[color] || colorMap.purple;
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-purple-400">projects</span>
              <span className="text-white">.</span>
              <span className="text-green-400">showcase()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Strategic initiatives in cybersecurity, AI development, and critical infrastructure protection
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-purple-400 mb-6">Project Portfolio</h3>
                <div className="space-y-4">
                  {projects.map((project, index) => {
                    const colors = getColorClasses(project.color);
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveProject(index)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          activeProject === index
                            ? `${colors.bg} border-l-4 ${colors.border} text-white`
                            : 'bg-black/20 border-l-4 border-transparent text-gray-400 hover:bg-purple-500/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xl">{project.icon}</span>
                          <span className="font-semibold text-sm">{project.title}</span>
                        </div>
                        <div className={`text-xs ${colors.text}`}>{project.category}</div>
                        <div className="text-xs text-gray-500">{project.status}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-lg p-8">
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
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className={`${colors.text} font-semibold`}>{project.category}</span>
                              <span className="text-gray-400">•</span>
                              <span className={`inline-block ${colors.bg} border ${colors.border} rounded-full px-3 py-1 text-sm ${colors.text} font-medium`}>
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">🛠️ Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 border border-gray-500 rounded-full text-sm text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">✨ Key Features & Achievements</h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 ${colors.button} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-300 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Goals */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">🎯 Project Goals & Impact</h4>
                        <div className="grid gap-3">
                          {project.goals.map((goal, idx) => (
                            <div key={idx} className={`flex items-center space-x-3 p-3 ${colors.bg} border ${colors.border} rounded-lg`}>
                              <div className={`w-3 h-3 ${colors.button} rounded-full flex-shrink-0`}></div>
                              <span className="text-gray-100">{goal}</span>
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
            <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-400">{projects.length}</div>
              <div className="text-gray-400 text-sm">Active Projects</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-400 text-sm">Development Cycle</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-400">∞</div>
              <div className="text-gray-400 text-sm">Learning Curve</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-400">🚀</div>
              <div className="text-gray-400 text-sm">Innovation Level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;