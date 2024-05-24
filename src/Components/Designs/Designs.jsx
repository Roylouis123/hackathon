import { get, map } from "lodash";
import "./Designs.css";
import React from "react";
import Prompt from "../Prompt/Prompt";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedResponse } from "../../redux/slice/responseSlice";
const Designs = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const designArray = useSelector((state) =>
    get(state, "ResponseSlice.response")
  );
  const switchtoEdit = (item) => {
    dispatch(setSelectedResponse({ value: item }));
    Navigate("/editor");
  };
  const renderElement = (item) => {
    const content = parse(item.element, {
      replace: (domNode) => {
        if (domNode.attribs) {
          // Apply styles to the top-level node
          Object.assign((domNode.attribs.style = {}), item.styles);
        }
      },
    });
    return content;
  };

  return (
    <div className="design-wrapper">
      <div className="design-container">
        {map(designArray, (ay) => (
          <div className="design-box" onClick={() => switchtoEdit(ay)}>
            {renderElement(ay)}
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
