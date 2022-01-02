import {Navbar, Jumbotron} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Import Pages
import {AddPage, EditPage, DetailPage, HomePage} from "./Pages";

function App() {
  const title = "PRIMIER LEAGUE";
  return (
    <div>
      <Navbar title={title} />
      <Jumbotron />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/add" element={<AddPage />} />

          <Route exact path="/detail/:id" element={<DetailPage />} />

          <Route exact path="/edit/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
