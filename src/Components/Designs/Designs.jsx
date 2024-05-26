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
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import BoxLoader from "../loader/boxLoader";

const json = [
  {
    id: 1,
    jsx: 'import React from \'react\';\nimport \'./styles.css\';\n\nconst NavbarWithCards = () => {\n  return (\n    <div>\n      <nav className="navbar">\n        <div className="navbar-brand">\n          <h1>My Website</h1>\n        </div>\n      </nav>\n      <div className="card-container">\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default NavbarWithCards;',
    css: ".navbar {\n  background-color: #f0f0f0;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.card {\n  width: calc(33.33% - 20px);\n  margin-bottom: 1rem;\n  border: 1px solid #ddd;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px 8px 0 0;\n}\n\n.card h2 {\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.card p {\n  color: #666;\n}",
  },
  {
    id: 2,
    jsx: 'import React from \'react\';\nimport \'./styles.css\';\n\nconst NavbarWithCards = () => {\n  return (\n    <div>\n      <nav className="navbar">\n        <div className="navbar-brand">\n          <h1>My Website</h1>\n        </div>\n      </nav>\n      <div className="card-container">\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default NavbarWithCards;',
    css: ".navbar {\n  background-color: #333;\n  color: #fff;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.card {\n  border: 1px solid #ddd;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px 8px 0 0;\n}\n\n.card h2 {\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.card p {\n  color: #666;\n}",
  },
  {
    id: 3,
    jsx: 'import React from \'react\';\nimport \'./styles.css\';\n\nconst NavbarWithCards = () => {\n  return (\n    <div>\n      <nav className="navbar">\n        <div className="navbar-brand">\n          <h1>My Website</h1>\n        </div>\n      </nav>\n      <div className="card-container">\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n        <div className="card">\n          <img src="https://picsum.photos/200/300" alt="Card Image" />\n          <h2>Card Title</h2>\n          <p>This is a sample card content. You can add more text here.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default NavbarWithCards;',
    css: ".navbar {\n  background-color: #f0f0f0;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.card-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.card {\n  width: 200px;\n  height: 300px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.card h2 {\n  padding: 10px 15px;\n  background-color: #f8f8f8;\n  font-size: 1.2rem;\n  margin-top: 10px;\n}\n\n.card p {\n  padding: 10px 15px;\n  color: #666;\n}",
  },
  {
    id: 1,
    jsx: `import React from 'react';
import './styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">Dashboard</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>

      <main className="dashboard-content">
        <div className="card-container">
          <div className="card">
            <div className="card-header">Card 1</div>
            <div className="card-body">
              <p>This is the content of card 1.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Card 2</div>
            <div className="card-body">
              <p>This is the content of card 2.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Card 3</div>
            <div className="card-body">
              <p>This is the content of card 3.</p>
            </div>
          </div>
        </div>

        <div className="form-container">
          <form className="dashboard-form">
            <h2>Form</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Dashboard</p>
      </footer>
    </div>
  );
};

export default Dashboard;
`,
    css: `/* Basic Styling */
.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: #f5f5f5;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: white;
}

.dashboard-content {
  padding: 2rem;
  flex-grow: 1;
}

/* Card Styling */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  flex: 1 0 300px; /* Ensure cards occupy at least 300px width */
}

.card-header {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Form Styling */
.form-container {
  margin-top: 2rem;
}

.dashboard-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dashboard-form label {
  font-weight: bold;
}

.dashboard-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dashboard-form button {
  padding: 0.8rem 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Footer Styling */
.footer {
  padding: 1rem;
  background-color: #333;
  color: white;
  text-align: center;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
  }

  .card {
    flex-grow: 1;
    flex-basis: 100%;
  }
}
`,
  },
];

const Designs = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const designArray = useSelector((state) =>
    get(state, "ResponseSlice.response")
  );
  const switchtoEdit = (item) => {
    dispatch(setSelectedResponse({ value: item }));
    Navigate("/editor");
  };

  const renderElement = (item) => {
    return (
      <SandpackProvider
        files={{ "/App.js": item.jsx, "/styles.css": item.css }}
        template="react"
        options={{
          classes: {
            "sp-layout": "snack-box",
          },
        }}
      >
        <SandpackLayout>
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
            actionsChildren={
              <button
                className="Edit_Button"
                onClick={() => switchtoEdit(item)}
              >
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
            <div
              className="design-box"
              key={ay.id}
              //   onClick={() => switchToEdit(ay)}
            >
              {renderElement(ay)}
            </div>
          ))}
        </div>
      ) : (
        <div className="loader-container">
          <BoxLoader />
        </div>
      )}

      {/* <div className="prompt-box"> */}
        <Prompt setLoading={setLoading} loading={loading} />
      {/* </div> */}
    </div>
  );
};

export default Designs;
