import { createContext, useContext, useReducer } from "react";

type OrganismAction =
  | { type: "SET_ROWS"; text: number }
  | { type: "SET_COLS"; text: number }

type OrganismState = {
  rows: number;
  cols: number
};

type OrganismDispatch = (action: OrganismAction) => void;
type OrganismProviderProps = { children: React.ReactNode };

const OrganismContext = createContext<
  { state: OrganismState; dispatch: OrganismDispatch } | undefined
>(undefined);

const OrganismReducer = (state: OrganismState, action: OrganismAction) => {
  switch (action.type) {
    case "SET_ROWS": {
      state.rows = action.text;
      return state;
    }
    case "SET_COLS": {
      state.cols = action.text;
      return state;
    }
    default: {
      return state;
    }
  }
};

const OrganismProvider = ({ children }: OrganismProviderProps) => {
  const [state, dispatch] = useReducer(OrganismReducer, {
    rows: 5,
    cols: 6
  });

  const value = { state, dispatch };
  return <OrganismContext.Provider value={value}>{children}</OrganismContext.Provider>;
};

const useOrganism = () => {
  const context = useContext(OrganismContext);
  if (context === undefined) {
    throw new Error("useOrganism must be used within an OrganismProvider");
  }
  return context;
};

export { OrganismProvider, useOrganism };
