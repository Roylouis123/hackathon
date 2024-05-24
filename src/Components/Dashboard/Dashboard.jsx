import React from "react";
import "./Dashboard.css";
import Designs from "../Designs/Designs";
import Sidebar from "../sideBar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Designs />
    </div>
  );
};

export default Dashboard;
