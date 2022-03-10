import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CardInfo from "./components/CardInfo";
import CardList from "./components/CardList";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/" exact element={<CardList/>} />
            <Route path="/user/:id" element={<CardInfo/>} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;