import React, { useState } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { get } from "lodash";
const Editor = () => {
  const jsonForm = useSelector((state) =>
    get(state, "ResponseSlice.selectedResponse")
  );
  console.log("jsonform", jsonForm);

  const [dynamicStyles, setDynamicStyles] = useState(jsonForm.styles); // State for dynamic styles
  const [dynamicElement, setDynamicElement] = useState(jsonForm.element);
  const handleStyleChange = (styleKey, value) => {
    setDynamicStyles((prevStyles) => ({
      ...prevStyles,
      [styleKey]: value,
    }));
  };

  const handleElementChange = (e) => {
    setDynamicElement(e.target.value);
    dispatch(updateResponseElement(e.target.value)); // Dispatch action to update element in Redux store
  };
  const renderElement = (item, styles) => {
    const content = parse(item.element, {
      replace: (domNode) => {
        if (domNode.attribs) {
          // Apply styles to the top-level node
          domNode.attribs.style = { ...domNode.attribs.style, ...styles };
        }
      },
    });

    return content;
  };
  return (
    <div style={{ display: "flex", height: "90vh" }}>
      <div
        style={{ flex: "1 0 50%", display: "flex", flexDirection: "column" }}
      >
        <div style={{ height: "100%", border: "1px solid black" }}>
          {renderElement(
            { ...jsonForm, element: dynamicElement },
            dynamicStyles
          )}{" "}
          {/* Pass dynamicElement and dynamicStyles to renderElement */}
        </div>
      </div>
      <div
        style={{ flex: "1 0 50%", display: "flex", flexDirection: "column" }}
      >
        {/* <div style={{height: '50vh', border: '1px solid black'}}>
          {renderElement(jsonForm)}
        </div> */}
        <div style={{ height: "50vh", border: "1px solid black" }}>
          <input
            type="text"
            value={dynamicElement}
            onChange={handleElementChange}
          />
        </div>
        <div style={{ height: "50vh", border: "1px solid black" }}>
          {Object.keys(dynamicStyles).map((styleKey) => (
            <div key={styleKey}>
              {styleKey}:
              <input
                type="text"
                value={dynamicStyles[styleKey]}
                onChange={(e) => handleStyleChange(styleKey, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;
