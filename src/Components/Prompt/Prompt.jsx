import React, { useState } from "react";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  return (
    <div>
      <input type="text" onChange={setPrompt(value)} />
    </div>
  );
};

export default Prompt;
