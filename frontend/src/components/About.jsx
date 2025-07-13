import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative retro-section">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-green-500/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Retro Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-cyan-400 font-bold retro-label">NEURAL_PROFILE.sys</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight retro-title">
              cyber
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 neon-glow">guardian.exe</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto neon-glow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Info */}
            <div className="space-y-8">
              <div className="bg-black/80 backdrop-blur-sm border-2 border-green-400/30 rounded-lg p-8 retro-card">
                <h3 className="text-2xl font-bold text-green-400 mb-6 tracking-wider font-mono">Threat Hunter & Cybersecurity Professional</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed font-mono">
                  <p>
                    Currently serving as a Data Integration Specialist, engineering robust ETL pipelines, optimizing data processing workflows, 
                    and developing machine learning algorithms to enhance system performance and automation capabilities.
                  </p>
                  <p>
                    Previously operated as a Cyber Threat Hunter at Atos, proactively hunting advanced threats by analyzing behavioral patterns, 
                    SIEM logs, and threat intelligence to uncover persistence mechanisms, C2 activity, and lateral movement.
                  </p>
                  <p>
                    Passionate about integrating AI and machine learning into cybersecurity operations to revolutionize threat detection, 
                    incident response, and defensive strategies for next-generation security operations.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/60 border-2 border-green-400/30 rounded-lg p-6 text-center retro-card hover:border-green-400/50 transition-all">
                  <div className="text-3xl font-bold text-green-400 neon-glow font-mono">3.7+</div>
                  <div className="text-gray-400 text-sm font-mono tracking-wider">YEARS_EXPERIENCE</div>
                </div>
                <div className="bg-black/60 border-2 border-cyan-400/30 rounded-lg p-6 text-center retro-card hover:border-cyan-400/50 transition-all">
                  <div className="text-3xl font-bold text-cyan-400 neon-glow font-mono">96%</div>
                  <div className="text-gray-400 text-sm font-mono tracking-wider">SLA_ACHIEVEMENT</div>
                </div>
                <div className="bg-black/60 border-2 border-yellow-400/30 rounded-lg p-6 text-center retro-card hover:border-yellow-400/50 transition-all">
                  <div className="text-3xl font-bold text-yellow-400 neon-glow font-mono">99.99%</div>
                  <div className="text-gray-400 text-sm font-mono tracking-wider">OLYMPICS_UPTIME</div>
                </div>
                <div className="bg-black/60 border-2 border-purple-400/30 rounded-lg p-6 text-center retro-card hover:border-purple-400/50 transition-all">
                  <div className="text-3xl font-bold text-purple-400 neon-glow font-mono">30%</div>
                  <div className="text-gray-400 text-sm font-mono tracking-wider">PERFORMANCE_BOOST</div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              <div className="bg-black/80 backdrop-blur-sm border-2 border-green-400/30 rounded-lg p-8 retro-card">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center tracking-wider font-mono">
                  🎓 ACADEMIC_PROTOCOLS.dat
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-semibold text-white font-mono">Master of Business Administration</h4>
                    <p className="text-gray-400 font-mono">Information Technology Management</p>
                    <p className="text-green-400 text-sm font-mono">Jain University, Bengaluru</p>
                  </div>
                  <div className="border-l-4 border-cyan-400 pl-6">
                    <h4 className="font-semibold text-white font-mono">Bachelor in Computer Science</h4>
                    <p className="text-gray-400 font-mono">Computer Science & Electronics</p>
                    <p className="text-cyan-400 text-sm font-mono">Sri Krishnadevaraya University</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border-2 border-cyan-400/30 rounded-lg p-8 retro-card">
                <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center tracking-wider font-mono">
                  🏆 CERTIFICATION_STACK.dll
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full neon-glow"></div>
                    <span className="text-white font-mono">Certified Ethical Hacker (CEH)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full neon-glow"></div>
                    <span className="text-white font-mono">Computer Hacking Forensic Investigator (CHFI)</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border-2 border-yellow-400/30 rounded-lg p-8 retro-card">
                <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center tracking-wider font-mono">
                  🏅 RECOGNITION_LOG.sys
                </h3>
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h4 className="font-semibold text-white font-mono">Bronze Accolade Winner Q1 2024</h4>
                  <p className="text-gray-400 text-sm font-mono">Knowledge base development & innovative problem-solving</p>
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