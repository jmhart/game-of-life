import React from 'react';
import Cell from './Cell';

const Grid = ({ cells, handleChangeCell }) => {
  return (
    <div className="grid">
      {cells.map(c => (
        <Cell
          key={c.id}
          id={c.id}
          isActive={c.isActive}
          handleChangeCell={handleChangeCell}
        />
      ))}
    </div>
  );
};

export default Grid;
