import { OrganismGridType, OrganismCellType } from "../types/organismTypes";
import OrganismCell from "./_organismCell";

const OrganismGrid = (props: OrganismGridType) => {
  return (
    <div className={`grid grid-rows-5 grid-cols-${props.cols} gap-1 h-screen`}>
      {props.organisms.map((organism: OrganismCellType) => (
        <OrganismCell
        key={organism.x}
          x={organism.x}
          col={organism.col}
          row={organism.row}
          nbrs={organism.nbrs}
        ></OrganismCell>
      ))}
    </div>
  );
};

export default OrganismGrid;
