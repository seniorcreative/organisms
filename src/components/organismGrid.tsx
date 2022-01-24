import { OrganismGridType, OrganismCellType } from "../types/organismTypes";
import OrganismCell from "./organismCell";
import OrganismModel from "../models/organismModel";
import { useState } from "react";

const OrganismGrid = (props: OrganismGridType) => {
  const [organisms, setOrganisms] = useState(OrganismModel());

  const toggleAliveMethod = (x: number) => {
    organisms[x - 1].alive = !organisms[x - 1].alive;
    setOrganisms([...organisms]);
  };

  return (
    <>
      <div className="grid grid-flow-row grid-rows-10 grid-cols-12 gap-1 h-screen">
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
      {/* <code>{JSON.stringify(organisms)}</code> */}
    </>
  );
};

export default OrganismGrid;
