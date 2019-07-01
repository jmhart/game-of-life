import React, { useState } from 'react';
import Grid from './Grid';
import Menu from './Menu';
import _ from 'lodash';
import GameService from '../services/GameService';

export default function GameOfLife() {
  function init() {
    return Array.from(Array(30), () => new Array(30).fill(false));
  }

  const [cells, setCells] = useState(init());

  function handleStart() {
    next();
  }

  function next() {
    const game = new GameService(cells);
    const nextCells = game.next();

    setCells(nextCells);
  }

  function handleChangeCell(cell) {
    const newCells = _.cloneDeep(cells);
    const { rowIndex, columnIndex } = cell.pos;
    newCells[rowIndex][columnIndex] = cell.isActive;

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
