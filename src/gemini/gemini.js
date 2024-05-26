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

            Response:

            '''[{...},{...},{...},{...}]'''

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

            Note: You have to create a Component what user have prompted and you must give only Array of JSON.
        
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

  const result = await chat.sendMessage(
    `Give the only 4 type of react code and each type of code bottom add css for -  
    ${msg}
    - in react component with no explanation - structure code,css - code,css - code,css - code,css`
  );

  const response = await result.response;

  const text = response.text();
  console.log(text, "the text");

  const cleanedString = text.replace(/```json|```/g, "").trim();
  console.log("cleanedStr", cleanedString);
  try {
    const jsonArray = JSON.parse(cleanedString);
    dispatch(setAiResponse({ value: jsonArray }));
  } catch (error) {
    console.error("Failed to parse JSON:", error);
  }

  return text;
};

export default askGemini;
