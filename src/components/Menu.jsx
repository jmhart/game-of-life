import React from 'react';
import ToggleStartButton from './ToggleStartButton';
import ClearButton from './ClearButton';

const Menu = ({ isActive, toggleStart, handleClear }) => {
  return (
    <div className="menu">
      <ToggleStartButton isActive={isActive} onClick={toggleStart} />
      <ClearButton onClick={handleClear} />
    </div>
  );
};

export default Menu;
