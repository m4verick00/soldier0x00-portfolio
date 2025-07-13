import React, { useState } from 'react';

const RetroExperience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: 'Data Integration Specialist',
      company: 'Allure Commerce LLP',
      location: 'Remote',
      period: 'June 2025 – Present',
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
      period: 'April 2022 – June 2025',
      type: 'Managed Detection & Response - Threat Hunting',
      highlights: [
        'Proactively hunted advanced threats by analyzing behavioral patterns, SIEM logs, and threat intelligence to uncover persistence mechanisms, C2 activity, lateral movement, and data exfiltration risks',
        'Analyzed emerging APT tactics, malware trends, and attacker behaviors to update detection strategies and preemptively close security gaps',
        'Mapped adversarial techniques to MITRE ATT&CK, designing threat models to prioritize risks and recommend mitigations that harden organizational defenses',
        'Optimized threat-hunting efficiency by refining detection rules, correlating logs from SIEM/EDR/cloud tools, and streamlining workflows to accelerate incident investigations',
        'Collaborated with security teams to share intelligence-driven insights, strengthen detection capabilities, and improve organization resilience against evolving threats'
      ],
      technologies: ['SIEM', 'EDR', 'MITRE ATT&CK', 'Threat Intelligence', 'Log Analysis', 'APT Detection'],
      achievements: [
        '96% SLA achievement in client case management',
        '99.99% uptime during Paris 2024 Olympics security operations',
        '30% increase in log processing speed optimization'
      ]
    },
    {
      title: 'DevSecOps Engineer - AIsaac SIEM & SOAR',
      company: 'Atos',
      location: 'Bengaluru, IN', 
      period: 'AIsaac Threat Management & Cloud R&D',
      type: 'SIEM Architecture & Production Operations',
      highlights: [
        'Architected and maintained backend infrastructure for AIsaac proprietary SIEM & SOAR platform',
        'Utilized Apache NiFi for data integration, managed scalable infrastructure on Azure and AWS, optimized RabbitMQ for improved throughput',
        'Deployed high-availability Kubernetes cluster on AWS using EKS for enterprise-scale security operations',
        'Employed in-house SIEM tools for threat detection and log analysis, handling incidents for diverse devices including EDR, XDR, Firewalls, and Office 365 services',
        'Managed client cases on Wrike and ServiceNOW, achieving 96% SLA, and created KBS articles for complex issues',
        'Demonstrated expertise in troubleshooting system fundamentals while implementing Prometheus for proactive monitoring, incident response, and vulnerability patching'
      ],
      technologies: ['AIsaac SIEM', 'Apache NiFi', 'Kubernetes', 'AWS', 'Azure', 'RabbitMQ', 'Prometheus', 'DevSecOps'],
      achievements: [
        'Designed end-to-end SIEM architecture understanding applicable to any enterprise security platform',
        'Optimized log processing throughput by 40% through custom connector development',
        'Gained comprehensive understanding of SIEM data flows and threat detection pipelines'
      ]
    },
    {
      title: 'AIsaac Threat Management (Connector Engineering)',
      company: 'Atos',
      location: 'Bengaluru, IN',
      period: 'Paris 2024 Olympics Project Team',
      type: 'Critical Infrastructure & Log Processing Engineering',
      highlights: [
        'Selected as part of elite 7-member AIsaac Threat Management (Connector Engineering) team supporting Paris 2024 Olympics cybersecurity operations',
        'Engineered and optimized Java-based connectors and log parsers for critical infrastructure protection during the Olympic Games',
        'Handled complex log parsing workflows ensuring uninterrupted data flow and real-time visibility to Security Operations Centre',
        'Contributed to Atos role as Official Cybersecurity Services and Operations Supporter for Paris 2024 Olympics and Paralympics',
        'Optimized application performance and implemented enhancements resulting in 30% increase in log processing speed',
        'Maintained 99.99% uptime for critical log parsing systems during peak Olympic event periods, ensuring zero security incidents'
      ],
      technologies: ['Java', 'Log Processing', 'AIsaac Connectors', 'Real-time Analytics', 'Application Optimization', 'Critical Infrastructure'],
      achievements: [
        '99.99% uptime for critical log parsing systems during Olympic Games',
        '30% increase in log processing speed through optimization',
        'Zero security incidents during Olympic Games period',
        'Part of elite 7-member engineering team for global-scale cybersecurity operations'
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