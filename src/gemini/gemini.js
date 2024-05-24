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
            text: `You have to build a json and that json we will use to create react component. So try to give the json alone we don't need any other content.
            like comments and other details.
            That json structure will be given in the example below,
            The Json structure is mainly used for the styling of the component.
            You have to generate 4 json with different design styling.
            You have to wrap to those 4 jsons in an array.
            You don't need to give any other content like comments and explanation and remainders.
            styles: {
              width: "200px",
              padding: "8px",
              border: "none",
              borderRadius: "4px",
              boxSizing: "border-box",
              backgroundColor: "#f2f2f2",
              color: "#333",
              transition: "background-color 0.3s ease",
            },
            element: "<input type='text' placeholder='Enter your password' />`,
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 50000,
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
