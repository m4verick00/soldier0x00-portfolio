import React from 'react';

// Import only basic components first
import Navigation from './Navigation';

const ThemedHome = () => {
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-500">
      <Navigation />
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1 style={{ color: '#00ff00', fontSize: '3rem' }}>soldier0x00</h1>
        <p style={{ color: '#00ffff' }}>Cybersecurity Portfolio Loading...</p>
      </div>
    </div>
  );
};

export default ThemedHome;