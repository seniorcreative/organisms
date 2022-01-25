import { OrganismGridType, OrganismCellType } from "../types/organismTypes";
import OrganismCell from "./organismCell";
import OrganismModel from "../models/organismModel";
import { useState } from "react";

const OrganismGrid = (props: OrganismGridType) => {
  const ROWS: number = 12;
  const COLS: number = 12;
  const [organisms, setOrganisms] = useState(OrganismModel(ROWS, COLS));

  const toggleAliveMethod = (x: number) => {
    organisms[x - 1].alive = !organisms[x - 1].alive;
    setOrganisms([...organisms]);
  };

  // -
  // - An empty Cell with exactly 3 live neighbours "comes to life".
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
      console.log(
        `alive organism ${organism.x} has ${aliveNeighbours} alive neighbours`
      );
      if (aliveNeighbours < 2 || aliveNeighbours > 3) {
        deaths.push(organism.x);
      }
    });

    // DEAD CELLS
    const deadCells: OrganismCellType[] = organisms.filter(
      (organism: OrganismCellType) => !organism.alive
    );

    // RULES
    // - A Cell with fewer than two live neighbours dies of under-population.
    // - A Cell with more than 3 live neighbours dies of overcrowding.
    deadCells.forEach((organism: OrganismCellType) => {
      const aliveNeighbours: number = Object.keys(organism.nbrs).filter(
        (neighbourKey: any) =>
          organisms[Object(organism.nbrs)[neighbourKey] - 1].alive
      ).length;
      console.log(
        `dead organism ${organism.x} has ${aliveNeighbours} alive neighbours`
      );
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
    setOrganisms(OrganismModel(ROWS, COLS));
  };

  return (
    <>
      <div className={`mt-6   p-3 grid grid-flow-row grid-rows-12 grid-cols-12`}>
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
          className="rounded p-2 rounded-2 bg-slate-100 w-1/4 text-xl text-black"
          onClick={() => {
            cycle();
          }}
        >
          Next
        </button>
        <button
          type="button"
          className="text-lime-500 p-2"
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
