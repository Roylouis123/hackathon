import { Sandpack } from "@codesandbox/sandpack-react";
import { get } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Editor() {
  const jsonForm = useSelector((state) =>
    get(state, "ResponseSlice.selectedResponse")
  );
  console.log(jsonForm);
  const [jsx, setJsx] = useState(`export default function App() {
        return <div>${jsonForm.completedElement}</div>
        }`);
  const [css, setCss] = useState(`body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
    }`);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "100px",
        justifyContent: "space-between",
      }}
    >
      <Sandpack
        className="editor-container"
        template="react"
        files={{
          "/App.js": jsx,
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

export default Editor;
