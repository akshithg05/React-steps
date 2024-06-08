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
      {/* <Steps /> */}
      <StepMessage stepCount={1}>
        <p>Pass in Content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage stepCount={1}>
        <p>Read Children Prop</p>
        <p>😎</p>
      </StepMessage>
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

          <StepMessage stepCount={stepCount}>
            {messages[stepCount - 1]}
            <div className="buttons">
              <Button
                textColor="#e7e7e7e"
                bgColor="#bbb"
                handleToggle={() =>
                  alert(`Learn More how to ${messages[stepCount - 1]}`)
                }
              >
                Learn More
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              handleToggle={handlePrevious}
            >
              👈 Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              handleToggle={handleNext}
            >
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, handleToggle, children }) {
  return (
    <button
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
      onClick={handleToggle}
    >
      {children}
    </button>
  );
}

function StepMessage({ stepCount, children }) {
  return (
    <div className="message">
      <h3>Step {stepCount}</h3> {children}
    </div>
  );
}
