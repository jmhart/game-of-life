import React, { useState } from 'react';
import Grid from './Grid';
import Menu from './Menu';

export default function GameOfLife() {
  function init() {
    const c = [];
    for (let i = 0; i < 900; i++) {
      c.push({ id: i, isActive: false });
    }
    return c;
  }

  const [cells, setCells] = useState(init());

  function handleStart() {
    setInterval(() => {
      console.log('Tick...');
    }, 1000);
  }

  function next() {}

  function handleChangeCell(cell) {
    const index = cells.findIndex(c => c.id === cell.id);
    const newCells = [...cells];
    newCells[index] = cell;
    setCells(newCells);
  }

  return (
    <div>
      <React.Fragment>
        <Grid cells={cells} handleChangeCell={handleChangeCell} />
        <Menu handleStart={handleStart} />
      </React.Fragment>
    </div>
  );
}
