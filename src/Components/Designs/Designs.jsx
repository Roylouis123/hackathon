import {
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { setSelectedResponse } from "../../redux/slice/responseSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Designs = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const files = {
    "App.js": {
      code: `
            import React from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';
           
            function App() {
              return (
                <button className='btn1'>Click Me</button>
              );
            }
           
            export default App;
          `,
    },
    "index.css": {
      code: `
      body{
        display:flex;
        justify-content:center;
        place-items:center;
      }
      .btn1{
        background-color: blue;
       
      }
          `,
    },
  };
  const switchtoEdit = (item) => {
    console.log("ittteeem11211", item);
    dispatch(setSelectedResponse({ value: item }));
    Navigate("/editor");
  };
  return (
    <div className="design-wrapper">
      <div className="design-container">
        <div className="design-box" onClick={(files) => switchtoEdit(files)}>
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
        </div>
      </div>
    </div>
  );
};

export default Designs;
