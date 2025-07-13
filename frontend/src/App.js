import React, { useEffect } from "react";
import "./App.css";
import "./styles/retro.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

// Import components
import Navigation from "./components/Navigation";
import InteractiveTerminalHero from "./components/InteractiveTerminalHero";
import About from "./components/About";
import RetroExperience from "./components/RetroExperience";
import RetroSkills from "./components/RetroSkills";
import RetroProjects from "./components/RetroProjects";
import YouTubeFavorites from "./components/YouTubeFavorites";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

import { useTheme } from "./contexts/ThemeContext";

const Home = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-black text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <ThemeToggle />
      <Navigation />
      <InteractiveTerminalHero />
      <About />
      <RetroExperience />
      <RetroSkills />
      <RetroProjects />
      <YouTubeFavorites />
      <Blog />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-black border-t border-green-400/30 py-8 retro-section">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-mono">
              © 2025 soldier0x00. Built with React & Neural Networks.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://soldier0x00.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors font-mono tracking-wider"
              >
                MEDIUM.dll
              </a>
              <a
                href="https://linkedin.com/in/sai-harsha-vardhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors font-mono tracking-wider"
              >
                LINKEDIN.exe
              </a>
              <a
                href="https://tryhackme.com/p/soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors font-mono tracking-wider"
              >
                TRYHACKME.sys
              </a>
              <a
                href="https://www.instagram.com/harsha_soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors font-mono tracking-wider"
              >
                INSTAGRAM.dll
              </a>
              <a
                href="https://x.com/soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors font-mono tracking-wider"
              >
                TWITTER.exe
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
