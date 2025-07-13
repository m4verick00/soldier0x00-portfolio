import React from 'react';

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

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-400/30', text: 'text-cyan-400', button: 'bg-cyan-500' },
      blue: { bg: 'bg-blue-500/20', border: 'border-blue-400/30', text: 'text-blue-400', button: 'bg-blue-500' },
      purple: { bg: 'bg-purple-500/20', border: 'border-purple-400/30', text: 'text-purple-400', button: 'bg-purple-500' },
      green: { bg: 'bg-green-500/20', border: 'border-green-400/30', text: 'text-green-400', button: 'bg-green-500' }
    };
    return colorMap[color] || colorMap.cyan;
  };

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

          <div className="grid lg:grid-cols-1 gap-12">
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
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400 text-xl">✅</span>
                    <span className="text-green-400 font-medium">{submitMessage}</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-red-400 text-xl">❌</span>
                    <span className="text-red-400 font-medium">{submitMessage}</span>
                  </div>
                </div>
              )}

              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden field for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot field for spam protection */}
                <input type="hidden" name="bot-field" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="consultation">Security Consultation</option>
                    <option value="threat-intel">Threat Intelligence Sharing</option>
                    <option value="ai-security">AI in Cybersecurity</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              {contactMethods.map((method, index) => {
                const colors = getColorClasses(method.color);
                return (
                  <div
                    key={index}
                    className={`group bg-black/40 backdrop-blur-sm border ${colors.border} rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${colors.bg} ${colors.border} border rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{method.title}</h4>
                        <p className={`${colors.text} font-medium mb-2`}>
                          {method.link ? (
                            <a
                              href={method.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {method.value}
                            </a>
                          ) : (
                            method.value
                          )}
                        </p>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                      </div>
                      {method.link && (
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              
              {/* Response Time */}
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">📬 Response Time</h4>
                <p className="text-gray-300 text-sm">
                  I typically respond within 24-48 hours. For urgent security matters, 
                  please include "URGENT" in the subject line.
                </p>
              </div>
              
              {/* Security Note */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">🔒 Security Notice</h4>
                <p className="text-gray-300 text-sm">
                  For sensitive security discussions or vulnerability reports, 
                  please use encrypted communication channels or mention the need for secure comms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;