import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Sidebar Title</h2>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
        <li><a href="#section4">Section 4</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;