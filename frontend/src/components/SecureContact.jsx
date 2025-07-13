import React, { useState, useEffect } from 'react';
import { sanitizeText, sanitizeEmail, contactFormLimiter, sanitizeErrorMessage } from '../utils/security';

const SecureContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [rateLimitWarning, setRateLimitWarning] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Apply appropriate sanitization based on field type
    let sanitizedValue = value;
    if (name === 'email') {
      sanitizedValue = sanitizeEmail(value);
    } else if (name === 'name') {
      sanitizedValue = sanitizeText(value, 100);
    } else if (name === 'subject') {
      sanitizedValue = sanitizeText(value, 200);
    } else if (name === 'message') {
      sanitizedValue = sanitizeText(value, 2000);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.name.trim() || formData.name.length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email.trim() || !sanitizeEmail(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.subject.trim()) {
      errors.push('Please select a subject');
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting check
    const clientId = 'contact_form'; // In production, use IP or session ID
    if (!contactFormLimiter.isAllowed(clientId)) {
      const remainingTime = Math.ceil(contactFormLimiter.getRemainingTime(clientId) / 1000 / 60);
      setRateLimitWarning(`Too many attempts. Please wait ${remainingTime} minutes before trying again.`);
      return;
    }
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setSubmitStatus('error');
      setSubmitMessage(validationErrors.join('. '));
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitMessage('');
    setRateLimitWarning('');
    
    try {
      // Prepare sanitized form data
      const sanitizedData = {
        name: sanitizeText(formData.name, 100),
        email: sanitizeEmail(formData.email),
        subject: sanitizeText(formData.subject, 200),
        message: sanitizeText(formData.message, 2000),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent.slice(0, 200) // Limited user agent for security
      };

      // For Netlify deployment, use Netlify Forms
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'secure-contact');
      Object.keys(sanitizedData).forEach(key => {
        netlifyFormData.append(key, sanitizedData[key]);
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage("Secure message transmitted successfully! I'll respond within 24-48 hours through encrypted channels.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
      
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setSubmitMessage(sanitizeErrorMessage(error.message));
    } finally {
      setIsSubmitting(false);
      
      // Clear messages after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
        setSubmitMessage('');
        setRateLimitWarning('');
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Secure Email',
      value: 'cybersoldier0x00@protonmail.com',
      description: 'Encrypted communication channel',
      color: 'cyan'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Professional Network',
      description: 'Career connections & endorsements',
      color: 'blue',
      link: 'https://linkedin.com/in/sai-harsha-vardhan/'
    },
    {
      icon: '🎯',
      title: 'TryHackMe',
      value: 'Cyber Training',
      description: 'Hands-on security challenges',
      color: 'purple',
      link: 'https://tryhackme.com/p/soldier0x00'
    },
    {
      icon: '📝',
      title: 'Medium',
      value: 'soldier0x00.medium.com',
      description: 'Technical articles & insights',
      color: 'green',
      link: 'https://soldier0x00.medium.com/'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-400/30', text: 'text-cyan-400' },
      blue: { bg: 'bg-blue-500/20', border: 'border-blue-400/30', text: 'text-blue-400' },
      purple: { bg: 'bg-purple-500/20', border: 'border-purple-400/30', text: 'text-purple-400' },
      green: { bg: 'bg-green-500/20', border: 'border-green-400/30', text: 'text-green-400' }
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative retro-section">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-cyan-400 font-bold retro-label">COMMUNICATION.protocol</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight retro-title">
              secure
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 neon-glow">contact.exe</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto neon-glow mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
              Encrypted collaboration channels for cybersecurity projects, threat intelligence sharing, and AI security discussions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Secure Contact Form */}
            <div className="bg-black/80 backdrop-blur-sm border-2 border-cyan-400/30 rounded-lg p-8 retro-card">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono tracking-wider">SECURE_TRANSMISSION</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border-2 border-green-400/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400 text-xl">🔒</span>
                    <span className="text-green-400 font-medium font-mono">{submitMessage}</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border-2 border-red-400/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-red-400 text-xl">⚠️</span>
                    <span className="text-red-400 font-medium font-mono">{submitMessage}</span>
                  </div>
                </div>
              )}

              {rateLimitWarning && (
                <div className="bg-yellow-500/20 border-2 border-yellow-400/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-400 text-xl">🛡️</span>
                    <span className="text-yellow-400 font-medium font-mono">{rateLimitWarning}</span>
                  </div>
                </div>
              )}

              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="secure-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Security Fields */}
                <input type="hidden" name="form-name" value="secure-contact" />
                <input type="hidden" name="bot-field" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">IDENTITY</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-black/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">SECURE_CHANNEL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      maxLength={254}
                      className="w-full px-4 py-3 bg-black/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">TRANSMISSION_TYPE</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                  >
                    <option value="">Select mission type</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="consultation">Security Consultation</option>
                    <option value="threat-intel">Threat Intelligence Sharing</option>
                    <option value="ai-security">AI in Cybersecurity</option>
                    <option value="data-engineering">Data Engineering</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">ENCRYPTED_PAYLOAD</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={2000}
                    className="w-full px-4 py-3 bg-black/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none font-mono"
                    placeholder="Your secure message..."
                  />
                  <div className="text-xs text-gray-500 mt-1 font-mono">
                    {formData.message.length}/2000 characters
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 text-black font-bold py-3 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed font-mono tracking-wider"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>ENCRYPTING...</span>
                    </div>
                  ) : (
                    '🔒 TRANSMIT_SECURE'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono tracking-wider">COMMUNICATION_CHANNELS</h3>
              
              {contactMethods.map((method, index) => {
                const colors = getColorClasses(method.color);
                return (
                  <div
                    key={index}
                    className={`group bg-black/80 backdrop-blur-sm border-2 ${colors.border} rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer retro-card`}
                    onClick={() => {
                      if (method.link) {
                        window.open(method.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${colors.bg} ${colors.border} border-2 rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1 font-mono">{method.title}</h4>
                        <p className={`${colors.text} font-medium mb-2 font-mono`}>
                          {method.value}
                        </p>
                        <p className="text-gray-400 text-sm font-mono">{method.description}</p>
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
              
              {/* Security Notice */}
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-2 border-green-400/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2 font-mono">🔒 SECURITY_PROTOCOL</h4>
                <p className="text-gray-300 text-sm font-mono">
                  All communications are secured with industry-standard encryption. 
                  Response time: 24-48 hours. For urgent security matters, mark as "PRIORITY" in subject.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureContact;