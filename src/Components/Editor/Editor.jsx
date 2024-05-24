import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import { setSelectedResponse } from "../../redux/slice/responseSlice";
import { get } from "lodash";
const Editor = () => {
  const jsonForm = useSelector((state) =>
    get(state, "ResponseSlice.selectedResponse")
  );
  console.log("jsonform", jsonForm);

  const [dynamicStyles, setDynamicStyles] = useState(jsonForm.styles); // State for dynamic styles
  const [dynamicElement, setDynamicElement] = useState(jsonForm.element);
  const dispatch = useDispatch();

  const handleStyleChange = (styleKey, value) => {
    setDynamicStyles((prevStyles) => ({
      ...prevStyles,
      [styleKey]: value,
    }));
  };

  const handleElementChange = (e) => {
    setDynamicElement(e.target.value);
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

  const handleUpdateContent2 = () => {
    dispatch(setSelectedResponse({ value: { ...jsonForm, element: dynamicElement }, content: 2 }));
  };

  const handleUpdateContent3 = () => {
    dispatch(setSelectedResponse({ value: { ...jsonForm, element: dynamicElement }, content: 3 }));
  };

  return (
    <div style={{ display: "flex", height: "90vh" }}>
        {/* content 1 */}
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
       {/* content 2 */}
        <div style={{ height: "50vh", border: "1px solid black" }}>
          <input
            type="text"
            value={dynamicElement}
            onChange={handleElementChange}
          />
        </div>
        <div style={{ height: "50vh", border: "1px solid black" }}>
            content 3
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleUpdateContent2}>Update Content 2</button>
          <button onClick={handleUpdateContent3}>Update Content 3</button>
        </div>
      </div>
    </div>
  );
};

export default Editor;

