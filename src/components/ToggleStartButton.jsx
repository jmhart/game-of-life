import React from 'react';

const ToggleStartButton = ({ isActive, onClick }) => {
  return (
    <button onClick={onClick} className="menu-btn-start">
      {isActive ? 'Stop' : 'Start'}
    </button>
  );
};

export default ToggleStartButton;
