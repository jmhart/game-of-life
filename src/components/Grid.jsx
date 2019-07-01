import React from 'react';
import Cell from './Cell';

const Grid = ({ cells, handleChangeCell }) => {
  return (
    <div className="grid">
      {cells.map((row, rowIndex) =>
        row.map((c, columnIndex) => (
          <Cell
            key={rowIndex * row.length + columnIndex}
            pos={{ rowIndex, columnIndex }}
            isActive={c}
            handleChangeCell={handleChangeCell}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
