import React, { useEffect } from "react";
import "./App.css";
import "./styles/retro.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navigation from "./components/Navigation";
import RetroTerminalHero from "./components/RetroTerminalHero";
import About from "./components/About";
import RetroExperience from "./components/RetroExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import YouTubeFavorites from "./components/YouTubeFavorites";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <RetroTerminalHero />
      <About />
      <RetroExperience />
      <Skills />
      <Projects />
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
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors font-mono tracking-wider"
              >
                LINKEDIN.exe
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors font-mono tracking-wider"
              >
                GITHUB.sys
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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
