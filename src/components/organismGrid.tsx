import { useState } from "react";

import { OrganismGridType, OrganismCellType } from "../types/organismTypes";
import OrganismCell from "./organismCell";
import OrganismModel from "../models/organismModel";

const OrganismGrid = (props: OrganismGridType) => {
  const [organisms, setOrganisms] = useState(
    OrganismModel(props.rows, props.cols)
  );

  const toggleAliveMethod = (x: number) => {
    organisms[x - 1].alive = !organisms[x - 1].alive;
    setOrganisms([...organisms]);
    // ALIVE CELLS
    const aliveCells: OrganismCellType[] = organisms.filter(
      (organism: OrganismCellType) => organism.alive
    );
    setAliveCellCount(aliveCells.length);
  };

  const [aliveCellCount, setAliveCellCount] = useState(0);

  // - A Cell who "comes to life" outside the board should wrap at the other side of the board.
  const deaths: number[] = [];
  const births: number[] = [];
  const cycle = () => {
    // ALIVE CELLS
    const aliveCells: OrganismCellType[] = organisms.filter(
      (organism: OrganismCellType) => organism.alive
    );
    // RULES
    // - A Cell with fewer than two live neighbours dies of under-population.
    // - A Cell with more than 3 live neighbours dies of overcrowding.
    aliveCells.forEach((organism: OrganismCellType) => {
      const aliveNeighbours: number = Object.keys(organism.nbrs).filter(
        (neighbourKey: any) =>
          organisms[Object(organism.nbrs)[neighbourKey] - 1].alive
      ).length;
      if (aliveNeighbours < 2 || aliveNeighbours > 3) {
        deaths.push(organism.x);
      }
    });

    // DEAD CELLS
    const deadCells: OrganismCellType[] = organisms.filter(
      (organism: OrganismCellType) => !organism.alive
    );

    // RULES
    // - An empty Cell with exactly 3 live neighbours "comes to life".
    deadCells.forEach((organism: OrganismCellType) => {
      const aliveNeighbours: number = Object.keys(organism.nbrs).filter(
        (neighbourKey: any) =>
          organisms[Object(organism.nbrs)[neighbourKey] - 1].alive
      ).length;
      if (aliveNeighbours === 3) {
        births.push(organism.x);
      }
    });

    // Loop over the deaths
    deaths.forEach((x: number) => {
      organisms[x - 1].alive = false;
    });
    // Loop over the births
    births.forEach((x: number) => {
      organisms[x - 1].alive = true;
    });

    setOrganisms([...organisms]);
  };

  const reset = () => {
    setOrganisms(OrganismModel(props.rows, props.cols));
    setAliveCellCount(0);
  };

  const gridClasses = `
  mt-6 
  p-3 
  grid 
  gap-1
  md:gap-2
  grid-flow-row 
  grid-rows-${props.rows} 
  grid-cols-${props.cols}`;

  return (
    <>
      <div data-testid="organismGrid" className={gridClasses}>
        {organisms.map((organism: OrganismCellType) => (
          <OrganismCell
            key={organism.x}
            x={organism.x}
            col={organism.col}
            row={organism.row}
            nbrs={organism.nbrs}
            alive={organism.alive}
            toggleAlive={toggleAliveMethod}
          ></OrganismCell>
        ))}
      </div>
      <div className="container flex flex-col items-center py-4">
        <button
          type="button"
          data-testid="btnCycle"
          className="rounded p-2 
          rounded-2 
          bg-gray-200 
          disabled:bg-gray-600
          w-1/2 
          text-2xl 
          md:w-1/3
          md:text-xl 
          text-black"
          disabled={aliveCellCount === 0}
          onClick={() => {
            cycle();
          }}
        >
          {aliveCellCount === 0 ? "Select Cells" : "Next Cycle"}
        </button>
        <button
          type="button"
          className="
          text-lime-500 
          text-xl
          p-3 
          disabled:hidden"
          disabled={aliveCellCount === 0}
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default OrganismGrid;
