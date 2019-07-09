import React from 'react';
import ToggleStartButton from './ToggleStartButton';

const Menu = ({ isActive, toggleStart }) => {
  return (
    <div className="menu">
      <ToggleStartButton isActive={isActive} onClick={toggleStart} />
    </div>
  );
};

export default Menu;
