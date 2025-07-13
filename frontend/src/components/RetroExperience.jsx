import React, { useState } from 'react';

const RetroExperience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: 'Data Integration Specialist',
      company: 'Allure Commerce LLP',
      location: 'Remote/Hybrid',
      period: 'Present',
      type: 'Data Architecture & AI Development',
      highlights: [
        'Engineer sophisticated data pipelines using Apache NiFi for high-volume data processing and transformation',
        'Develop custom Java applications for complex JSON/XML parsing and data structure optimization',
        'Build automated ETL workflows and implement n8n automation for seamless data orchestration',
        'Design and optimize data collection, parsing, and filtering algorithms for enhanced machine learning capabilities',
        'Research and develop AI-driven data processing solutions to advance future cybersecurity detection systems',
        'Master data handling techniques that form the foundation for advanced threat detection algorithms'
      ],
      technologies: ['Apache NiFi', 'Java', 'JSON/XML', 'ETL Tools', 'n8n', 'AI/ML', 'Data Architecture'],
      achievements: [
        'Architected scalable data pipelines processing millions of records daily',
        'Developed custom connectors and parsers for complex data transformation workflows',
        'Built foundation skills in data engineering crucial for next-gen cybersecurity AI systems'
      ]
    },
    {
      title: 'Cyber Threat Hunter',
      company: 'Atos',
      location: 'Bengaluru, IN',
      period: 'Threat Hunting Team',
      type: 'Advanced Threat Detection & Analytics',
      highlights: [
        'Executed advanced threat hunting operations across diverse security models and attack vectors',
        'Analyzed complex security events from Firewalls, VPN, O365, IDS/IPS, and malicious URL detection systems',
        'Investigated DNS-DGA (Domain Generation Algorithm) patterns and conducted deep audit log analysis',
        'Developed custom hunting queries and detection logic for emerging threat patterns',
        'Collaborated with SOC teams to enhance threat detection capabilities and reduce false positives',
        'Specialized in behavioral analysis of advanced persistent threats and lateral movement detection'
      ],
      technologies: ['Threat Hunting', 'Firewall Analysis', 'VPN Security', 'O365 Security', 'IDS/IPS', 'DNS-DGA', 'Audit Logs'],
      achievements: [
        'Successfully detected and mitigated multiple APT campaigns using advanced hunting techniques',
        'Reduced mean time to detection (MTTD) through optimized hunting workflows',
        'Contributed to threat intelligence feeds with actionable indicators of compromise (IoCs)'
      ]
    },
    {
      title: 'Operations Engineer - AIsaac SIEM & SOAR',
      company: 'Atos DevSecOps Team',
      location: 'Bengaluru, IN', 
      period: 'Production Support L3',
      type: 'SIEM Architecture & Data Engineering',
      highlights: [
        'Architected and maintained backend infrastructure for AIsaac proprietary SIEM & SOAR platform',
        'Engineered Apache NiFi deployments for massive-scale log ingestion from diverse security sources',
        'Developed custom connectors and parsers for CrowdStrike, networking devices, routers, switches, and cloud endpoints',
        'Designed data transformation pipelines ensuring seamless log parsing and enrichment for threat intelligence',
        'Managed production servers supporting real-time security analytics, threat hunting, and security data lake operations',
        'Mastered end-to-end SIEM architecture understanding how enterprise security monitoring ecosystems function'
      ],
      technologies: ['AIsaac SIEM', 'Apache NiFi', 'Custom Connectors', 'CrowdStrike', 'Network Security', 'Cloud Security', 'DevSecOps'],
      achievements: [
        'Achieved 99.99% uptime for critical log ingestion infrastructure during Paris 2024 Olympics',
        'Optimized log processing throughput by 40% through custom connector development',
        'Gained comprehensive understanding of SIEM architecture applicable to any enterprise security platform'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black relative retro-section">
      {/* Retro Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Retro Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-green-400 font-bold retro-label">NEURAL_HISTORY.log</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight retro-title">
              career
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 neon-glow">evolution.exe</span>
            </h2>
            <div className="w-16 h-1 bg-green-400 mx-auto neon-glow"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-black/80 backdrop-blur-sm border-2 border-green-400/30 rounded-lg p-6 sticky top-8 retro-card">
                <h3 className="text-xl font-bold text-green-400 mb-6 tracking-wider">CAREER.PATH</h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveExperience(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 retro-nav-item ${
                        activeExperience === index
                          ? 'bg-green-500/20 border-l-4 border-green-400 text-white'
                          : 'bg-black/20 border-l-4 border-transparent text-gray-400 hover:bg-green-500/10 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold tracking-wider text-sm">{exp.title}</div>
                      <div className="text-green-400 text-xs">{exp.company}</div>
                      <div className="text-xs">{exp.period}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-2">
              <div className="bg-black/80 backdrop-blur-sm border-2 border-green-400/30 rounded-lg p-8 retro-card">
                {(() => {
                  const exp = experiences[activeExperience];
                  return (
                    <>
                      {/* Header */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2 retro-title">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="text-green-400 font-semibold tracking-wider">{exp.company}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{exp.location}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-cyan-400 tracking-wider">{exp.period}</span>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 rounded-lg px-4 py-2">
                          <span className="text-green-400 text-sm font-medium tracking-wider">{exp.type}</span>
                        </div>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4 tracking-wider">🎯 CORE_FUNCTIONS.dll</h4>
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0 neon-glow"></div>
                              <span className="text-gray-300 leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4 tracking-wider">🛠️ TECH_STACK.sys</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-black to-gray-900 border border-green-400/30 rounded-lg text-sm text-green-400 retro-tech-tag"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 tracking-wider">🏆 ACHIEVEMENTS.log</h4>
                        <div className="grid gap-4">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-3 bg-green-500/10 border border-green-400/20 rounded-lg retro-achievement">
                              <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 neon-glow"></div>
                              <span className="text-green-100">{achievement}</span>
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
        </div>
      </div>
    </section>
  );
};

export default RetroExperience;