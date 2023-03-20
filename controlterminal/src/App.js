import "./App.css";
import Accueil from "./Accueil";
import Navbar from "./Bootstrap/navbar";
import Menu from "./menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Burger from "./Products/Burgers";
import Fries from "./Products/Fries";
import Desserts from "./Products/Desserts";
import Drinks from "./Products/Drinks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Menu/Burgers" element={<Fries />} />
          <Route path="/Menu/Drinks" element={<Drinks />} />
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
