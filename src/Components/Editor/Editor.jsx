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
          <textarea
            value={Object.keys(dynamicStyles)
              .map((styleKey) => `${styleKey}: ${dynamicStyles[styleKey]}`)
              .join("\n")}
            onChange={(e) => {
              const styles = e.target.value.split("\n").reduce((acc, style) => {
                const [key, value] = style.split(":");
                if (key && value) {
                  acc[key.trim()] = value.trim();
                }
                return acc;
              }, {});
              setDynamicStyles(styles);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setDynamicStyles((prevStyles) => {
                  const newStyle = e.target.value.trim();
                  if (newStyle.includes(":")) {
                    const [key, value] = newStyle
                      .split(":")
                      .map((part) => part.trim());
                    return { ...prevStyles, [key]: value };
                  } else {
                    return prevStyles;
                  }
                });
              }
            }}
            rows={Object.keys(dynamicStyles).length + 1}
            style={{ width: "100%", whiteSpace: "pre-wrap" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
