import OrganismModel from "./organismModel";

function App() {
  const cellData = OrganismModel();
  return <code className="text-left">{JSON.stringify(cellData)}</code>;
}

export default App;
