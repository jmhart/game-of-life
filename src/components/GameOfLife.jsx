import React, { useState, useEffect, useRef } from 'react';
import Grid from './Grid';
import Menu from './Menu';
import cloneDeep from 'lodash.clonedeep';
import GameService from '../services/GameService';

export default function GameOfLife() {
  function init() {
    return Array.from(Array(30), () => new Array(30).fill(false));
  }

  const [cells, setCells] = useState(init());
  const [isActive, setIsActive] = useState(false);

  const timeoutRef = useRef();

  useEffect(() => {
    if (isActive) {
      timeoutRef.current = setTimeout(() => {
        handleNextCells();
      }, 600);
    } else clearTimeout(timeoutRef.current);
  });

  function toggleStart() {
    setIsActive(!isActive);
  }

  function handleClear() {
    clearTimeout(timeoutRef.current);
    setIsActive(false);
    setCells(init());
  }

  function handleNextCells() {
    const game = new GameService(cells);
    const nextCells = game.next();
    setCells(nextCells);
  }

  function toggleCell(cell) {
    const newCells = cloneDeep(cells);
    const { rowIndex, columnIndex } = cell.pos;
    newCells[rowIndex][columnIndex] = cell.isActive;

    setCells(newCells);
  }

  return (
    <div>
      <React.Fragment>
        <Grid cells={cells} toggleCell={toggleCell} />
        <Menu
          isActive={isActive}
          toggleStart={toggleStart}
          handleClear={handleClear}
        />
      </React.Fragment>
    </div>
  );
}
