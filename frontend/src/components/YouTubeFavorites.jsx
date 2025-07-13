import React, { useState } from 'react';

const YouTubeFavorites = () => {
  const [activeCategory, setActiveCategory] = useState('forensics');

  const youtubeChannels = {
    forensics: {
      title: 'Digital Forensics & Incident Response',
      icon: '🔍',
      color: 'cyan',
      channels: [
        {
          name: '13Cubed',
          url: 'https://www.youtube.com/@13Cubed',
          description: 'Digital forensics, incident response, and cybersecurity tutorials',
          specialties: ['Digital Forensics', 'DFIR', 'Incident Response', 'Tools & Techniques']
        },
        {
          name: 'DFIR Science',
          url: 'https://www.youtube.com/@DFIRScience',
          description: 'Scientific approach to digital forensics and incident response',
          specialties: ['Forensic Analysis', 'Research', 'Methodology', 'Case Studies']
        }
      ]
    },
    pentesting: {
      title: 'Penetration Testing & Ethical Hacking',
      icon: '⚔️',
      color: 'red',
      channels: [
        {
          name: 'c0nd4',
          url: 'https://www.youtube.com/@c0nd4',
          description: 'Advanced penetration testing and exploitation techniques',
          specialties: ['Penetration Testing', 'Exploitation', 'Red Team', 'Advanced Techniques']
        },
        {
          name: 'DarkSec',
          url: 'https://www.youtube.com/@DarkSec',
          description: 'Ethical hacking, penetration testing, and cybersecurity content',
          specialties: ['Ethical Hacking', 'Security Testing', 'Vulnerability Assessment']
        },
        {
          name: 'HackerSploit',
          url: 'https://www.youtube.com/@HackerSploit',
          description: 'Penetration testing tutorials and cybersecurity education',
          specialties: ['Penetration Testing', 'Kali Linux', 'Security Tools', 'Tutorials']
        },
        {
          name: 'NullByte',
          url: 'https://www.youtube.com/@NullByteWHT',
          description: 'White hat hacking tutorials and cybersecurity research',
          specialties: ['White Hat Hacking', 'Security Research', 'Tutorials', 'Tools']
        },
        {
          name: 'Rana Khalil',
          url: 'https://www.youtube.com/@RanaKhalil101',
          description: 'Bug bounty hunting and web application security',
          specialties: ['Bug Bounty', 'Web Security', 'OWASP', 'Application Testing']
        }
      ]
    },
    malware: {
      title: 'Malware Analysis',
      icon: '🦠',
      color: 'purple',
      channels: [
        {
          name: 'Malware Analysis For Hedgehogs',
          url: 'https://www.youtube.com/@MalwareAnalysisForHedgehogs',
          description: 'In-depth malware analysis and reverse engineering tutorials',
          specialties: ['Malware Analysis', 'Reverse Engineering', 'Static Analysis', 'Dynamic Analysis']
        }
      ]
    },
    education: {
      title: 'Education & Training',
      icon: '📚',
      color: 'green',
      channels: [
        {
          name: 'Computerphile',
          url: 'https://www.youtube.com/@Computerphile',
          description: 'Computer science concepts and cybersecurity fundamentals',
          specialties: ['Computer Science', 'Security Concepts', 'Theory', 'Fundamentals']
        },
        {
          name: 'CS50',
          url: 'https://www.youtube.com/@cs50',
          description: 'Harvard\'s computer science course and programming fundamentals',
          specialties: ['Computer Science', 'Programming', 'Algorithms', 'Data Structures']
        },
        {
          name: 'FreeCodeCamp',
          url: 'https://www.youtube.com/@freecodecamp',
          description: 'Programming tutorials and full-stack development courses',
          specialties: ['Programming', 'Web Development', 'Full-Stack', 'Coding Tutorials']
        },
        {
          name: 'Professor Messer',
          url: 'https://www.youtube.com/@professormesser',
          description: 'CompTIA certification training and cybersecurity education',
          specialties: ['CompTIA', 'Security+', 'Network+', 'Certification Prep']
        }
      ]
    },
    general: {
      title: 'General Cybersecurity',
      icon: '🛡️',
      color: 'blue',
      channels: [
        {
          name: 'Cybersecurity Meg',
          url: 'https://www.youtube.com/@CybersecurityMeg',
          description: 'Cybersecurity career advice and industry insights',
          specialties: ['Career Guidance', 'Industry Insights', 'Professional Development']
        }
      ]
    },
    specialized: {
      title: 'Specialized Security',
      icon: '🚗',
      color: 'yellow',
      channels: [
        {
          name: 'Automotive Security Research',
          url: 'https://www.youtube.com/@automotivesecurityresearch1613',
          description: 'Automotive cybersecurity and IoT device security research',
          specialties: ['Automotive Security', 'IoT Security', 'Embedded Systems', 'Vehicle Hacking']
        }
      ]
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: {
        bg: 'bg-cyan-500/20',
        border: 'border-cyan-400/30',
        text: 'text-cyan-400',
        button: 'bg-cyan-500',
        hover: 'hover:bg-cyan-400/10'
      },
      red: {
        bg: 'bg-red-500/20',
        border: 'border-red-400/30',
        text: 'text-red-400',
        button: 'bg-red-500',
        hover: 'hover:bg-red-400/10'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-400/30',
        text: 'text-purple-400',
        button: 'bg-purple-500',
        hover: 'hover:bg-purple-400/10'
      },
      green: {
        bg: 'bg-green-500/20',
        border: 'border-green-400/30',
        text: 'text-green-400',
        button: 'bg-green-500',
        hover: 'hover:bg-green-400/10'
      },
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-400/30',
        text: 'text-blue-400',
        button: 'bg-blue-500',
        hover: 'hover:bg-blue-400/10'
      },
      yellow: {
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-400/30',
        text: 'text-yellow-400',
        button: 'bg-yellow-500',
        hover: 'hover:bg-yellow-400/10'
      }
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="youtube" className="py-20 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-red-400">youtube</span>
              <span className="text-white">.</span>
              <span className="text-green-400">favorites()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Curated collection of cybersecurity channels organized by specialization and expertise
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(youtubeChannels).map(([key, category]) => {
              const colors = getColorClasses(category.color);
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                    activeCategory === key
                      ? `${colors.button} text-black shadow-lg`
                      : `bg-black/40 backdrop-blur-sm border ${colors.border} ${colors.text} ${colors.hover}`
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Channels Grid */}
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {youtubeChannels[activeCategory].icon} {youtubeChannels[activeCategory].title}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeChannels[activeCategory].channels.map((channel, index) => {
                const colors = getColorClasses(youtubeChannels[activeCategory].color);
                return (
                  <div
                    key={index}
                    className={`group bg-black/60 backdrop-blur-sm border ${colors.border} rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${youtubeChannels[activeCategory].color}-500/20`}
                  >
                    {/* Channel Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h4 className={`text-lg font-bold ${colors.text}`}>{channel.name}</h4>
                      <div className="text-2xl">📺</div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {channel.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {channel.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 ${colors.bg} ${colors.border} border rounded-full text-xs ${colors.text} font-medium`}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Visit Button */}
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 ${colors.button} text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group-hover:shadow-lg`}
                    >
                      <span>Visit Channel</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-red-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-red-400">
                {Object.values(youtubeChannels).reduce((total, category) => total + category.channels.length, 0)}
              </div>
              <div className="text-gray-400 text-sm">Total Channels</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-400">{Object.keys(youtubeChannels).length}</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-400">∞</div>
              <div className="text-gray-400 text-sm">Learning Hours</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400 text-sm">Knowledge Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeFavorites;