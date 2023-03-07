import "./App.css";
import Accueil from "./Accueil";
import Navbar from "./navbar";
import Menu from "./menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Burger from "./Products/Burgers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Menu/Burgers" element={<Burger />} />
        </Routes>
      </Router>
    </>
  );
}

function Card() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Accueil />
      </div>
    </>
  );
}
export default App;
