import React from "react";
import PollWidget from "./components/widget/PollWidget";
import "./App.css";

interface Question {
  question: string;
  options: string[];
}

interface Props {
  questions: Question[];
}

const App: React.FC<Props> = ({ questions }) => {
  const mainStyles: React.CSSProperties = {
    textAlign: "center",
  };

  const pollStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
  };

  const btnStyles: React.CSSProperties = {
    backgroundColor: "#2196F3",
    color: "#f3f3f3",
    border: "none",
    borderRadius: "10px",
    height: "30px",
    width: "100px",
    textAlign: "center",
    margin: "10px",
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };

  return (
    <div style={mainStyles}>
      <h1>Let's Go!!</h1>
      <button style={btnStyles} onClick={() => window.location.reload()}>
        Reload
      </button>
      <div style={pollStyles} id="poll-widget">
        {questions?.length > 0 &&
          questions.map((questionData: Question, index: number) => (
            <PollWidget
              key={index}
              question={questionData.question}
              options={questionData.options}
              questionIndex={index}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
