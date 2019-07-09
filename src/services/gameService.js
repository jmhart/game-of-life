import cloneDeep from 'lodash.clonedeep';

export default class GameService {
  constructor(cells) {
    this.cells = cells;
  }

  next() {
    const newCells = cloneDeep(this.cells);

    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells.length; j++) {
        newCells[i][j] = this.evalCell(i, j);
      }
    }

    return newCells;
  }

  evalCell(x, y) {
    const neighbors = this.getNeighbors(x, y);
    const activeNeighbors = neighbors.filter(neighbor => neighbor);

    if (this.cells[x][y]) {
      if (activeNeighbors.length === 1) return false;
      if (activeNeighbors.length === 0) return false;
      if (activeNeighbors.length >= 4) return false;
      if (activeNeighbors.length === 2) return true;
      if (activeNeighbors.length === 3) return true;
    } else if (activeNeighbors.length === 3) return true;
    return false;
  }

  getNeighbors(x, y) {
    const neighbors = [];

    const xStart = x - 1 < 0 ? 0 : x - 1;
    const xEnd = x + 2 >= this.cells.length ? this.cells.length : x + 2;
    const yStart = y - 1 < 0 ? 0 : y - 1;
    const yEnd = y + 2 >= this.cells.length ? this.cells.length : y + 2;

    for (let i = xStart; i < xEnd; i++) {
      for (let j = yStart; j < yEnd; j++) {
        if (i !== x || j !== y) neighbors.push(this.cells[i][j]);
      }
    }
    return neighbors;
  }
}
