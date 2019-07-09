import React from 'react';

const Cell = ({ pos, isActive, toggleCell }) => {
  let className = 'cell';
  if (isActive) {
    className += ' cell-active';
  }

  return (
    <div
      onClick={() => toggleCell({ pos, isActive: !isActive })}
      className={className}
    />
  );
};

export default Cell;
