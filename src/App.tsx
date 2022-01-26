import "./index.css";
import OrganismGrid from "./components/organismGrid";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <OrganismGrid rows={10} cols={12} />
    </div>
  );
};

export default App;
