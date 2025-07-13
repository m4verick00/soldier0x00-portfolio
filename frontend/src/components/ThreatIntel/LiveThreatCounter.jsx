/**
 * LiveThreatCounter.jsx - Real-time CVE vulnerability counter
 * Fetches latest CVE data from NVD API and displays current threat statistics
 */

import React, { useState, useEffect } from 'react';

const LiveThreatCounter = () => {
  const [cveData, setCveData] = useState({
    totalVulnerabilities: 0,
    last24h: 0,
    lastUpdated: null,
    isLoading: true,
    error: null
  });

  const fetchCVEData = async () => {
    try {
      setCveData(prev => ({ ...prev, isLoading: true, error: null }));
      
      // Calculate date range for last 24 hours
      const now = new Date();
      const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      
      const pubStartDate = yesterday.toISOString().split('T')[0];
      const pubEndDate = now.toISOString().split('T')[0];
      
      // NVD API endpoint for recent CVEs
      const apiUrl = `https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate=${pubStartDate}&pubEndDate=${pubEndDate}&resultsPerPage=2000`;
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      setCveData({
        totalVulnerabilities: data.totalResults || 0,
        last24h: data.vulnerabilities?.length || 0,
        lastUpdated: new Date(),
        isLoading: false,
        error: null
      });
      
    } catch (error) {
      console.warn('CVE API fetch failed:', error);
      
      // Fallback to simulated data with realistic numbers
      setCveData({
        totalVulnerabilities: Math.floor(Math.random() * 50) + 150, // 150-200 range
        last24h: Math.floor(Math.random() * 15) + 5, // 5-20 range
        lastUpdated: new Date(),
        isLoading: false,
        error: 'Using simulated data - API temporarily unavailable'
      });
    }
  };

  // Initial fetch and polling setup
  useEffect(() => {
    fetchCVEData();
    
    // Poll every 5 minutes
    const interval = setInterval(fetchCVEData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatLastUpdated = (date) => {
    if (!date) return 'Never';
    
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    return date.toLocaleDateString();
  };

  const getStatusColor = () => {
    if (cveData.isLoading) return 'text-yellow-400';
    if (cveData.error) return 'text-orange-400';
    if (cveData.last24h > 15) return 'text-red-400';
    if (cveData.last24h > 8) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getThreatLevel = () => {
    if (cveData.last24h > 15) return 'HIGH';
    if (cveData.last24h > 8) return 'MEDIUM';
    return 'LOW';
  };

  return (
    <div className="bg-black/60 border border-red-400/30 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-red-400 font-mono tracking-wider">
          LIVE_THREAT.monitor
        </h3>
        <div className={`text-xs font-mono ${getStatusColor()}`}>
          {cveData.isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin w-3 h-3 border border-yellow-400 border-t-transparent rounded-full"></div>
              <span>SCANNING...</span>
            </div>
          ) : (
            <span>THREAT_LEVEL: {getThreatLevel()}</span>
          )}
        </div>
      </div>
      
      <div className="space-y-4">
        {/* Main Counter Display */}
        <div className="text-center">
          <div className={`text-3xl font-bold font-mono ${getStatusColor()}`}>
            {cveData.isLoading ? (
              <span className="animate-pulse">---</span>
            ) : (
              cveData.last24h
            )}
          </div>
          <div className="text-gray-400 text-sm font-mono">
            new vulnerabilities reported in last 24h
          </div>
        </div>
        
        {/* Additional Stats */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-black/40 rounded p-3 border border-cyan-400/20">
            <div className="text-cyan-400 font-mono text-sm">
              {cveData.isLoading ? '---' : cveData.totalVulnerabilities}
            </div>
            <div className="text-gray-500 text-xs font-mono">
              Recent CVEs
            </div>
          </div>
          
          <div className="bg-black/40 rounded p-3 border border-purple-400/20">
            <div className="text-purple-400 font-mono text-sm">
              {formatLastUpdated(cveData.lastUpdated)}
            </div>
            <div className="text-gray-500 text-xs font-mono">
              Last Updated
            </div>
          </div>
        </div>
        
        {/* NVD Link */}
        <div className="text-center">
          <a
            href="https://nvd.nist.gov/vuln/search"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm underline"
          >
            <span>View full NVD database</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
        {/* Error Notice */}
        {cveData.error && (
          <div className="text-xs text-orange-400 text-center font-mono bg-orange-400/10 rounded p-2 border border-orange-400/20">
            {cveData.error}
          </div>
        )}
        
        {/* Refresh Button */}
        <div className="text-center">
          <button
            onClick={fetchCVEData}
            disabled={cveData.isLoading}
            className="px-4 py-2 bg-red-500/20 border border-red-400/30 rounded text-red-400 hover:bg-red-500/30 transition-colors disabled:opacity-50 font-mono text-xs"
          >
            {cveData.isLoading ? 'SCANNING...' : 'REFRESH_DATA'}
          </button>
        </div>
      </div>
      
      {/* Data Source Attribution */}
      <div className="mt-4 pt-4 border-t border-gray-600/30">
        <div className="text-xs text-gray-500 text-center font-mono">
          Data source: NIST National Vulnerability Database (NVD)
        </div>
      </div>
    </div>
  );
};

export default LiveThreatCounter;