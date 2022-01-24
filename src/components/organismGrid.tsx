import { OrganismGridType, OrganismCellType } from "../types/organismTypes";

const OrganismGrid = (props: OrganismGridType) => {
  return (
    <div className={`grid grid-rows-5 grid-cols-${props.cols} gap-1 h-screen`}>
      {props.organisms.map((organism: OrganismCellType) => (
        <div className="flex justify-center items-center" key={organism.x}>
          {organism.x}
        </div>
      ))}
    </div>
  );
};

export default OrganismGrid;
