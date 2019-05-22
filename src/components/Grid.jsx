import React from "react";
import Cell from "./Cell";

const Grid = ({ numCells }) => {
  let cells = [];
  for (let i = 0; i < numCells; i++) {
    cells.push({ id: i, isActive: false });
  }
  return (
    <div className="grid">
      {cells.map(c => (
        <Cell key={c.id} isActive={c.isActive} />
      ))}
    </div>
  );
};

export default Grid;
