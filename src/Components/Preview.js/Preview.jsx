import {
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

const Preview = () => {
  const files = {
    "App.js": {
      code: `
          import React from 'react';
          import ReactDOM from 'react-dom';
          import './index.css';
          
          function App() {
            return (
              <div className="App">
                <header className="App-header">
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            );
          }
          
          export default App;
        `,
    },
    "index.css": {
      code: `
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          
         .App {
            text-align: center;
          }
          
         .App-header {
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
          }
          
         .App-link {
            margin-top: 24px;
          }
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
