class Game {
  constructor(cells) {
    this.cells = cells;
  }

  cycle() {
    const newCells = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells.length; j++) {
        newCells[i][j] = this.evaluateCell(i, j);
      }
    }
    console.log(newCells);
  }

  evaluateCell(x, y) {
    const neighbors = this.getNeighbors(x, y);
    const activeNeighbors = neighbors.filter(neighbor => neighbor);

    if (this.cells[x][y]) {
      if (activeNeighbors.length === 1) return false;
      else if (activeNeighbors.length === 0) return false;
      else if (activeNeighbors.length >= 4) return false;
      else if (activeNeighbors.length === 2) return true;
      else if (activeNeighbors.length === 3) return true;
    } else {
      if (activeNeighbors.length === 3) return true;
    }
  }

  getNeighbors(x, y) {
    let neighbors = [];

    let xStart = x - 1 < 0 ? 0 : x - 1;
    let xEnd = x + 2 >= this.cells.length ? this.cells.length : x + 2;
    let yStart = y - 1 < 0 ? 0 : y - 1;
    let yEnd = y + 2 >= this.cells.length ? this.cells.length : y + 2;

    for (let i = xStart; i < xEnd; i++) {
      for (let j = yStart; j < yEnd; j++) {
        if (i !== x || j !== y) neighbors.push(this.cells[i][j]);
      }
    }
    return neighbors;
  }
}

export default Game;
