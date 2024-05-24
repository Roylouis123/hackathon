import React, { useState } from "react";
import "./Prompt.css";
import SendIcon from "@mui/icons-material/Send";
import askGemini from "../../gemini/gemini";
import { useDispatch } from "react-redux";
import generateIcon from "../../assets/Generate Icon.png";
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
        placeholder="Prompt"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button className="send-icon" onClick={handleSend()}>
        <span>
          <img src={generateIcon} />
        </span>
        <span>Generate</span>
      </button>
    </div>
  );
};

export default Prompt;
