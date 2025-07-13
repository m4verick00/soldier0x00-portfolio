import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400">about</span>
              <span className="text-white">.</span>
              <span className="text-green-400">execute()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <div className="space-y-6">
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Threat Hunter & Cybersecurity Professional</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Currently working as a Cyber Threat Hunter at Atos, where I proactively hunt advanced threats by analyzing behavioral patterns, 
                  SIEM logs, and threat intelligence to uncover persistence mechanisms, C2 activity, and lateral movement.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With expertise in threat hunting, SOC operations, and digital forensics, I specialize in mapping adversarial techniques 
                  to MITRE ATT&CK framework and designing threat models to prioritize risks and recommend mitigations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently building my own AI assistant (JARVIS-style) to understand how AI can be implemented in cybersecurity operations 
                  and threat hunting workflows.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">96%</div>
                  <div className="text-gray-400 text-sm">SLA Achievement</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">99.99%</div>
                  <div className="text-gray-400 text-sm">Uptime (Olympics)</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">30%</div>
                  <div className="text-gray-400 text-sm">Performance Boost</div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-6">
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  🎓 Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-green-400 pl-4">
                    <h4 className="font-semibold text-white">MBA in Information Technology Management</h4>
                    <p className="text-gray-400">Jain University, Bengaluru</p>
                    <p className="text-green-400 text-sm">CGPA: 8.2</p>
                  </div>
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h4 className="font-semibold text-white">B.Sc Computer Science & Electronics</h4>
                    <p className="text-gray-400">Sri Krishnadevaraya University, Anantapur</p>
                    <p className="text-blue-400 text-sm">CGPA: 6.8</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  🏆 Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white">Certified Ethical Hacker (CEH)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">Computer Hacking Forensic Investigator (CHFI)</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
                  🏅 Recognition
                </h3>
                <div className="border-l-2 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-white">Bronze Accolade Winner Q1 2024</h4>
                  <p className="text-gray-400 text-sm">Knowledge base development & innovative problem-solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;