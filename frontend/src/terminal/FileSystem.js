/**
 * FileSystem.js - Simulated file system for enhanced terminal experience
 * Provides realistic ls, cd, cat commands with cybersecurity-themed content
 */

export class FileSystem {
  constructor() {
    this.currentPath = '/home/soldier0x00';
    this.fileStructure = this.initializeFileSystem();
  }

  initializeFileSystem() {
    return {
      '/': {
        type: 'directory',
        contents: {
          'home': { type: 'directory' },
          'etc': { type: 'directory' },
          'var': { type: 'directory' },
          'usr': { type: 'directory' }
        }
      },
      '/home': {
        type: 'directory',
        contents: {
          'soldier0x00': { type: 'directory' }
        }
      },
      '/home/soldier0x00': {
        type: 'directory',
        contents: {
          'projects': { type: 'directory' },
          'tools': { type: 'directory' },
          'certificates': { type: 'directory' },
          'logs': { type: 'directory' },
          'readme.txt': { type: 'file' },
          'resume.pdf': { type: 'file' },
          '.bashrc': { type: 'file' },
          '.ssh': { type: 'directory' }
        }
      },
      '/home/soldier0x00/projects': {
        type: 'directory',
        contents: {
          'itachi': { type: 'directory' },
          'cyber-research': { type: 'directory' },
          'data-pipelines': { type: 'directory' },
          'olympics-2024': { type: 'directory' },
          'project-status.md': { type: 'file' }
        }
      },
      '/home/soldier0x00/tools': {
        type: 'directory',
        contents: {
          'nmap': { type: 'file' },
          'wireshark': { type: 'file' },
          'metasploit': { type: 'directory' },
          'custom-scripts': { type: 'directory' },
          'threat-intel.py': { type: 'file' }
        }
      },
      '/home/soldier0x00/certificates': {
        type: 'directory',
        contents: {
          'CEH.pdf': { type: 'file' },
          'CHFI.pdf': { type: 'file' },
          'security-clearance.txt': { type: 'file' }
        }
      },
      '/home/soldier0x00/logs': {
        type: 'directory',
        contents: {
          'threat-hunting.log': { type: 'file' },
          'olympics-monitoring.log': { type: 'file' },
          'system-events.log': { type: 'file' }
        }
      }
    };
  }

  getFileContent(filePath) {
    const contents = {
      '/home/soldier0x00/readme.txt': `
WELCOME TO SOLDIER0X00'S CYBER WORKSPACE
========================================

This terminal provides access to my cybersecurity toolkit and project files.

Available Commands:
- ls          : List directory contents
- cd <path>   : Change directory
- cat <file>  : Display file contents
- pwd         : Show current directory
- help        : Show all available commands
- whoami      : Display user information
- ps          : Show running processes
- netstat     : Display network connections
- history     : Show command history

Security Notice: All activities are monitored and logged.
      `,
      
      '/home/soldier0x00/.bashrc': `
# Soldier0x00's Bash Configuration
export PS1="\\[\\033[01;32m\\]soldier0x00@cyberstation\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ "
export PATH="/usr/local/bin:/usr/bin:/bin:/home/soldier0x00/tools"

# Security aliases
alias ll='ls -la'
alias la='ls -A'
alias l='ls -CF'
alias scan='nmap -sS'
alias monitor='tail -f /var/log/security.log'

# Threat hunting shortcuts
alias hunt='python3 /home/soldier0x00/tools/threat-intel.py'
alias analyze='wireshark -i eth0'

echo "Welcome to the Cyber Operations Terminal"
echo "Security Level: MAXIMUM"
      `,
      
      '/home/soldier0x00/projects/project-status.md': `
# Project Status Dashboard
========================

## Active Projects

### 🛡️ AI-Powered Cyber Defense Research
Status: RESEARCHING
Progress: 65%
Next Milestone: ML model training

### 🗣️ ITACHI - Voice Automation System  
Status: PLANNING
Progress: 20%
Next Milestone: Speech recognition integration

### 🏅 Olympics 2024 Security Operations
Status: COMPLETED ✅
Progress: 100%
Achievement: 99.99% uptime maintained

### 🏗️ AIsaac SIEM Architecture
Status: MASTERED ✅
Progress: 100%
Skills Gained: End-to-end SIEM understanding

### 🔧 Data Pipeline Engineering
Status: ONGOING
Progress: 80%
Current Focus: AI integration for cybersecurity
      `,
      
      '/home/soldier0x00/tools/threat-intel.py': `
#!/usr/bin/env python3
"""
Threat Intelligence Correlation Tool
Author: soldier0x00
Purpose: Automated threat hunting and intelligence gathering
"""

import requests
import json
from datetime import datetime

class ThreatIntelligence:
    def __init__(self):
        self.api_endpoints = {
            'virustotal': 'https://www.virustotal.com/api/v3/',
            'abuseipdb': 'https://api.abuseipdb.com/api/v2/',
            'otx': 'https://otx.alienvault.com/api/v1/'
        }
    
    def check_ip_reputation(self, ip_address):
        # Implementation for IP reputation checking
        pass
    
    def analyze_file_hash(self, file_hash):
        # Implementation for file hash analysis
        pass
    
    def get_threat_indicators(self):
        # Implementation for threat indicator gathering
        pass

if __name__ == "__main__":
    print("Threat Intelligence Tool v2.1")
    print("Initializing threat hunting protocols...")
      `,
      
      '/home/soldier0x00/logs/threat-hunting.log': `
[2024-07-13 10:15:22] INFO: Threat hunting session initiated
[2024-07-13 10:15:23] INFO: Loading MITRE ATT&CK framework
[2024-07-13 10:15:25] INFO: Analyzing network traffic patterns
[2024-07-13 10:16:01] ALERT: Suspicious PowerShell execution detected
[2024-07-13 10:16:02] INFO: Investigating process tree
[2024-07-13 10:16:45] INFO: False positive - legitimate admin activity
[2024-07-13 10:17:12] INFO: Continuing behavioral analysis
[2024-07-13 10:18:33] INFO: No threats detected in current timeframe
[2024-07-13 10:18:34] INFO: Threat hunting session completed
      `,
      
      '/home/soldier0x00/logs/olympics-monitoring.log': `
[2024-07-26 00:00:01] CRITICAL: Olympics security monitoring activated
[2024-07-26 00:00:02] INFO: All log parsers operational - 99.99% uptime target
[2024-07-26 08:15:33] INFO: Processing 2.3M events/hour
[2024-07-26 12:30:22] SUCCESS: Zero security incidents detected
[2024-07-26 16:45:12] INFO: Performance optimization applied - 30% speed increase
[2024-07-26 20:22:41] INFO: Real-time visibility maintained to SOC
[2024-08-11 23:59:59] SUCCESS: Olympics security operations completed
[2024-08-11 23:59:59] ACHIEVEMENT: 99.99% uptime achieved throughout Games
      `,
      
      '/home/soldier0x00/certificates/security-clearance.txt': `
SECURITY CLEARANCE DOCUMENTATION
================================

Classification Level: RESTRICTED ACCESS
Clearance Type: Cybersecurity Operations
Issued: 2022-04-01
Valid Until: 2027-04-01

Authorized Activities:
- Critical Infrastructure Protection
- Threat Intelligence Analysis  
- Security Operations Center Management
- International Event Security Support

Note: This is a simulated document for portfolio demonstration.
Actual security clearances are confidential.
      `
    };

    return contents[filePath] || `cat: ${filePath}: No such file or directory`;
  }

  ls(targetPath = null) {
    const path = this.resolvePath(targetPath);
    const directory = this.fileStructure[path];
    
    if (!directory) {
      return `ls: cannot access '${path}': No such file or directory`;
    }
    
    if (directory.type !== 'directory') {
      return `ls: ${path}: Not a directory`;
    }

    const items = Object.keys(directory.contents).map(name => {
      const item = directory.contents[name];
      const prefix = item.type === 'directory' ? '📁 ' : '📄 ';
      const suffix = item.type === 'directory' ? '/' : '';
      return `${prefix}${name}${suffix}`;
    });

    return items.length > 0 ? items.join('\n') : 'Directory is empty';
  }

  cd(targetPath) {
    if (!targetPath) {
      this.currentPath = '/home/soldier0x00';
      return '';
    }

    const newPath = this.resolvePath(targetPath);
    const directory = this.fileStructure[newPath];
    
    if (!directory) {
      return `cd: ${targetPath}: No such file or directory`;
    }
    
    if (directory.type !== 'directory') {
      return `cd: ${targetPath}: Not a directory`;
    }

    this.currentPath = newPath;
    return '';
  }

  cat(filePath) {
    if (!filePath) {
      return 'cat: missing file operand';
    }

    const fullPath = this.resolvePath(filePath);
    const file = this.getFileAtPath(fullPath);
    
    if (!file) {
      return `cat: ${filePath}: No such file or directory`;
    }
    
    if (file.type === 'directory') {
      return `cat: ${filePath}: Is a directory`;
    }

    return this.getFileContent(fullPath);
  }

  pwd() {
    return this.currentPath;
  }

  resolvePath(path) {
    if (!path) return this.currentPath;
    
    if (path.startsWith('/')) {
      return path;
    }
    
    if (path === '..') {
      const parts = this.currentPath.split('/').filter(p => p);
      parts.pop();
      return '/' + parts.join('/');
    }
    
    if (path === '.') {
      return this.currentPath;
    }
    
    return this.currentPath === '/' ? `/${path}` : `${this.currentPath}/${path}`;
  }

  getFileAtPath(path) {
    const directory = this.fileStructure[path];
    if (directory) return directory;

    const parentPath = path.substring(0, path.lastIndexOf('/')) || '/';
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const parent = this.fileStructure[parentPath];
    
    return parent?.contents?.[fileName];
  }

  executeCommand(command, args) {
    switch (command) {
      case 'ls':
        return this.ls(args[0]);
      case 'cd':
        return this.cd(args[0]);
      case 'cat':
        return this.cat(args[0]);
      case 'pwd':
        return this.pwd();
      default:
        return null;
    }
  }
}

export default FileSystem;