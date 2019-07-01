import React from 'react';

const Cell = ({ pos, isActive, handleChangeCell }) => {
  let className = 'cell';
  if (isActive) {
    className += ' cell-active';
  }

  return (
    <div
      onClick={() => handleChangeCell({ pos, isActive: !isActive })}
      className={className}
    />
  );
};

export default Cell;
