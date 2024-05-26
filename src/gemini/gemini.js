import { GoogleGenerativeAI } from "@google/generative-ai";
import { setAiResponse } from "../redux/slice/responseSlice";

const genAI = new GoogleGenerativeAI("AIzaSyATgAHxSoyMzAot_l40ogLpbN2PqPJwHBU");

const askGemini = async (dispatch, msg) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: `
            You have to build a json and that json we will use to create react component.
            So try to give the json alone we don't need any other content like comments and other details.
            Code should be in JSX and CSS.
            That json structure will be given in the example below.
            You have to generate 4 json with different design styling and it should be unique.
            You have to wrap to those 4 jsons in an array.
            Each styles should be different.
            You have to create a Component what user have prompted.
            Below is just an example.

            Note: I strictly tell you to give each json unique id and unique jsx and unique css.

            Response:

            '''[{...},{...},{...},{...}]'''

            Note: You have to create a Component what user have prompted and you must give only Array of JSON without any note or comments.

            Example:
            [
              {
                id: 1,
                jsx:'
                import React from 'react';
                import "./styles.css";
                
                const ButtonWithHover = () => {
                  return (
                    <div>
                      <button className="button-with-hover">Button with Hover</button>
                    </div>
                  );
                };
                
                export default ButtonWithHover;
               ',
                css:'
                .button-with-hover {
                  padding: 10px;
                  background-color: #4CAF50; /* Green */
                  border: none;
                  color: white;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
                  border-radius: 8px;
                }
                
                .button-with-hover:hover {
                  background-color: skyblue; /* Darker Green */
                }
               '
              },
              {
                id: 2,
                jsx:'
                import React from 'react';
                import "./styles.css";
                
                const ButtonWithBoxShadow = () => {
                  return (
                    <div>
                      <button className="button-with-box-shadow">Button with Box Shadow</button>
                    </div>
                  );
                };
                
                export default ButtonWithBoxShadow;
               ',
                css:'
                .button-with-box-shadow {
                  padding: 10px;
                  background-color: #fff;
                  border: none;
                  color: black;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  cursor: pointer;
                  border-radius: 8px;
                  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                }
               '
              },
              {
                id: 3,
                jsx:'
                import React from 'react';
                import "./styles.css";
                
                const ButtonWithGradient = () => {
                  return (
                    <div>
                      <button className="button-with-gradient">Button with Gradient</button>
                    </div>
                  );
                };
                
                export default ButtonWithGradient;
               ',
                css:'
                .button-with-gradient {
                  padding: 10px;
                  border: none;
                  color: white;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  cursor: pointer;
                  border-radius: 8px;
                  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
                }
               '
              },
              {
                id: 4,
                jsx:'
                import React from 'react';
                import "./styles.css";
                
                const ButtonWithBorderRadius = () => {
                  return (
                    <div>
                      <button className="button-with-border-radius">Button with Border Radius</button>
                    </div>
                  );
                };
                
                export default ButtonWithBorderRadius;
               ',
                css:'
                .button-with-border-radius {
                  padding: 10px;
                  background-color: #008CBA;
                  border: none;
                  color: white;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  cursor: pointer;
                  border-radius: 20px;
                }
               '
              },
            ]

            Example 2:

            [
              {
                "id": 1,
                "jsx": 'import React from "react";
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
                ',
                "css": '
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
                '
              }
            ]
        
      `,
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 200000,
    },
  });

  const result = await chat.sendMessage(msg);

  const response = await result.response;

  const text = response.text();
  console.log(text, "the text");
  const cleanedString = text.replace(/.*?(```json(.*?)```).*?/gs, "$2").trim();
  const extractedString = cleanedString.replace(/`/g, "");
  console.log("cleanedStr", extractedString);
  try {
    const jsonArray = JSON.parse(extractedString);
    console.log("jsonArray", jsonArray);
    dispatch(setAiResponse({ value: jsonArray }));
  } catch (error) {
    console.error("Failed to parse JSON:", error);
  }
  // return text;
};

export default askGemini;
