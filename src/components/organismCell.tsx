import {OrganismCellPropsType} from '../types/organismTypes';

let mouseDown = 0;
window.addEventListener('mousedown', () => {
  mouseDown++;
});
window.addEventListener('mouseup', () => {
  mouseDown--;
});

const OrganismCell = (props: OrganismCellPropsType) => {
  const alive: boolean = props.alive;

  return (
    <div
      data-testid="cell-outer"
      className="flex justify-center items-center"
      onMouseEnter={(m: React.MouseEvent) => {
        if (mouseDown > 0) {
          props.setAlive(props.x);
        }
      }}
      onPointerEnter={(m: React.MouseEvent) => {
        if (mouseDown > 0) {
          props.setAlive(props.x);
        }
      }}

      // onClick={() => {
      //   props.toggleAlive(props.x);
      // }}
    >
      <div
        data-testid={`cell-inner-${alive ? 'alive' : 'dead'}`}
        className={`cursor-pointer 
        w-2
        h-2
        md:w-6
        md:h-6
        rounded-full
        transition 
        transition-all 
        flex 
        items-center 
        justify-center 
        select-none
        border-1 md:border-2
        ${alive ? 'bg-lime-500 border-green-600' : 'bg-zinc-700 border-slate-700'}`}>
        {}
      </div>
    </div>
  );
};

export default OrganismCell;
