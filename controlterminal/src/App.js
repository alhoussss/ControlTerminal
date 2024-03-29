import "./CssFiles/App.css";
import Accueil from "./Accueil";
import Navbar from "./Bootstrap/navbar";
import Menu from "./menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Burger from "./Products/Articles";
import Fries from "./Products/Fries";
import Desserts from "./Products/Desserts";
import Drinks from "./Products/Drinks";
import KidsMeals from "./Products/Kids";
import Salads from "./Products/Salads";
import Sauces from "./Products/Sauces";
import Sides from "./Products/Sides";
import Menus from "./Products/Menus";
import Subscribe from "./Identification";
import LogIn from "./LogIn";
import Receive from "./Receipt";
import Burgers from "./Products/Burgers";
import Context from "./Context";
import UsersContext from "./UserContext";
import Profil from "./Profil";
import ProfilContext  from "./Profilcontext";
import Photos from "./Users";
import PhotossContext from "./Photocontext";
import PriceContext  from "./Pricecontext";


function App() {
  return (
    <>
      <Router>
        <PhotossContext>
        <ProfilContext>
          <PriceContext>
        <UsersContext>
          <Context>
            <Routes>
              <Route path="/" element={<Card />} />
              <Route path="/Subscribe" element={<Subscribe />} />
              <Route path="/Subscribe/LogIn" element={<LogIn />} />
              <Route path="/Subscribe/LogIn/Menu" element={<Menu />} />
              <Route path="/Subscribe/LogIn/Menu/Myprofil" element={<Photos />} />
              <Route path="/Subscribe/Menu" element={<Menu />} />
              <Route path="/Subscribe/Menu/Burgers"  element={<Burgers/>} />
              <Route path="/Subscribe/Menu/Burgers"  element={<Burger/>} />
              <Route path="/Subscribe/Menu/Fries" element={<Fries />} />
              <Route path="/Subscribe/Menu/Drinks" element={<Drinks />} />
              <Route path="/Subscribe/Menu/Desserts" element={<Desserts />} />
              <Route path="/Subscribe/Menu/KidsMeals" element={<KidsMeals />} />
              <Route path="/Subscribe/Menu/Salads" element={<Salads />} />
              <Route path="/Subscribe/Menu/Sauces" element={<Sauces />} />
              <Route path="/Subscribe/Menu/Sides" element={<Sides />} />
              <Route path="/Subscribe/Menu/Menus" element={<Menus/>} />
              <Route path="/Subscribe/Menu/burgers/Receive" element={<Receive/>} />
            </Routes>
          </Context>
        </UsersContext>
        </PriceContext>
        </ProfilContext>
        </PhotossContext>
      </Router>
    </>
  );
}

function Card() {
  return (
    <>
      <Profil/>
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
