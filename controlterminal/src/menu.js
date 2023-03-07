import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

function Menu() {

  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate('/Menu/Burgers');
  }
  const items = [
    { name: "Burgers", image: "https://www.forceetsaveur.com/wp-content/uploads/2019/10/food-burger-wallpaper-preview.jpg" },
    { name: "Frites", image: "https://c4.wallpaperflare.com/wallpaper/666/302/422/food-potato-french-fries-hd-wallpaper-preview.jpg" },
    { name: "Boissons", image: "https://voyage-onirique.com/wp-content/uploads/2021/05/692432.jpg" },
    { name: "Desserts", image: "https://wallpapers.com/images/hd/assorted-cakes-and-cookies-dessert-s3nugcazto0oqwru.jpg" },
    { name: "Salades", image: "https://img.freepik.com/photos-premium/salade-tomates-concombre-oignons-rouges-feuilles-laitue_2829-1732.jpg?w=2000" },
    { name: "Menus", image: "https://previews.123rf.com/images/angelmaxmixam/angelmaxmixam1601/angelmaxmixam160100056/50819649-fond-d-%C3%A9cran-menu-pour-les-pizzerias-et-restaurants-produits-de-l-image.jpg" },  
    { name: "Sides", image: "https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d3JhcHxlbnwwfHwwfHw%3D&w=1000&q=80" },
    { name: "Kids' Meals", image: "https://www.westrock.com/-/media/images/products/folding-carton/stock-box/stockboxkidsmeal-png-c-png.png" },
    { name: "Sauces", image: "https://www.mashed.com/img/gallery/which-fast-food-restaurant-has-the-best-dipping-sauce-heres-what-mashed-fans-say-exclusive-survey/l-intro-1662132318.jpg" }
    
  ];

  return (
    <>
    <Navbar/>
    <div className="menu">
      {items.map((item, index) => (
        <div className="menu2" key={index}>
         <button className="menu2" onClick={handleEmporterClick}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </button>
        </div>
      ))}
    </div>
    </>
  );
}

export default Menu;
