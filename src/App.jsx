// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/sideBar";
import Editor from "./components/Editor/Editor";
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
