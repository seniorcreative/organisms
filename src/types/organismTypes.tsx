// NB - the keys in OrganismNeighboursType are used as neigbourKeys
// OrganismNeighboursType items as objects for filtering
export type OrganismNeighboursType = {
  TL: number;
  T: number;
  TR: number;
  L: number;
  R: number;
  BL: number;
  B: number;
  BR: number;
};

export type OrganismCellType = {
  x: number;
  row: number;
  col: number;
  nbrs: OrganismNeighboursType;
  alive: boolean;
};

export type OrganismCellPropsType = {
  x: number;
  row: number;
  col: number;
  nbrs: OrganismNeighboursType;
  alive: boolean;
  toggleAlive: Function;
  setAlive: Function;
};

export type OrganismGridType = {
  rows: number;
  cols: number;
};
