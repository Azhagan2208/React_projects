import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  // common button style
  const btnStyle =
    "bg-gray-700 text-white text-xl py-4 rounded-xl hover:bg-gray-600 active:scale-95 transition";

  const opStyle =
    "bg-orange-500 text-white text-xl py-4 rounded-xl hover:bg-orange-400 active:scale-95 transition";

  const clearStyle =
    "bg-red-500 text-white text-xl py-4 rounded-xl hover:bg-red-400 active:scale-95 transition";

  const equalStyle =
    "bg-green-500 text-white text-xl py-4 rounded-xl hover:bg-green-400 active:scale-95 transition";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-[320px] bg-gray-800 p-5 rounded-2xl shadow-xl">
        
        {/* Display */}
        <div className="bg-black text-white text-right text-3xl px-4 py-5 rounded-xl mb-4 overflow-x-auto">
          {input === "" ? "0" : input}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={() => handleClick("7")} className={btnStyle}>7</button>
          <button onClick={() => handleClick("8")} className={btnStyle}>8</button>
          <button onClick={() => handleClick("9")} className={btnStyle}>9</button>
          <button onClick={() => handleClick("+")} className={opStyle}>+</button>

          <button onClick={() => handleClick("4")} className={btnStyle}>4</button>
          <button onClick={() => handleClick("5")} className={btnStyle}>5</button>
          <button onClick={() => handleClick("6")} className={btnStyle}>6</button>
          <button onClick={() => handleClick("-")} className={opStyle}>-</button>

          <button onClick={() => handleClick("1")} className={btnStyle}>1</button>
          <button onClick={() => handleClick("2")} className={btnStyle}>2</button>
          <button onClick={() => handleClick("3")} className={btnStyle}>3</button>
          <button onClick={() => handleClick("*")} className={opStyle}>*</button>

          <button onClick={handleClear} className={clearStyle}>C</button>
          <button onClick={() => handleClick("0")} className={btnStyle}>0</button>
          <button onClick={handleEqual} className={equalStyle}>=</button>
          <button onClick={() => handleClick("/")} className={opStyle}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
