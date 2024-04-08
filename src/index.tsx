import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const questions = [
  {
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Green"],
  },
  {
    question: "What is your favorite food?",
    options: ["Pizza", "Burgers", "Pasta"],
  },
  {
    question: "What is your favorite hobby?",
    options: ["Reading", "Playing sports", "Cooking"],
  },
  {
    question: "How often do you exercise?",
    options: ["Every day", "A few times a week", "Rarely or never"],
  },
  {
    question: "What is your favorite season?",
    options: ["Spring", "Summer", "Winter"],
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App questions={questions} />);
