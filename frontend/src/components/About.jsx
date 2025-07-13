import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - CRED Inspired */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">About</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              not everyone gets
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">cybersecurity</span>
            </h2>
            <div className="w-16 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-6">Threat Hunter & Cybersecurity Professional</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Currently working as a Data Integration Specialist, where I leverage middleware technologies and data pipeline engineering 
                    to enhance cybersecurity operations and threat intelligence capabilities.
                  </p>
                  <p>
                    Previously served as a Cyber Threat Hunter at Atos, where I proactively hunted advanced threats by analyzing behavioral patterns, 
                    SIEM logs, and threat intelligence to uncover persistence mechanisms, C2 activity, and lateral movement.
                  </p>
                  <p>
                    Currently building The Autonomous Guardian (TAG) for cybersecurity automation and ITACHI for intelligent voice-controlled 
                    task automation, exploring how AI can revolutionize both security operations and everyday computing.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-black">3+</div>
                  <div className="text-gray-500 text-sm">Years Experience</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-black">96%</div>
                  <div className="text-gray-500 text-sm">SLA Achievement</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-black">99.99%</div>
                  <div className="text-gray-500 text-sm">Uptime (Olympics)</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-black">30%</div>
                  <div className="text-gray-500 text-sm">Performance Boost</div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                  🎓 Education
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-black pl-6">
                    <h4 className="font-semibold text-black">MBA in Information Technology Management</h4>
                    <p className="text-gray-600">Jain University, Bengaluru</p>
                    <p className="text-black text-sm font-medium">CGPA: 8.2</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="font-semibold text-black">B.Sc Computer Science & Electronics</h4>
                    <p className="text-gray-600">Sri Krishnadevaraya University, Anantapur</p>
                    <p className="text-gray-600 text-sm font-medium">CGPA: 6.8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                  🏆 Certifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <span className="text-black font-medium">Certified Ethical Hacker (CEH)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-black font-medium">Computer Hacking Forensic Investigator (CHFI)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                  🏅 Recognition
                </h3>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="font-semibold text-black">Bronze Accolade Winner Q1 2024</h4>
                  <p className="text-gray-600 text-sm">Knowledge base development & innovative problem-solving</p>
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