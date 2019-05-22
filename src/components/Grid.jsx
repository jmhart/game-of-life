import React from "react";
import Cell from "./Cell";

const Grid = ({ numCells }) => {
  let cells = [];
  for (let i = 0; i < numCells; i++) {
    cells.push(i);
  }
  return (
    <div className="grid">
      {cells.map(c => (
        <Cell key={c} />
      ))}
    </div>
  );
};

export default Grid;
