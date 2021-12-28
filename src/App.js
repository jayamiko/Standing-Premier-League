import { Standings, AddList } from "./components";

function App() {
  return (
    <div style={{ paddingLeft: "30px" }}>
      <h1>Football World Standings</h1>
      <hr />
      <AddList />
      <hr />
      <Standings />
    </div>
  );
}

export default App;
