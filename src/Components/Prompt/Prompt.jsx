import React, { useState } from "react";
import "./Prompt.css";
import SendIcon from "@mui/icons-material/Send";
import askGemini from "../../gemini/gemini";
import { useDispatch } from "react-redux";
import generateIcon from "../../assets/Generate Icon.png";
import CircularLoader from "../CircularLoader/CircularLoader";

const Prompt = ({ loading, setLoading }) => {
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");

  const handleSend = async () => {
    // Set loading to true when sending request
    setLoading(true);

    try {
      // Call askGemini function to get response
      const result = await askGemini(dispatch, prompt);
      console.log(result);

      // Set loading back to false after receiving response
      setLoading(false);
    } catch (error) {
      console.error("Error occurred:", error);

      // Set loading back to false in case of error
      setLoading(false);
    }
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
      <button
        className="send-icon"
        style={{ cursor: "pointer" }}
        onClick={() => handleSend()}
      >
        {loading ? (
          <div role="status" className="flex justify-center items-center">
            <CircularLoader />
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <span>
              <img src={generateIcon} alt="Generate" />
            </span>
            <span>Generate</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Prompt;
