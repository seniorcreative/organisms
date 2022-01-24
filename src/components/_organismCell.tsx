import { OrganismCellType } from "../types/organismTypes";
import { useState } from "react";

const OrganismCell = (props: OrganismCellType) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="cursor-pointer flex justify-center items-center"
      onClick={() => {
        setActive(!active);
      }}
    >
      <div
        className={`w-12 h-12 rounded-full transition transition-all ${
          active ? "bg-lime-500" : "bg-slate-200"
        }`}
      ></div>
    </div>
  );
};

export default OrganismCell;
