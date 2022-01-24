import organismModel from "../models/organismModel";

// Tests are for a grid of 5 rows x 6 cols

test("central cell neighbours", () => {
  const organismCells = organismModel();
  const cellNumber: number = 16;
  expect(organismCells[cellNumber - 1].nbrs).toEqual({
    TL: 9,
    T: 10,
    TR: 11,
    L: 15,
    R: 17,
    BL: 21,
    B: 22,
    BR: 23,
  });
});

test("top left wrapping cell neighbours", () => {
  const organismCells = organismModel();
  const cellNumber: number = 1;
  expect(organismCells[cellNumber - 1].nbrs).toEqual({
    TL: 30,
    T: 25,
    TR: 26,
    L: 6,
    R: 2,
    BL: 6,
    B: 7,
    BR: 8,
  });
});

test("right side wrapping cell neighbours", () => {
  const organismCells = organismModel();
  const cellNumber: number = 12;
  expect(organismCells[cellNumber - 1].nbrs).toEqual({
    TL: 5,
    T: 6,
    TR: 7,
    L: 11,
    R: 7,
    BL: 17,
    B: 18,
    BR: 19,
  });
});
