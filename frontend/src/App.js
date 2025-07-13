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
      <TerminalHero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <YouTubeFavorites />
      <Blog />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 soldier0x00. Built with React & Passion for Cybersecurity.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://soldier0x00.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Medium
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                GitHub
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
