import React, { useEffect } from "react";
import "./App.css";
import "./styles/retro.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleTest from "./components/SimpleTest";

const Home = () => {
  return <SimpleTest />;
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
