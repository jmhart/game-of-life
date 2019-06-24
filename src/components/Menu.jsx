import React from 'react';
import StartButton from './StartButton';

const Menu = ({ handleStart }) => {
  return (
    <div className="menu">
      <StartButton onClick={handleStart} />
    </div>
  );
};

export default Menu;
