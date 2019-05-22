import React from "react";

const StartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="menu-btn-start">
      Start
    </button>
  );
};

export default StartButton;
