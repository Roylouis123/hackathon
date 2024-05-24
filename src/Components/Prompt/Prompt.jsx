import React, { useState } from "react";
import "./Prompt.css";
import SendIcon from "@mui/icons-material/Send";
const Prompt = () => {
  const [prompt, setPrompt] = useState("");

  const callPrompt = () => {
    console.log(prompt);
  };
  return (
    <div className="prompt-container">
      <input
        className="prompt-input"
        type="text"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <SendIcon className="send-icon" onClick={callPrompt} />
    </div>
  );
};

export default Prompt;
