import { map } from "lodash";
import "./Designs.css";
import React from "react";
import Prompt from "../Prompt/Prompt";
import { useNavigate } from "react-router-dom";
const Designs = () => {
  const Navigate = useNavigate();
  const Array = [
    { id: 1, style: "" },
    { id: 2, style: "" },
    { id: 3, style: "" },
    { id: 4, style: "" },
    { id: 5, style: "" },
  ];

  const switchtoEdit = () => {
    Navigate("editor");
  };
  return (
    <div className="design-wrapper">
      <div className="design-container">
        {map(Array, (ay) => (
          <div className="design-box" onClick={switchtoEdit}>
            {ay.id}
          </div>
        ))}
      </div>
      <div className="prompt-box">
        <Prompt />
      </div>
    </div>
  );
};

export default Designs;
