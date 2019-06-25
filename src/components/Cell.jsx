import React, { useEffect } from 'react';

const Cell = ({ id, isActive, handleChangeCell }) => {
  let className = 'cell';
  if (isActive) {
    className += ' cell-active';
  }

  return (
    <div
      onClick={() => handleChangeCell({ id, isActive: !isActive })}
      className={className}
    />
  );
};

export default Cell;
