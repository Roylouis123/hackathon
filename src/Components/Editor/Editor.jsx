import { Sandpack } from "@codesandbox/sandpack-react";
import { get } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Editor() {
  const jsonForm = useSelector((state) =>
    get(state, "ResponseSlice.selectedResponse")
  );
  console.log(jsonForm);
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
          "/App.js": jsonForm.jsx,
          "/styles.css": jsonForm.css,
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
