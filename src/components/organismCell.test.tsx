import { render, screen } from "@testing-library/react";
import OrganismCell from "./organismCell";
import {
  OrganismCellPropsType,
  OrganismNeighboursType,
} from "../types/organismTypes";

describe("Organism grid test suite", () => {
  const defaultOrgNeighbours: OrganismNeighboursType = {
    TL: 1,
    T: 1,
    TR: 1,
    L: 1,
    R: 1,
    BL: 1,
    B: 1,
    BR: 1,
  };

  const defaultProps: OrganismCellPropsType = {
    x: 1,
    row: 1,
    col: 1,
    nbrs: defaultOrgNeighbours,
    alive: false,
    toggleAlive: () => {},
  };

  test("The element should have zinc class because it is not alive", async () => {
    render(<OrganismCell {...defaultProps} />);
    const orgCell = await screen.findByTestId("cell-inner");
    expect(orgCell).toHaveClass("bg-zinc-700");
  });
});
