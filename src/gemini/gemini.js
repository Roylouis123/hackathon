import { GoogleGenerativeAI } from "@google/generative-ai";
 
const genAI = new GoogleGenerativeAI("AIzaSyATgAHxSoyMzAot_l40ogLpbN2PqPJwHBU");
 
const askGemini = async (msg) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
  msg = `Give the only 4 type of react code and each type of code bottom add css for -  ${msg} - in react component with no explanation - structure code,css - code,css - code,css - code,css`;
 
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "you have to give me html,css 4 different alternative design ",
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
  console.log(text, "text");
  return await generateFiles(text);
 
};
askGemini("Add button component");
export default askGemini;
 
export function extractCodeBlocks(text) {
  // This regular expression looks for code blocks marked by triple backticks
  const codeBlockPattern = /```(\w+)?\n([\s\S]*?)```/g;
  let match;
  const codeBlocks = [];
 
  // Use a while loop to find all matches in the text
  while ((match = codeBlockPattern.exec(text)) !== null) {
    // Push the captured groups into the array: [language, code]
    codeBlocks.push({
      language: match[1] || null,
      code: match[2],
    });
  }
 
  return codeBlocks;
}


export function newextractCodeBlocks(text) {
  // This regular expression looks for code blocks marked by triple backticks
  const codeBlockPattern = /```(\w+)?\n([\s\S]*?)```/g;
  let match;
  const codeBlocks = [];

  // Use a while loop to find all matches in the text
  while ((match = codeBlockPattern.exec(text))!== null) {
    // Append a newline character to the code
    const codeWithNewline = match[2] ;
    
    // Push the captured groups into the array: [language, code with newline]
    codeBlocks.push({
      language: match[1] || null,
      code: codeWithNewline,
    });
  }

  return codeBlocks;
}




const arrayValues = [];
let tempObj ={}
export const generateFiles = (data) => {
  const codeBlocks = extractCodeBlocks(data);
  codeBlocks.forEach((block, index) => {
    console.log(`Code block #${index + 1}, Language: ${block.language}`);
    console.log(block.code);
    if ((index + 1) % 2 === 0) {
       tempObj[`css`]= block.code.replace("/\n/g"," ") ;
       arrayValues.push(tempObj);
       tempObj ={}
    } else {
      tempObj[`jsx`]= block.code.replace("/\n/g"," ") ;
    }
  });
  console.log(arrayValues, "arrayValues");
  return arrayValues;
};
 