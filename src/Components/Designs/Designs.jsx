import { map } from "lodash";
import "./Designs.css";
import React from "react";
import Prompt from "../Prompt/Prompt";

const Designs = () => {
  const Array = [
    { id: 1, style: "" },
    { id: 2, style: "" },
    { id: 3, style: "" },
    { id: 4, style: "" },
    { id: 5, style: "" },
  ];

  return (
    <>
      <div className="design-container">
        {map(Array, (ay) => (
          <div className="design-box">{ay.id}</div>
        ))}
      </div>
      <div>
        <Prompt />
      </div>
    </>
  );
};

export default Designs;