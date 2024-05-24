// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>AI Mavericks</h2>
      </div>
      <ul className="sidebar-menu">
        <li className={`sidebar-item ${activeLink !== '/dashboard' ? 'active' : ''}`}>
          <Link to="/dashboard" onClick={() => setActiveLink('/dashboard')}>
            Dashboard
          </Link>
        </li>
        <li className={`sidebar-item ${activeLink 
          !== '/contact' ? 'active' : ''}`}>
          <Link to="/contact" onClick={() => setActiveLink('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
