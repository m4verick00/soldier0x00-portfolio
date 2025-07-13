import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'cybersoldier0x00@protonmail.com',
      description: 'Secure communication',
      color: 'green',
      link: 'mailto:cybersoldier0x00@protonmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect professionally',
      description: 'Career networking',
      color: 'blue',
      link: 'https://linkedin.com/in/sai-harsha-vardhan/'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@soldier0x00',
      description: 'Latest updates and insights',
      color: 'cyan',
      link: 'https://x.com/soldier0x00'
    },
    {
      icon: '📷',
      title: 'Instagram',
      value: '@harsha_soldier0x00',
      description: 'Behind the scenes',
      color: 'pink',
      link: 'https://www.instagram.com/harsha_soldier0x00'
    },
    {
      icon: '📝',
      title: 'Medium',
      value: 'Read my articles',
      description: 'Technical insights',
      color: 'orange',
      link: 'https://soldier0x00.medium.com/'
    },
    {
      icon: '🎯',
      title: 'TryHackMe',
      value: 'soldier0x00',
      description: 'Cybersecurity challenges',
      color: 'purple',
      link: 'https://tryhackme.com/p/soldier0x00'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400">contact</span>
              <span className="text-white">.</span>
              <span className="text-green-400">connect()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's collaborate on cybersecurity projects, share threat intelligence, or discuss the future of AI in security
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const bgColors = {
                green: 'from-green-500/20 to-emerald-500/20 border-green-400/30',
                blue: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
                cyan: 'from-cyan-500/20 to-teal-500/20 border-cyan-400/30',
                pink: 'from-pink-500/20 to-rose-500/20 border-pink-400/30',
                orange: 'from-orange-500/20 to-yellow-500/20 border-orange-400/30',
                purple: 'from-purple-500/20 to-indigo-500/20 border-purple-400/30'
              };

              return (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-gradient-to-br ${bgColors[method.color]} border rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-300 mb-2">{method.value}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;