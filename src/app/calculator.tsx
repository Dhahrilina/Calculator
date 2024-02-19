"use client";
import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [numberContainer, setNumberContainer] = useState("");
  const numericValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const add = () => {
    setResult(result + parseFloat(numberContainer));
    setNumberContainer("");
  };
  const substract = () => {
    setResult(result - parseFloat(numberContainer));
    setNumberContainer("");
  };
  const multiply = () => {
    setResult(result * parseFloat(numberContainer));
    setNumberContainer("");
  };
  const divide = () => {
    if (parseFloat(numberContainer) === 0) {
      alert("Error: Division by zero is not allowed");
    } else {
      setResult(result / parseFloat(numberContainer));
      setNumberContainer("");
    }
  };

  const concatNumber = (value: number) =>
    setNumberContainer(numberContainer + value.toString());
  const popNumber = () => setResult(parseFloat(result.toString().slice(0, -1)));

  const numericValueContainer = numericValues.map((num) => (
    <button onClick={() => concatNumber(num)}>{num}</button>
  ));

  const reset = () => {
    setNumberContainer("");
    setResult(0);
  };
  const percentage = () => setResult(result / 100);

  const calculSqrt = () => {
    if (result < 0) {
      alert("Erreur : le nombre est negatif");
    } else {
      setResult(Math.sqrt(result));
    }
  };
  const addDicimalPoint = () => {
    if (numberContainer.includes(".") === true) {
      alert("Error:Only one decimal point is allowed");
    } else {
      setNumberContainer(numberContainer + ".");
    }
  };
  return (
    <div className="page">
      <div className="container">
        <h1>Calculator</h1>
        <b>
          <p style={{ color: "black" }}>{result}</p>
        </b>
        <div className="btn">
          {numericValueContainer}
          <button onClick={add}>+</button>
          <button onClick={substract}>-</button>
          <button onClick={() => multiply}>*</button>
          <button onClick={divide}>/</button>
          <button onClick={reset}>del</button>
          <button onClick={popNumber}>X</button>
          <button onClick={percentage}>%</button>
          <button onClick={calculSqrt}>√</button>
          <button onClick={addDicimalPoint}>
            <b>.</b>
          </button>
        </div>
      </div>
    </div>
  );
}
