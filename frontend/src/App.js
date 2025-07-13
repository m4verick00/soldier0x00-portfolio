import React, { useEffect } from "react";
import "./App.css";
import "./styles/retro.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemedHome from "./components/ThemedHome";

const Home = () => {
  return <ThemedHome />;
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
