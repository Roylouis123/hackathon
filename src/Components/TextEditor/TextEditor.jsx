import { Sandpack } from "@codesandbox/sandpack-react";
import { useState } from "react";

export default function TextEditor() {
  const [jsx, setJsx] = useState(`export default function App()\n {
    return <h1>Hello Sandpack</h1>\n
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
        width: "100vw",
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
