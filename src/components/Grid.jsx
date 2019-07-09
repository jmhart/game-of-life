import React from 'react';
import Cell from './Cell';

const Grid = ({ cells, toggleCell }) => {
  return (
    <div className="grid">
      {cells.map((row, rowIndex) =>
        row.map((c, columnIndex) => (
          <Cell
            key={rowIndex * row.length + columnIndex}
            pos={{ rowIndex, columnIndex }}
            isActive={c}
            toggleCell={toggleCell}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
