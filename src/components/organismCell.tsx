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
        className={`cursor-pointer w-12 h-12 rounded-full transition transition-all ${
          alive ? "bg-lime-500" : "bg-zinc-800"
        }`}
      ></div>
    </div>
  );
};

export default OrganismCell;
