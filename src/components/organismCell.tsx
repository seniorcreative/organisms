import { OrganismCellPropsType } from "../types/organismTypes";

const OrganismCell = (props: OrganismCellPropsType) => {
  const alive: boolean = props.alive;

  return (
    <div
      data-testid="cell-outer"
      className="flex justify-center items-center"
      onMouseEnter={(m: React.MouseEvent) => {
        if (m.buttons === 1) {
          props.setAlive(props.x);
        }
      }}
      onClick={() => {
        props.toggleAlive(props.x);
      }}
    >
      <div
        data-testid={`cell-inner-${alive ? "alive" : "dead"}`}
        className={`cursor-pointer 
        w-4 
        h-4
        md:w-4
        md:h-4
        rounded-lg 
        transition 
        transition-all 
        flex 
        items-center 
        justify-center 
        select-none 
        ${alive ? "bg-lime-500" : "bg-zinc-700"}`}
      >
        {}
      </div>
    </div>
  );
};

export default OrganismCell;
