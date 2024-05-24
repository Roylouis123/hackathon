import React, { useState } from "react";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  return (
    <div>
      <input
        className="prompt-input"
        type="text"
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
};

export default Prompt;
