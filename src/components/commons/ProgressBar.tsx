import React from "react";

interface Props {
  percentage: string;
}

const ProgressBar: React.FC<Props> = ({ percentage }) => {
  const containerStyles: React.CSSProperties = {
    minWidth: "150px",
    maxWidth: "500px",
    backgroundColor: "transparent",
    borderRadius: "5px",
    padding: "2px",
    color: "#000",
    fontSize: "10px",
  };

  const fillerStyles: React.CSSProperties = {
    height: "10px",
    width: `${percentage}%`,
    backgroundColor: "#007bff",
    borderRadius: "5px",
    textAlign: "center",
    color: "#000",
    transition: "width 0.3s ease-in-out",
    border: Number(percentage) > 0 ? "0.5px solid #fff" : "none",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>{`${percentage}%`}</div>
    </div>
  );
};

export default ProgressBar;
