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
  const designArray = useSelector((state) => get(state, "ResponseSlice.response"));
  console.log("desingArray", designArray);
  //   const Array = [
  //     {
  //       id: 1,
  //       styles: {
  //         border: "6px solid #f3f3f3" /* Light grey */,
  //         borderTop: "6px solid #3498db" /* Blue */,
  //         borderRadius: "50%",
  //         width: "40px",
  //         height: "40px",
  //         animation: "spin 2s linear infinite",
  //       },
  //       element: "<div class='loader'></div>",
  //     },
  //     {
  //       id: 2,
  //       styles: {
  //         borderRadius: "8px",
  //         backgroundColor: "red",
  //       },
  //       element: "<button>Click me</button>",
  //     },
  //     {
  //       id: 3,
  //       styles: {
  //         width: "200px",
  //         padding: "8px",
  //         border: "none",
  //         borderRadius: "4px",
  //         boxSizing: "border-box",
  //         backgroundColor: "#f2f2f2",
  //         color: "#333",
  //         transition: "background-color 0.3s ease",
  //       },
  //       element: "<input type='text' placeholder='Enter your password' />",
  //     },
  //   ];

  const switchtoEdit = (item) => {
    console.log('item1', item)
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
          <div className="design-box" onClick={switchtoEdit(ay)}>
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
