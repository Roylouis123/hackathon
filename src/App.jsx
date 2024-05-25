// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/sideBar";
import Editor from "./Components/Editor/Editor";
import Neweditor from "./Components/Neweditor/Neweditor";
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/neweditor" element={<Neweditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
