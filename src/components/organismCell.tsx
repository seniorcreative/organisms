import { OrganismCellPropsType } from "../types/organismTypes";

const OrganismCell = (props: OrganismCellPropsType) => {
  const alive: boolean = props.alive;

  return (
    <div
      className="flex justify-center items-center"
      onClick={() => {
        props.toggleAlive(props.x);
      }}
    >
      <div
        className={`cursor-pointer 
        w-6 
        h-6
        md:w-12 
        md:h-12
        rounded-full 
        transition 
        transition-all 
        flex 
        items-center 
        justify-center 
        select-none 
        ${alive ? "bg-lime-500" : "bg-zinc-700"}`}
      >
        {/* {props.x} */}
      </div>
    </div>
  );
};

export default OrganismCell;
