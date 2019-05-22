import React from "react";

const StartButton = () => {
  return (
    <button
      onClick={() => console.log("Start clicked")}
      className="menu-btn-start"
    >
      Start
    </button>
  );
};

export default StartButton;
