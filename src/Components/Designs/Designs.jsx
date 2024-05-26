import { map } from "lodash";
import "./Designs.css";
import React, { useState } from "react";
import Prompt from "../Prompt/Prompt";
import Preview from "../Preview/Preview";

const Designs = () => {
  const [data, setData] = useState([
    {
      jsx: `import "./index.css";\n export default function App()\n {
      return <h4>Hello Sandpack</h4>\n
      }`,
      css: `body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
      }`,
    },
    {
      jsx: `export default function App() {
      return <h1>Hello Sandpack</h1>
      }`,
      css: `body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
      }`,
    },
    {
      jsx: `export default function App() {
      return <h1>Hello Sandpack</h1>
      }`,
      css: `body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
      }`,
    },
    {
      jsx: `export default function App() {
      return <h1>Hello Sandpack</h1>
      }`,
      css: `body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
      }`,
    },
  ]);

  return (
    <div className="design-wrapper">
      <div className="design-container">
        <div className="design-subcontainer">
          <Preview jsx={data[0].jsx} css={data[0].css} />
          <Preview jsx={data[1].jsx} css={data[1].css} />
        </div>
        <div className="design-subcontainer">
          <Preview jsx={data[2].jsx} css={data[2].css} />
          <Preview jsx={data[3].jsx} css={data[3].css} />
        </div>
      </div>
      <div className="prompt-box">
        <Prompt setData={setData} />
      </div>
    </div>
  );
};

export default Designs;
