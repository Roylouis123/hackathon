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
    "jsx": `import React from "react";
    import "./styles.css";
    
    const Navbar = () => {
      return (
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#cars">Cars</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      );
    };
    
    const CarCard = ({ image, name, description }) => {
      return (
        <div className="car-card">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      );
    };
    
    const Footer = () => {
      return (
        <footer className="footer">
          <p>&copy; 2024 Car Website. All rights reserved.</p>
        </footer>
      );
    };
    
    const App = () => {
      const cars = [
        {
          image: "https://source.unsplash.com/150x150/?car1",
          name: "Car 1",
          description: "Description for Car 1",
        },
        {
          image: "https://source.unsplash.com/150x150/?car2",
          name: "Car 2",
          description: "Description for Car 2",
        },
        {
          image: "https://source.unsplash.com/150x150/?car3",
          name: "Car 3",
          description: "Description for Car 3",
        },
      ];
    
      return (
        <div className="App">
          <Navbar />
          <div className="car-cards-container">
            {cars.map((car, index) => (
              <CarCard
                key={index}
                image={car.image}
                name={car.name}
                description={car.description}
              />
            ))}
          </div>
          <Footer />
        </div>
      );
    };
    
    export default App;
    `,
    "css": `/* src/App.css */
    .App {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .car-cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 16px;
      flex-grow: 1;
    }
    
    /* Navbar styles */
    .navbar {
      background-color: #333;
      overflow: hidden;
    }
    
    .navbar ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    
    .navbar li {
      float: left;
    }
    
    .navbar li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    .navbar li a:hover {
      background-color: #111;
    }
    
    /* CarCard styles */
    .car-card {
      border: 1px solid #ccc;
      border-radius: 4px;
      overflow: hidden;
      margin: 16px;
      padding: 16px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .car-card img {
      max-width: 100%;
      height: auto;
    }
    
    .car-card h3 {
      margin: 16px 0 8px;
    }
    
    .car-card p {
      color: #666;
    }
    
    /* Footer styles */
    .footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 10px 0;
      position: relative;
      bottom: 0;
      width: 100%;
    }
    `
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

