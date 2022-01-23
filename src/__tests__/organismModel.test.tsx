import organismModel from "../organismModel";

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
