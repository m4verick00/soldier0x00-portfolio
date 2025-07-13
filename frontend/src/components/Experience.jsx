import React, { useState } from 'react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: 'Cyber Threat Hunter',
      company: 'Atos',
      location: 'Bengaluru, IN',
      period: 'April 2022 – Present',
      type: 'Managed Detection & Response - Threat Hunting',
      highlights: [
        'Proactively hunt advanced threats by analyzing behavioral patterns, SIEM logs, and threat intelligence',
        'Analyze emerging APT tactics, malware trends, and attacker behaviors to update detection strategies',
        'Map adversarial techniques to MITRE ATT&CK, designing threat models to prioritize risks',
        'Optimize threat-hunting efficiency by refining detection rules and correlating logs from SIEM/EDR/cloud tools',
        'Collaborate with security teams to share intelligence-driven insights and strengthen detection capabilities'
      ],
      technologies: ['SIEM', 'EDR', 'MITRE ATT&CK', 'Threat Intelligence', 'Log Analysis'],
      achievements: [
        '96% SLA achievement in client case management',
        '99.99% uptime during Paris 2024 Olympics security operations',
        '30% increase in log processing speed optimization'
      ]
    },
    {
      title: 'AIsaac Threat Management & Cloud R&D',
      company: 'Atos',
      location: 'Bengaluru, IN',
      period: 'Specialized Project',
      type: 'Cloud Security & Data Integration',
      highlights: [
        'Utilized Apache NiFi for data integration and managed scalable infrastructure on Azure and AWS',
        'Optimized RabbitMQ for improved throughput and deployed high-availability Kubernetes cluster using EKS',
        'Employed in-house SIEM tools for threat detection handling incidents for EDR, XDR, Firewalls, and Office 365',
        'Conducted cybersecurity research and collaborated with Security Operations teams',
        'Implemented Prometheus for proactive monitoring, incident response, and vulnerability patching'
      ],
      technologies: ['Apache NiFi', 'Azure', 'AWS', 'Kubernetes', 'RabbitMQ', 'Prometheus'],
      achievements: [
        'Successfully deployed HA Kubernetes cluster on AWS EKS',
        'Improved system monitoring with Prometheus implementation',
        'Enhanced data processing pipeline efficiency'
      ]
    },
    {
      title: 'Paris 2024 Olympics Security Specialist',
      company: 'Atos',
      location: 'Paris, France (Remote)',
      period: 'Summer 2024',
      type: 'Critical Infrastructure Protection',
      highlights: [
        'Part of critical task force for Paris 2024 Olympics and Paralympics cybersecurity operations',
        'Ensured uninterrupted log processing and enrichment for the Games',
        'Optimized Java-based connectors/parsers for near real-time log visibility to SOC',
        'Maintained application and system stability for uninterrupted log flow during peak Olympic periods',
        'Delivered secure and seamless Olympic experience as Official Cybersecurity Services Supporter'
      ],
      technologies: ['Java', 'Log Parsing', 'Real-time Analytics', 'SOC Integration', 'Critical Infrastructure'],
      achievements: [
        '99.99% uptime for critical log parsing systems',
        '30% increase in log processing speed',
        'Zero security incidents during Olympic Games period'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400">experience</span>
              <span className="text-white">.</span>
              <span className="text-green-400">timeline()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional journey through cybersecurity operations, threat hunting, and critical infrastructure protection
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-6">Career Path</h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveExperience(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeExperience === index
                          ? 'bg-cyan-500/20 border-l-4 border-cyan-400 text-white'
                          : 'bg-black/20 border-l-4 border-transparent text-gray-400 hover:bg-cyan-500/10 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold">{exp.title}</div>
                      <div className="text-sm text-cyan-400">{exp.company}</div>
                      <div className="text-xs">{exp.period}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-2">
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
                {(() => {
                  const exp = experiences[activeExperience];
                  return (
                    <>
                      {/* Header */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="text-cyan-400 font-semibold">{exp.company}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{exp.location}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-green-400">{exp.period}</span>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-4 py-2">
                          <span className="text-cyan-400 text-sm font-medium">{exp.type}</span>
                        </div>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">🎯 Key Responsibilities</h4>
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">🛠️ Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 border border-gray-500 rounded-full text-sm text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">🏆 Key Achievements</h4>
                        <div className="grid gap-4">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-3 bg-green-500/10 border border-green-400/20 rounded-lg">
                              <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
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

export default Experience;