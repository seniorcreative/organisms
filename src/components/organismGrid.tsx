import { OrganismGridType, OrganismCellType } from "../types/organismTypes";
import OrganismCell from "./organismCell";
import OrganismModel from "../models/organismModel";
import { useState } from "react";

const OrganismGrid = (props: OrganismGridType) => {
  const [organisms, setOrganisms] = useState(OrganismModel(10, 12));

  const toggleAliveMethod = (x: number) => {
    organisms[x - 1].alive = !organisms[x - 1].alive;
    setOrganisms([...organisms]);
  };

  // - A Cell with 2 or 3 live neighbours lives on to the next generation.
  // - A Cell with more than 3 live neighbours dies of overcrowding.
  // - An empty Cell with exactly 3 live neighbours "comes to life".
  // - A Cell who "comes to life" outside the board should wrap at the other side of the board.

  const cycle = () => {
    // ALIVE CELLS
    const aliveCells: OrganismCellType[] = organisms.filter(
      (organism: OrganismCellType) => organism.alive
    );
    // RULE 1 - A Cell with fewer than two live neighbours dies of under-population.
    aliveCells.forEach((organism: OrganismCellType) => {
      const aliveNeighbours: number = Object.keys(organism.nbrs).filter(
        (neighbourKey: any) =>
          organisms[Object(organism.nbrs)[neighbourKey] - 1].alive
      ).length;
      console.log(
        `alive organism ${organism.x} has ${aliveNeighbours} alive neighbours`
      );
    });
  };

  return (
    <>
      <div className="grid grid-flow-row grid-rows-10 grid-cols-12 h-screen">
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
      <div className="container text-center">
        <button
          type="button"
          className="rounded p-3 rounded-2 bg-slate-100 text-xl text-black"
          onClick={() => {
            cycle();
          }}
        >
          Next
        </button>
        <button type="button" className="text-lime-500 p-2">
          Reset
        </button>
      </div>
    </>
  );
};

export default OrganismGrid;
