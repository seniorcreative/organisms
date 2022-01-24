import OrganismModel from "./organismModel";
import { OrganismCellType } from "./types/organismTypes";
import OrganismGrid from "./components/organismGrid";
import "./index.css";

const App = () => {
  const organismData: OrganismCellType[] = OrganismModel();
  return (
    <div className="container mx-auto px-4">
      <OrganismGrid rows={5} cols={6} organisms={organismData} />
    </div>
  );
};

export default App;
