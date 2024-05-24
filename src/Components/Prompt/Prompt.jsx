import React, { useState } from "react";
import "./Prompt.css";
import SendIcon from "@mui/icons-material/Send";
import askGemini from "../../gemini/gemini";
import { useDispatch } from "react-redux";
const Prompt = () => {
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");
  const handleSend = async () => {
    const result = await askGemini(dispatch, prompt);
    console.log(result);
  };

  return (
    <div className="prompt-container">
      <input
        className="prompt-input"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <SendIcon className="send-icon" onClick={handleSend} />
    </div>
  );
};

export default Prompt;
