import GameService from './GameService';

describe('get neighbors', () => {
  it('should return neighbors from every direction', () => {
    const cells = [[1, 2, 3], [4, 0, 5], [6, 7, 8]];
    const game = new GameService(cells);
    const result = game.getNeighbors(1, 1);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should return neighbors from left, right, bottom, bottom-left, bottom-right', () => {
    const cells = [[1, 0, 2], [3, 4, 5], [6, 7, 8]];
    const game = new GameService(cells);
    const result = game.getNeighbors(0, 1);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return neighbors from left, right, top, top-left, top-right', () => {
    const cells = [[1, 2, 3], [4, 5, 6], [7, 0, 8]];
    const game = new GameService(cells);
    const result = game.getNeighbors(2, 1);

    expect(result).toEqual([4, 5, 6, 7, 8]);
  });

  it('should return neighbors from right, bottom, bottom-right', () => {
    const cells = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const game = new GameService(cells);
    const result = game.getNeighbors(0, 0);

    expect(result).toEqual([1, 3, 4]);
  });

  it('should return neighbors from top, top-right, right, bottom, bottom-right', () => {
    const cells = [[1, 2, 3], [0, 4, 5], [6, 7, 8]];
    const game = new GameService(cells);
    const result = game.getNeighbors(1, 0);

    expect(result).toEqual([1, 2, 4, 6, 7]);
  });

  it('should return neighbors from top, top-right, right', () => {
    const cells = [[1, 2, 3], [4, 5, 6], [0, 7, 8]];
    const game = new GameService(cells);
    const result = game.getNeighbors(2, 0);

    expect(result).toEqual([4, 5, 7]);
  });

  it('should return neighbors from left, bottom-left, bottom', () => {
    const cells = [[1, 2, 0], [3, 4, 5], [6, 7, 8]];
    const game = new GameService(cells);
    const result = game.getNeighbors(0, 2);

    expect(result).toEqual([2, 4, 5]);
  });

  it('should return neighbors from top-left, top, left, bottom-left, bottom', () => {
    const cells = [[1, 2, 3], [4, 5, 0], [6, 7, 8]];
    const game = new GameService(cells);
    const result = game.getNeighbors(1, 2);

    expect(result).toEqual([2, 3, 5, 7, 8]);
  });

  it('should return neighbors from top-left, top, left', () => {
    const cells = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    const game = new GameService(cells);
    const result = game.getNeighbors(2, 2);

    expect(result).toEqual([5, 6, 8]);
  });
});

describe('populated cell', () => {
  it('should die with one neighbor', () => {
    const cells = [
      [true, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBeFalsy();
  });

  it('should die with no neighbors', () => {
    const cells = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBeFalsy();
  });

  it('should die with four neighbors', () => {
    const cells = [
      [false, true, true],
      [true, true, false],
      [true, false, false]
    ];
    const game = new GameService(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBeFalsy();
  });

  it('should die with more than four neighbors', () => {
    const cells = [
      [true, true, true],
      [true, true, false],
      [true, false, false]
    ];
    const game = new GameService(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBeFalsy();
  });

  it('should survive with two neighbors', () => {
    const cells = [
      [true, true, false],
      [false, true, false],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBeTruthy();
  });

  it('should survive with three neighbors', () => {
    const cells = [
      [true, true, true],
      [false, true, false],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBeTruthy();
  });
});

describe('empty cell', () => {
  it('should populate with three neighbors', () => {
    const cells = [
      [true, true, true],
      [false, false, false],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.evalCell(1, 1);

    expect(result).toBeTruthy();
  });

  it('should not populate with two neighbors if cell is top right corner', () => {
    const cells = [
      [false, false, false],
      [true, true, true],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.evalCell(0, 2);

    expect(result).toBeFalsy();
  });
});

describe('next', () => {
  it('should return all zeros if there are no populated cells', () => {
    const cells = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.next();
    expect(result).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]);
  });

  it('should return all zeros if there is one populated cell', () => {
    const cells = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.next();
    expect(result).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]);
  });

  it('should return all zeros if there is two adjacent populated cell', () => {
    const cells = [
      [false, false, false],
      [false, true, true],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.next();
    expect(result).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]);
  });

  it('should return a tub if cells are a tub', () => {
    const cells = [
      [false, true, false],
      [true, false, true],
      [false, true, false]
    ];
    const game = new GameService(cells);
    const result = game.next();
    expect(result).toEqual([
      [false, true, false],
      [true, false, true],
      [false, true, false]
    ]);
  });

  it('should return a block if cells are a block', () => {
    const cells = [
      [false, false, false],
      [true, true, false],
      [true, true, false]
    ];
    const game = new GameService(cells);
    const result = game.next();
    expect(result).toEqual([
      [false, false, false],
      [true, true, false],
      [true, true, false]
    ]);
  });

  it('should return three vertical cells if there is three horizontal cells', () => {
    const cells = [
      [false, false, false],
      [true, true, true],
      [false, false, false]
    ];
    const game = new GameService(cells);
    const result = game.next();
    expect(result).toEqual([
      [false, true, false],
      [false, true, false],
      [false, true, false]
    ]);
  });
});
