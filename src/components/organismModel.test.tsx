import organismModel from "../models/organismModel";
import { OrganismCellType } from "../types/organismTypes";

describe("Master cell test suite", () => {
  test("central cell neighbours", () => {
    const organismCells: OrganismCellType[] = organismModel(5, 6);
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

  test("top left corner wrapping cell neighbours", () => {
    const organismCells = organismModel(5, 6);
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
    const organismCells = organismModel(5, 6);
    const cellNumber: number = 24;
    expect(organismCells[cellNumber - 1].nbrs).toEqual({
      TL: 17,
      T: 18,
      TR: 13,
      L: 23,
      R: 19,
      BL: 29,
      B: 30,
      BR: 25,
    });
  });

  test("left side wrapping cell neighbours", () => {
    const organismCells = organismModel(5, 6);
    const cellNumber: number = 7;
    expect(organismCells[cellNumber - 1].nbrs).toEqual({
      TL: 6,
      T: 1,
      TR: 2,
      L: 12,
      R: 8,
      BL: 18,
      B: 13,
      BR: 14,
    });
  });

  test("bottom cell neighbours", () => {
    const organismCells = organismModel(5, 6);
    const cellNumber: number = 27;
    expect(organismCells[cellNumber - 1].nbrs).toEqual({
      TL: 20,
      T: 21,
      TR: 22,
      L: 26,
      R: 28,
      BL: 2,
      B: 3,
      BR: 4,
    });
  });
});
