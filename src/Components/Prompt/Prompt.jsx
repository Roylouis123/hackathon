import React, { useState } from "react";
import "./Prompt.css";
import SendIcon from "@mui/icons-material/Send";
import askGemini from "../../gemini/gemini";
import { useDispatch } from "react-redux";
import generateIcon from "../../assets/Generate Icon.png";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const Prompt = ({ setLoading, loading }) => {
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");

  const handleSend = async () => {
    setLoading(true);

    try {
      const result = await askGemini(dispatch, prompt);
      console.log(result);

      setLoading(false);
    } catch (error) {
      console.error("Error occurred:", error);

      setLoading(false);
    }
  };

  return (
    <div className="prompt-container">
        {/* <button className="add-prompt">
        <AddOutlinedIcon/>
        </button> */}
      <textarea
        className="prompt-input"
        placeholder="Prompt"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="send-icon"
        style={{ cursor: "pointer" }}
        onClick={() => handleSend()}
      >
        <span>
          <img src={generateIcon} alt="Generate" />
        </span>
        <span>Generate</span>
      </button>
    </div>
  );
};

export default Prompt;
