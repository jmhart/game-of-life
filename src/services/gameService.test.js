import Game from './gameService';

describe('populated cell', () => {
  it('should die with one neighbor', () => {
    const cells = [[1, 0, 0], [0, 1, 0], [0, 0, 0]];
    const game = new Game(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBe(false);
  });

  it('should die with no neighbors', () => {
    const cells = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
    const game = new Game(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBe(false);
  });

  it('should die with four neighbors', () => {
    const cells = [[0, 1, 1], [1, 1, 0], [1, 0, 0]];
    const game = new Game(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBe(false);
  });

  it('should die with more than four neighbors', () => {
    const cells = [[1, 1, 1], [1, 1, 0], [1, 0, 0]];
    const game = new Game(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBe(false);
  });

  it('should survive with two neighbors', () => {
    const cells = [[1, 1, 0], [0, 1, 0], [0, 0, 0]];
    const game = new Game(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBe(true);
  });

  it('should survive with three neighbors', () => {
    const cells = [[1, 1, 1], [0, 1, 0], [0, 0, 0]];
    const game = new Game(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBe(true);
  });
});

describe('empty cell', () => {
  it('should populate with three neighbors', () => {
    const cells = [[1, 1, 1], [0, 0, 0], [0, 0, 0]];
    const game = new Game(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBe(true);
  });
});

describe('next', () => {
  it('test', () => {
    const cells = [[1, 1, 1], [0, 0, 0], [0, 0, 0]];
    const game = new Game(cells);
    game.next();
  });
});

// For a space that is 'populated':
// Each cell with one or no neighbors dies, as if by solitude.
// Each cell with four or more neighbors dies, as if by overpopulation.
// Each cell with two or three neighbors survives.

// For a space that is 'empty' or 'unpopulated'
// Each cell with three neighbors becomes populated.
