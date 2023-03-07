import "./App.css";
import Accueil from "./Accueil";
import Navbar from "./navbar";
import Menu from "./menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/Menu" element={<Menu />} />
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
