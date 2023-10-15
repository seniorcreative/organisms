import "./index.css";
import OrganismGrid from "./components/organismGrid";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <OrganismGrid rows={window.innerWidth < 560 ? 40 : 20} cols={36} />
    </div>
  );
};

export default App;
