import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyATgAHxSoyMzAot_l40ogLpbN2PqPJwHBU");

const askGemini = async (msg) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "you have to give me html,css 4 different alternative design in code",
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

  const result = await chat.sendMessage(msg);

  const response = await result.response;

  const text = response.text();
  console.log(text, "the text");

  return text;
};

 export default askGemini;


