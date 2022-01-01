import {Navbar, Jumbotron} from "./components";
import Table from "./components/Table/Table";

function App() {
  const title = "PRIMIER LEAGUE";
  const standing = [
    {
      id: "1",
      club: "Chelsea Fc",
      sg: "10",
      point: "50",
    },
    {
      id: "2",
      club: "Manchester City",
      sg: "10",
      point: "59",
    },
    {
      id: "3",
      club: "Tottenham Hotspur",
      sg: "10",
      point: "45",
    },
    {
      id: "4",
      club: "Liverpool Fc",
      sg: "10",
      point: "52",
    },
  ];

  return (
    <div>
      <Navbar title={title} />
      <Jumbotron />
      <Table data={standing} />
    </div>
  );
}

export default App;
