/**
 * ParticleSystem.jsx - Advanced particle effects that follow mouse cursor
 * Creates cyberpunk-style particle trails and ambient particle effects
 */

import React, { useEffect, useRef, useState } from 'react';

const ParticleSystem = ({ enabled = true, intensity = 1 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(enabled);

  // Particle class
  class Particle {
    constructor(x, y, type = 'cursor') {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.life = 1.0;
      this.decay = 0.01 + Math.random() * 0.02;
      this.size = Math.random() * 3 + 1;
      this.type = type;
      
      // Different particle types
      switch (type) {
        case 'cursor':
          this.color = `rgba(0, 255, ${Math.floor(Math.random() * 255)}, `;
          this.decay = 0.02;
          break;
        case 'ambient':
          this.color = `rgba(${Math.floor(Math.random() * 100)}, 255, 0, `;
          this.decay = 0.005;
          this.vx *= 0.3;
          this.vy *= 0.3;
          break;
        case 'cyber':
          this.color = `rgba(255, 0, ${Math.floor(Math.random() * 255)}, `;
          this.decay = 0.015;
          break;
        default:
          this.color = 'rgba(0, 255, 255, ';
      }
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= this.decay;
      
      // Add some drift
      this.vx *= 0.99;
      this.vy *= 0.99;
      
      // Gravity for some particle types
      if (this.type === 'cursor') {
        this.vy += 0.02;
      }
    }

    draw(ctx) {
      if (this.life <= 0) return;
      
      ctx.save();
      ctx.globalAlpha = this.life;
      
      // Create glow effect
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );
      gradient.addColorStop(0, this.color + '1)');
      gradient.addColorStop(1, this.color + '0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add core particle
      ctx.fillStyle = this.color + this.life + ')';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }

    isDead() {
      return this.life <= 0;
    }
  }

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };

        // Create cursor particles
        if (enabled && Math.random() < 0.3 * intensity) {
          particlesRef.current.push(
            new Particle(
              mouseRef.current.x + (Math.random() - 0.5) * 10,
              mouseRef.current.y + (Math.random() - 0.5) * 10,
              'cursor'
            )
          );
        }
      }
    };

    const handleClick = (e) => {
      if (!enabled) return;
      
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create burst of particles on click
        for (let i = 0; i < 15; i++) {
          particlesRef.current.push(new Particle(x, y, 'cyber'));
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [enabled, intensity]);

  // Animation loop
  useEffect(() => {
    if (!enabled) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create ambient particles
    const createAmbientParticles = () => {
      if (Math.random() < 0.05 * intensity) {
        particlesRef.current.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            'ambient'
          )
        );
      }
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create ambient particles occasionally
      createAmbientParticles();
      
      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.update();
        particle.draw(ctx);
        return !particle.isDead();
      });

      // Limit particle count for performance
      if (particlesRef.current.length > 300) {
        particlesRef.current = particlesRef.current.slice(-300);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [enabled, intensity]);

  // Handle visibility changes for performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      } else if (enabled) {
        // Restart animation when tab becomes visible
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particlesRef.current = particlesRef.current.filter(particle => {
              particle.update();
              particle.draw(ctx);
              return !particle.isDead();
            });

            animationRef.current = requestAnimationFrame(animate);
          };
          animate();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled]);

  if (!isVisible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{ 
        mixBlendMode: 'screen',
        opacity: 0.7
      }}
    />
  );
};

// Particle control component for easy toggling
export const ParticleControls = ({ onToggle, enabled, intensity, onIntensityChange }) => {
  return (
    <div className="fixed bottom-6 left-6 z-50 bg-black/80 border border-green-400/30 rounded-lg p-4 backdrop-blur-sm">
      <h4 className="text-green-400 font-mono text-sm mb-3">PARTICLE_SYS.cfg</h4>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <label className="text-gray-400 font-mono text-xs">Enable:</label>
          <button
            onClick={onToggle}
            className={`w-12 h-6 rounded-full transition-colors ${
              enabled ? 'bg-green-400' : 'bg-gray-600'
            }`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
              enabled ? 'translate-x-7' : 'translate-x-1'
            }`} />
          </button>
        </div>
        
        {enabled && (
          <div className="flex items-center space-x-3">
            <label className="text-gray-400 font-mono text-xs">Intensity:</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={intensity}
              onChange={(e) => onIntensityChange(parseFloat(e.target.value))}
              className="flex-1"
            />
            <span className="text-green-400 font-mono text-xs w-8">{intensity.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticleSystem;