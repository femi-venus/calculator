import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";
import CalculatorProvider from "./components/CalculatorProvider";

function App() {
  return (
    <div className="App">
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>
  );
}

export default App;
