import React, { useState } from "react";
import "./Prompt.css";
import SendIcon from "@mui/icons-material/Send";
const Prompt = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="prompt-container">
      <input
        className="prompt-input"
        type="text"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <SendIcon className="send-icon" />
    </div>
  );
};

export default Prompt;
