// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/sideBar";
import TextEditor from "./Components/TextEditor/TextEditor";

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
            <Route path="/neweditor" element={<TextEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
