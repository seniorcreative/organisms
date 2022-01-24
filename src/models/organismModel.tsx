// HELLO I AM THE START OF THE ORGANISM DATA MODEL
import { OrganismCellType } from "../types/organismTypes";

const ROWS: number = 10;
const COLS: number = 12;

const OrganismModel = () => {
  // Stage 1.
  // Input of my algorithm worked out on pen and paper and graffiti
  /*
  TL | T | TR
  L  | x | R
  BL | B | BR
  */
  const getTL = (row: number, col: number, x: number) =>
    row === 1
      ? col === 1
        ? ROWS * COLS
        : x - 1 + (ROWS - 1) * COLS
      : x - 1 - COLS;

  const getT = (row: number, col: number, x: number) =>
    row === 1 ? x + (ROWS - 1) * COLS : x - COLS;

  const getTR = (row: number, col: number, x: number) =>
    row === 1
      ? col === COLS
        ? x - 1 + (ROWS - 1) * COLS
        : x + 1 + (ROWS - 1) * COLS
      : x + 1 - COLS;

  const getL = (row: number, col: number, x: number) =>
    col === 1 ? x - 1 + COLS : x - 1;

  const getR = (row: number, col: number, x: number) =>
    col === COLS ? x + 1 - COLS : x + 1;

  const getBL = (row: number, col: number, x: number) =>
    row === ROWS
      ? col === 1
        ? x - 1 - (ROWS - 1) * COLS + COLS
        : x - 1 - (ROWS - 1) * COLS
      : x - 1 + COLS;

  const getB = (row: number, col: number, x: number) =>
    row === ROWS ? x - (ROWS - 1) * COLS : x + COLS;

  const getBR = (row: number, col: number, x: number) =>
    row === ROWS
      ? col === COLS
        ? x - ROWS * COLS + 1
        : x - (ROWS - 1) * COLS + 1
      : x + COLS + 1;

  const organismCellData: OrganismCellType[] = [];

  let row: number = 1;
  let col: number = 1;
  for (let x: number = 1; x <= ROWS * COLS; x++) {
    const newOrganismCell: OrganismCellType = {
      row,
      col,
      x,
      nbrs: {
        TL: getTL(row, col, x),
        T: getT(row, col, x),
        TR: getTR(row, col, x),
        L: getL(row, col, x),
        R: getR(row, col, x),
        BL: getBL(row, col, x),
        B: getB(row, col, x),
        BR: getBR(row, col, x),
      },
      alive: false,
    };
    organismCellData.push(newOrganismCell);
    col++;
    // After the end of each row of columns, wrap to a new line and start the column count again to build out the grid.
    if ((col - 1) % COLS === 0) {
      row++;
      col = 1;
    }
  }

  return organismCellData;
};

export default OrganismModel;
