import { Sandpack } from "@codesandbox/sandpack-react";
import { get } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Neweditor() {
  const jsonForm = useSelector((state) =>
    get(state, "ResponseSlice.selectedResponse")
  );
  console.log(jsonForm);
  const tempcss = objectToCSS(jsonForm.newCss);
  const [jsx, setJsx] = useState(`import "./index.css";
  export default function App() {
        return <div>${jsonForm.newElement}</div>
        }`);
  const [css, setCss] = useState(`.${jsonForm.className}{
       ${tempcss}
    }`);

  function objectToCSS(cssObject) {
    // Initialize an empty array to hold the CSS lines
    let cssLines = [];

    // Iterate over the entries in the object
    for (let [property, value] of Object.entries(cssObject)) {
      // Format the property and value into a CSS declaration
      let cssDeclaration = `${property
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()}: ${value};`;

      // Add the CSS declaration to the array
      cssLines.push(cssDeclaration);
    }

    // Join the array into a single string with newlines between each declaration
    return cssLines.join("\n");
  }
  return (
    <div
      style={{
        width: "83vw",
        display: "flex",
        flexDirection: "column",
        gap: "100px",
        justifyContent: "space-between",
      }}
    >
      <Sandpack
        template="react"
        files={{
          "/App.js": jsx,
          "/index.css": css,
        }}
        theme={"dark"}
        options={{
          editorHeight: "100vh",
          editorWidthPercentage: 30,
          codeEditor: "vscode",
          rtl: true,
        }}
      />
    </div>
  );
}

export default Neweditor;
