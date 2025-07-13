/**
 * CareerTimeline.jsx - Interactive animated career timeline
 * Shows career milestones as branching timeline with neon glow effects
 */

import React, { useState, useRef, useEffect } from 'react';

const CareerTimeline = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  // Career milestones data
  const milestones = [
    {
      id: 1,
      title: 'Cybersecurity Instructor',
      company: 'Teaching & Mentoring',
      period: '8 months',
      type: 'education',
      description: 'Taught networking fundamentals and security training to aspiring cybersecurity professionals.',
      x: 10,
      y: 30
    },
    {
      id: 2,
      title: 'Production Support Engineer (L3)',
      company: 'Atos',
      period: 'Initial Role',
      type: 'devsecops',
      description: 'Level 3 production support working with customers across multiple regions.',
      x: 30,
      y: 50
    },
    {
      id: 3,
      title: 'Cyber Threat Hunter',
      company: 'Atos',
      period: 'Career Progression',
      type: 'hunting',
      description: 'Advanced threat detection using MITRE ATT&CK framework and behavioral analysis.',
      x: 50,
      y: 20
    },
    {
      id: 4,
      title: 'Data Integration Specialist',
      company: 'Allure Commerce LLP',
      period: 'Current Role',
      type: 'current',
      description: 'Engineering data pipelines with Java, Apache NiFi, and AI/ML technologies.',
      x: 70,
      y: 60
    },
    {
      id: 5,
      title: 'AI & ML Security Research',
      company: 'Future Goals',
      period: 'Ongoing',
      type: 'future',
      description: 'Integrating machine learning with cybersecurity for next-gen threat detection.',
      x: 90,
      y: 40
    }
  ];

  const getNodeColor = (type) => {
    const colors = {
      education: '#10B981', // green
      devsecops: '#3B82F6', // blue
      hunting: '#EF4444', // red
      current: '#F59E0B', // amber
      future: '#8B5CF6' // purple
    };
    return colors[type] || '#06B6D4';
  };

  const getNodeGlow = (type) => {
    const glows = {
      education: '0 0 20px rgba(16, 185, 129, 0.6)',
      devsecops: '0 0 20px rgba(59, 130, 246, 0.6)',
      hunting: '0 0 20px rgba(239, 68, 68, 0.6)',
      current: '0 0 20px rgba(245, 158, 11, 0.6)',
      future: '0 0 20px rgba(139, 92, 246, 0.6)'
    };
    return glows[type] || '0 0 20px rgba(6, 182, 212, 0.6)';
  };

  const handleMouseEnter = (milestone, event) => {
    setHoveredNode(milestone);
    updateTooltipPosition(event);
  };

  const handleMouseMove = (event) => {
    if (hoveredNode) {
      updateTooltipPosition(event);
    }
  };

  const updateTooltipPosition = (event) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }
  };

  const generatePath = (from, to) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const controlX1 = from.x + dx * 0.5;
    const controlY1 = from.y;
    const controlX2 = from.x + dx * 0.5;
    const controlY2 = to.y;
    
    return `M ${from.x} ${from.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${to.x} ${to.y}`;
  };

  // Create connections between milestones
  const connections = [
    { from: milestones[0], to: milestones[1] },
    { from: milestones[1], to: milestones[2] },
    { from: milestones[2], to: milestones[3] },
    { from: milestones[3], to: milestones[4] }
  ];

  return (
    <div className="w-full bg-black/40 rounded-lg border border-cyan-400/30 p-6 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-cyan-400 mb-6 font-mono tracking-wider text-center">
        CAREER_TRAJECTORY.path
      </h3>
      
      <div className="relative w-full h-80 md:h-96">
        <svg
          ref={svgRef}
          viewBox="0 0 100 80"
          className="w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredNode(null)}
        >
          {/* Background Grid */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="0.5"/>
            </pattern>
            
            {/* Glow Filters */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <rect width="100" height="80" fill="url(#grid)" opacity="0.3"/>
          
          {/* Connection Lines */}
          {connections.map((connection, index) => (
            <path
              key={index}
              d={generatePath(connection.from, connection.to)}
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="0.5"
              fill="none"
              className="transition-all duration-300"
              style={{
                filter: hoveredNode ? 'url(#glow)' : 'none'
              }}
            />
          ))}
          
          {/* Milestone Nodes */}
          {milestones.map((milestone) => (
            <g key={milestone.id}>
              {/* Node Glow */}
              <circle
                cx={milestone.x}
                cy={milestone.y}
                r="3"
                fill={getNodeColor(milestone.type)}
                opacity="0.3"
                className={`transition-all duration-300 ${
                  hoveredNode?.id === milestone.id ? 'animate-pulse' : ''
                }`}
                style={{
                  filter: hoveredNode?.id === milestone.id ? 'url(#glow)' : 'none'
                }}
              />
              
              {/* Main Node */}
              <circle
                cx={milestone.x}
                cy={milestone.y}
                r="1.5"
                fill={getNodeColor(milestone.type)}
                className="cursor-pointer transition-all duration-300 hover:scale-150"
                onMouseEnter={(e) => handleMouseEnter(milestone, e)}
                style={{
                  boxShadow: hoveredNode?.id === milestone.id ? getNodeGlow(milestone.type) : 'none'
                }}
              />
              
              {/* Node Label */}
              <text
                x={milestone.x}
                y={milestone.y + 6}
                fill="rgba(255, 255, 255, 0.8)"
                fontSize="2"
                textAnchor="middle"
                className="font-mono pointer-events-none"
              >
                {milestone.company}
              </text>
            </g>
          ))}
        </svg>
        
        {/* Tooltip */}
        {hoveredNode && (
          <div
            className="absolute z-10 bg-black/90 border border-cyan-400/50 rounded-lg p-3 backdrop-blur-sm pointer-events-none"
            style={{
              left: `${tooltipPosition.x + 10}px`,
              top: `${tooltipPosition.y - 80}px`,
              transform: tooltipPosition.x > 250 ? 'translateX(-100%)' : 'none'
            }}
          >
            <div className="text-cyan-400 font-mono text-sm font-bold">
              {hoveredNode.title}
            </div>
            <div className="text-gray-300 font-mono text-xs">
              {hoveredNode.company}
            </div>
            <div className="text-gray-400 font-mono text-xs">
              {hoveredNode.period}
            </div>
            <div className="text-gray-300 text-xs mt-2 max-w-xs">
              {hoveredNode.description}
            </div>
          </div>
        )}
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs font-mono">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-400">Education</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-400">DevSecOps</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-gray-400">Threat Hunting</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <span className="text-gray-400">Current</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <span className="text-gray-400">Future</span>
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;