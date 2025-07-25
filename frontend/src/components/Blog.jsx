import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setNewsletterStatus('');
    setNewsletterMessage('');
    
    try {
      // For Netlify deployment, use Netlify Forms
      const formData = new FormData();
      formData.append('form-name', 'newsletter');
      formData.append('email', newsletterEmail);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterMessage('Successfully subscribed! You\'ll receive updates about new cybersecurity articles and insights.');
        setNewsletterEmail('');
      } else {
        throw new Error('Newsletter subscription failed');
      }
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setNewsletterStatus('');
        setNewsletterMessage('');
      }, 5000);
      
    } catch (error) {
      setNewsletterStatus('error');
      setNewsletterMessage('Failed to subscribe. Please try again later.');
      
      // Clear error after 5 seconds
      setTimeout(() => {
        setNewsletterStatus('');
        setNewsletterMessage('');
      }, 5000);
    } finally {
      setIsSubscribing(false);
    }
  };

  // Mock blog posts - in real implementation, these would come from Medium API or RSS feed
  const blogPosts = [
    {
      title: 'Advanced Threat Hunting: Beyond Traditional SIEM',
      excerpt: 'Exploring next-generation threat hunting techniques using behavioral analytics and machine learning to detect sophisticated adversaries.',
      tags: ['Threat Hunting', 'SIEM', 'Machine Learning', 'APT'],
      status: 'coming-soon',
      category: 'Threat Hunting'
    },
    {
      title: 'Autonomous AI Research Project',
      excerpt: 'Research into autonomous artificial intelligence systems for cybersecurity applications and their potential impact on defensive operations.',
      tags: ['AI Research', 'Cybersecurity', 'Automation', 'Innovation'],
      status: 'coming-soon',
      category: 'AI & Security'
    },
    {
      title: 'MITRE ATT&CK in Practice: Real-world Threat Modeling',
      excerpt: 'Practical guide to implementing MITRE ATT&CK framework for threat modeling and detection engineering in enterprise environments.',
      tags: ['MITRE ATT&CK', 'Threat Modeling', 'Detection Engineering'],
      status: 'coming-soon',
      category: 'Frameworks'
    },
    {
      title: 'Olympics 2024: Securing Global Events',
      excerpt: 'Behind the scenes of cybersecurity operations for Paris 2024 Olympics - challenges, solutions, and lessons for critical infrastructure protection.',
      tags: ['Critical Infrastructure', 'Event Security', 'Olympics', 'SOC'],
      status: 'coming-soon',
      category: 'Case Studies'
    },
    {
      title: 'Data Integration Meets Cybersecurity',
      excerpt: 'How middleware technologies and data pipeline integration enhance cybersecurity operations and threat intelligence workflows.',
      tags: ['Data Integration', 'Middleware', 'Threat Intelligence', 'Pipelines'],
      status: 'coming-soon',
      category: 'Data Security'
    },
    {
      title: 'Voice-Controlled Security: Building ITACHI',
      excerpt: 'Developing ITACHI - an intelligent voice automation system for hands-free computing and advanced task automation.',
      tags: ['Voice Control', 'Automation', 'AI Assistant', 'Innovation'],
      status: 'coming-soon',
      category: 'AI & Automation'
    }
  ];

  const getCategoryColor = (category) => {
    const colorMap = {
      'Threat Hunting': 'red',
      'AI & Security': 'purple',
      'Frameworks': 'blue',
      'Case Studies': 'green',
      'Data Security': 'orange',
      'AI & Automation': 'cyan'
    };
    return colorMap[category] || 'cyan';
  };

  const getColorClasses = (color) => {
    const colorMap = {
      red: { bg: 'bg-red-500/20', border: 'border-red-400/30', text: 'text-red-400' },
      purple: { bg: 'bg-purple-500/20', border: 'border-purple-400/30', text: 'text-purple-400' },
      blue: { bg: 'bg-blue-500/20', border: 'border-blue-400/30', text: 'text-blue-400' },
      green: { bg: 'bg-green-500/20', border: 'border-green-400/30', text: 'text-green-400' },
      cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-400/30', text: 'text-cyan-400' },
      yellow: { bg: 'bg-yellow-500/20', border: 'border-yellow-400/30', text: 'text-yellow-400' },
      orange: { bg: 'bg-orange-500/20', border: 'border-orange-400/30', text: 'text-orange-400' }
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="blog" className="py-20 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-green-400">blog</span>
              <span className="text-white">.</span>
              <span className="text-cyan-400">articles()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Insights, tutorials, and experiences in cybersecurity, threat hunting, data integration, and AI implementation
            </p>
            
            {/* Medium Link */}
            <div className="flex justify-center">
              <a
                href="https://soldier0x00.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-400 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
              >
                <span>📝</span>
                <span>Visit Medium Blog</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 rounded-lg p-6 mb-12 text-center">
            <h3 className="text-xl font-bold text-green-400 mb-2">🚀 Blog Relaunch Coming Soon!</h3>
            <p className="text-gray-300">
              I'm preparing to restart my Medium blog with fresh insights from my cybersecurity journey, 
              AI experiments, and threat hunting adventures. Stay tuned for upcoming articles!
            </p>
          </div>

          {/* Upcoming Articles Preview */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Upcoming Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => {
                const categoryColor = getCategoryColor(post.category);
                const colors = getColorClasses(categoryColor);
                
                return (
                  <div
                    key={index}
                    className={`group bg-black/60 backdrop-blur-sm border ${colors.border} rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative overflow-hidden`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500/20 border border-yellow-400/30 text-yellow-400 text-xs px-2 py-1 rounded-full font-medium">
                        Coming Soon
                      </span>
                    </div>

                    {/* Category */}
                    <div className={`inline-block ${colors.bg} border ${colors.border} rounded-full px-3 py-1 mb-4`}>
                      <span className={`text-xs font-medium ${colors.text}`}>{post.category}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-white mb-3 leading-tight">
                      {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Hover Effect */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-lg transition-opacity duration-300"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Blog Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-400">{blogPosts.length}</div>
              <div className="text-gray-400 text-sm">Articles Planned</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-cyan-400">6</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-400">∞</div>
              <div className="text-gray-400 text-sm">Learning Depth</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-400">🔥</div>
              <div className="text-gray-400 text-sm">Passion Level</div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-600/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get notified when new articles are published. Join the cybersecurity community!
            </p>
            
            {/* Status Messages */}
            {newsletterStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span className="text-green-400 font-medium">{newsletterMessage}</span>
                </div>
              </div>
            )}

            {newsletterStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span className="text-red-400 font-medium">{newsletterMessage}</span>
                </div>
              </div>
            )}
            
            <form 
              onSubmit={handleNewsletterSubmit} 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden field for Netlify */}
              <input type="hidden" name="form-name" value="newsletter" />
              {/* Honeypot field for spam protection */}
              <input type="hidden" name="bot-field" />
              
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg transition-all duration-300 hover:bg-green-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-3">
              No spam, only quality cybersecurity content. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;