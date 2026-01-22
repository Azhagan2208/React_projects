import React, { useState } from "react";
import "./word_count.css";

const Word_count = () => {
  const [content, useContent] = useState("");

  const word = content.trim().split(/\s+/).filter((w) => w !== "").length;

  return (
    <div className="wc-bg">
      <div className="wc-card">
        <h1 className="wc-title">Word Counter</h1>

        <textarea
          name="content"
          value={content}
          placeholder="Enter Your Text..."
          onChange={(e) => useContent(e.target.value)}
          className="wc-textarea"
        ></textarea>

        <p className="wc-result">
          Words: <span>{word}</span>
        </p>
      </div>
    </div>
  );
};

export default Word_count;
