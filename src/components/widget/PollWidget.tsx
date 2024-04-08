import React, { useState, useEffect } from "react";
import ProgressBar from "../commons/ProgressBar";

interface Props {
  question: string;
  options: string[];
  questionIndex: number;
}

const PollWidget: React.FC<Props> = ({ question, options, questionIndex }) => {
  const storedVotes = localStorage.getItem(`pollvotes_${questionIndex}`);
  const initialVotes: { [key: string]: number } = storedVotes
    ? JSON.parse(storedVotes)
    : {};

  const [votes, setVotes] = useState<{ [key: string]: number }>(initialVotes);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const pollStyles: React.CSSProperties = {
    width: "330px",
    height: "250px",
    borderRadius: "20px",
    padding: "20px",
    color: "#fff",
    backgroundImage: "linear-gradient(rgb(162, 0, 255), rgb(171, 71, 188))",
    fontFamily: "Garamond",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    filter: selectedOption !== null ? "blur(0.8px)" : "none",
    transform: selectedOption !== null ? "scale(0.9)" : "none",
  };

  const optionStyles: React.CSSProperties = {
    color: "#fff",
    fontSize: "18px",
    backgroundColor: "transparent",
    border: "none",
    cursor: selectedOption === null ? "pointer" : "unset",
    marginBottom: "5px",
    fontFamily: "Garamond",
  };

  const listStyles: React.CSSProperties = {
    color: "#fff",
    textAlign: "left",
    padding: "10px 0px",
    fontFamily: "Garamond",
  };

  const listWrapStyles: React.CSSProperties = {
    borderTop: "1px solid #fff",
  };

  useEffect(() => {
    localStorage.setItem(`pollvotes_${questionIndex}`, JSON.stringify(votes));
  }, [votes, questionIndex]);

  const handleVote = (option: string) => {
    const updatedVotes = { ...votes, [option]: (votes[option] || 0) + 1 };
    setVotes(updatedVotes);
    setSelectedOption(option);
  };

  const totalVotes = Object.values(votes).reduce((acc, cur) => acc + cur, 0);

  return (
    <div style={pollStyles} id="poll-widget">
      <h2>{question}</h2>
      <ol style={listWrapStyles}>
        {options.map((option, index) => (
          <li key={index} style={listStyles}>
            <button
              style={optionStyles}
              disabled={selectedOption !== null}
              onClick={() => handleVote(option)}
            >
              {option}
            </button>
            {totalVotes > 0 && selectedOption !== null && (
              <ProgressBar
                percentage={(((votes[option] || 0) / totalVotes) * 100).toFixed(
                  2
                )}
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PollWidget;
