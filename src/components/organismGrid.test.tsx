import { fireEvent, render, screen } from "@testing-library/react";
import OrganismGrid from "./organismGrid";

describe("Organism grid test suite", () => {
  test("organism grid classes match number of grid rows and cols test A", () => {
    const { container } = render(<OrganismGrid rows={10} cols={12} />);
    // eslint-disable-next-line testing-library/no-node-access
    const firstChild = container.firstChild;
    expect(firstChild).toHaveClass("grid-rows-10");
    expect(firstChild).toHaveClass("grid-cols-12");
  });

  test("organism grid classes match number of grid rows and cols test B", () => {
    const { container } = render(<OrganismGrid rows={6} cols={6} />);
    // eslint-disable-next-line testing-library/no-node-access
    const firstChild = container.firstChild;
    expect(firstChild).toHaveClass("grid-rows-6");
    expect(firstChild).toHaveClass("grid-cols-6");
  });

  test("Organism grid is present", async () => {
    render(<OrganismGrid rows={6} cols={6} />);
    const grid = await screen.findByTestId("organismGrid");
    expect(grid).toBeInTheDocument();
  });

  test("Organism cycle button is present", async () => {
    render(<OrganismGrid rows={6} cols={6} />);
    const button = await screen.findByTestId("btnCycle");
    expect(button).toBeInTheDocument();
    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  test("Organism grid has correct number of cells, toggles 3, then shows reset", async () => {
    render(<OrganismGrid rows={6} cols={6} />);
    const cells = await screen.findAllByTestId("cell-outer");
    expect(cells).toHaveLength(36);

    const firstCell = cells[0];
    const secondCell = cells[1];
    const thirdCell = cells[2];

    fireEvent(
      firstCell,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      secondCell,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      thirdCell,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const alivecells = await screen.findAllByTestId("cell-inner-alive");
    expect(alivecells).toHaveLength(3);

    const button = await screen.findByTestId("btnCycle");
    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const resetButton = await screen.findByTestId("btnReset");
    expect(resetButton).toBeInTheDocument();
    fireEvent(
      resetButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
