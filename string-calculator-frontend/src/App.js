// src/App.js
import React, { useState } from "react";
import { add } from "./utils/calculator";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    try {
      const calculation = add(input);
      setResult(calculation);
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
