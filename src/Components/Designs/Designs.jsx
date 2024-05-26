import { get, map } from "lodash";
import "./Designs.css";
import React, { useState } from "react";
import Prompt from "../Prompt/Prompt";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedResponse } from "../../redux/slice/responseSlice";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview
} from "@codesandbox/sandpack-react";
import BoxLoader from "../loader/boxLoader";

const json = [
  {
    "id": 1,
    "jsx": "import React from 'react';\nimport './styles.css';\n\nconst NavbarWithCards = () => {\n  return (\n    <div>\n      <nav className=\"navbar\">\n        <div className=\"navbar-brand\">\n          <h1>My Website</h1>\n        </div>\n      </nav>\n      <div className=\"card-container\">\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default NavbarWithCards;",
    "css": ".navbar {\n  background-color: #f0f0f0;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.card {\n  width: calc(33.33% - 20px);\n  margin-bottom: 1rem;\n  border: 1px solid #ddd;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px 8px 0 0;\n}\n\n.card h2 {\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.card p {\n  color: #666;\n}"
  },
  {
    "id": 2,
    "jsx": "import React from 'react';\nimport './styles.css';\n\nconst NavbarWithCards = () => {\n  return (\n    <div>\n      <nav className=\"navbar\">\n        <div className=\"navbar-brand\">\n          <h1>My Website</h1>\n        </div>\n      </nav>\n      <div className=\"card-container\">\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default NavbarWithCards;",
    "css": ".navbar {\n  background-color: #333;\n  color: #fff;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.card {\n  border: 1px solid #ddd;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px 8px 0 0;\n}\n\n.card h2 {\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.card p {\n  color: #666;\n}"
  },
  {
    "id": 3,
    "jsx": "import React from 'react';\nimport './styles.css';\n\nconst NavbarWithCards = () => {\n  return (\n    <div>\n      <nav className=\"navbar\">\n        <div className=\"navbar-brand\">\n          <h1>My Website</h1>\n        </div>\n      </nav>\n      <div className=\"card-container\">\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default NavbarWithCards;",
    "css": ".navbar {\n  background-color: #f0f0f0;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.card-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.card {\n  width: 200px;\n  height: 300px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.card h2 {\n  padding: 10px 15px;\n  background-color: #f8f8f8;\n  font-size: 1.2rem;\n  margin-top: 10px;\n}\n\n.card p {\n  padding: 10px 15px;\n  color: #666;\n}"
  },
  {
    "id": 4,
    "jsx": "import React from 'react';\nimport './styles.css';\n\nconst NavbarWithCards = () => {\n  return (\n    <div>\n      <nav className=\"navbar\">\n        <div className=\"navbar-brand\">\n          <h1>My Website</h1>\n        </div>\n      </nav>\n      <div className=\"card-container\">\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className=\"card\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Card Image\" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default NavbarWithCards;",
    "css": ".navbar {\n  background-color: #f0f0f0;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.card {\n  border: none;\n  padding: 1rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  transition: transform 0.3s ease;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 10px 10px 0 0;\n}\n\n.card h2 {\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.card p {\n  color: #666;\n}"
  }
]




const Designs = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const designArray = useSelector((state) =>
    get(state, "ResponseSlice.response")
  );
  const switchtoEdit = (item) => {
    console.log("ittteeem11211", item);
    dispatch(setSelectedResponse({ value: item }));
    Navigate("/editor");
  };
  const switchToEdit = (item) => {
    dispatch(setSelectedResponse({ value: item }));
    navigate("/editor");
  };

  const renderElement = (item) => {


    return (
      <SandpackProvider
        files={{ "/App.js": item.jsx, "/styles.css": item.css }}
        template="react"
      >
        <SandpackLayout>
          <SandpackPreview showOpenInCodeSandbox={false} showRefreshButton={false} 
          actionsChildren={
            <button className="Edit_Button" onClick={() => switchtoEdit(item)}>
              Edit
            </button>
          }
          />
        </SandpackLayout>
      </SandpackProvider>
    );
  };

  return (
  <div className="design-wrapper">
  {!loading ? (
    <div className="design-container">
      {map(designArray, (ay) => (
        <div className="design-box" key={ay.id} onClick={() => switchToEdit(ay)}>
          {renderElement(ay)}
        </div>
      ))}
    </div>
  ) : (
    <div className="loader-container">
      <BoxLoader />
    </div>
  )}

  <div className="prompt-box">
    <Prompt setLoading={setLoading} loading={loading} />
  </div>
</div>
  );
};

export default Designs;
