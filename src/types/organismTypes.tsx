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
};

export type OrganismGridType = {
  rows: number;
  cols: number;
  organisms: OrganismCellType[];
};
