import organismModel from "./organismModel";

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
