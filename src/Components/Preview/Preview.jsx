import {
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

const Preview = ({ jsx, css }) => {
  const files = {
    "App.js": {
      code: `
          import './index.css';
          ${jsx}
        `,
    },
    "index.css": {
      code: `
      body { 
        margin: 0;
        display: flex;
        place-items: center;
        justify-content: center;
        min-width: 320px;
        min-height: 100vh;
      }
          
         
          ${css}
        `,
    },
  };

  return (
    <SandpackProvider
      files={files}
      theme="light"
      template="react"
      style={{ height: "40vh", width: "30vw" }}
    >
      <SandpackLayout style={{ height: "40vh", width: "30vw" }}>
        <SandpackPreview style={{ height: "40vh", width: "30vw" }} />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default Preview;
