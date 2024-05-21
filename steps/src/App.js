import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [stepCount, setStepCount] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (stepCount > 1) setStepCount((stepCount) => stepCount - 1);
  }
  function handleNext() {
    if (stepCount < 3) setStepCount((stepCount) => stepCount + 1);
  }

  function handleClose() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={stepCount >= 1 && stepCount < 2 ? "active" : ""}>
              1
            </div>
            <div className={stepCount >= 2 && stepCount < 3 ? "active" : ""}>
              2
            </div>
            <div className={stepCount >= 3 && stepCount < 4 ? "active" : ""}>
              3
            </div>
          </div>

          <p className="message">
            Step {stepCount}: {messages[stepCount - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
