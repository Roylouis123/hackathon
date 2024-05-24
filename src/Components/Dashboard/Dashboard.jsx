import React, { useEffect } from "react";
import "./Dashboard.css";
import Designs from "../Designs/Designs";
import { useDispatch } from "react-redux";
import { setAiResponse } from "../../redux/slice/responseSlice";

const Dashboard = () => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setAiResponse({ value: [] }));
  // }, []);
  return (
    <div className="dashboard-container">
      <Designs />
    </div>
  );
};

export default Dashboard;
