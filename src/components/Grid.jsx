import React from 'react';
import Cell from './Cell';

const Grid = ({ cells }) => {
  return (
    <div className="grid">
      {cells.map(c => (
        <Cell key={c.id} isActive={c.isActive} />
      ))}
    </div>
  );
};

export default Grid;
