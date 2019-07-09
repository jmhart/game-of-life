import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import Menu from './Menu';
import _ from 'lodash';
import GameService from '../services/GameService';

export default function GameOfLife() {
  function init() {
    return Array.from(Array(30), () => new Array(30).fill(false));
  }
  const [cells, setCells] = useState(init());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        handleNextCells();
      }, 600);
    }
  });

  function toggleStart() {
    setIsActive(!isActive);
  }

  function handleNextCells() {
    const game = new GameService(cells);
    const nextCells = game.next();
    console.log('Setting next cells...');
    setCells(nextCells);
  }

  function toggleCell(cell) {
    const newCells = _.cloneDeep(cells);
    const { rowIndex, columnIndex } = cell.pos;
    newCells[rowIndex][columnIndex] = cell.isActive;

    setCells(newCells);
  }

  return (
    <div>
      <React.Fragment>
        <Grid cells={cells} toggleCell={toggleCell} />
        <Menu isActive={isActive} toggleStart={toggleStart} />
      </React.Fragment>
    </div>
  );
}
