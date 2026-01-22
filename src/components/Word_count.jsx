import React, { useState } from "react";

const Word_count = () => {
  const [content, useContent] = useState("");

  const word = content.trim().split(/\s+/).filter((w) => w !== "").length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-xl bg-gray-800 p-6 rounded-2xl shadow-xl">
        
        <h1 className="text-white text-2xl font-bold mb-4 text-center">
          Word Counter
        </h1>

        <textarea
          name="content"
          value={content}
          placeholder="Enter Your Text..."
          onChange={(e) => useContent(e.target.value)}
          className="w-full h-40 bg-gray-700 text-white p-4 rounded-xl outline-none resize-none
                     focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
        ></textarea>

        <p className="text-white text-lg mt-4 text-center">
          Words: <span className="font-bold text-green-400">{word}</span>
        </p>
      </div>
    </div>
  );
};

export default Word_count;
