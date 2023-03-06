import React from "react";
import Navbar from "./Navbar";

function Menu() {
  const items = [
    { name: "Burgers", image: "https://www.forceetsaveur.com/wp-content/uploads/2019/10/food-burger-wallpaper-preview.jpg" },
    { name: "Frites", image: "https://c4.wallpaperflare.com/wallpaper/666/302/422/food-potato-french-fries-hd-wallpaper-preview.jpg" },
    { name: "Boissons", image: "https://voyage-onirique.com/wp-content/uploads/2021/05/692432.jpg" },
    { name: "Desserts", image: "https://wallpapers.com/images/hd/assorted-cakes-and-cookies-dessert-s3nugcazto0oqwru.jpg" },
    { name: "Salades", image: "https://img.freepik.com/photos-premium/salade-tomates-concombre-oignons-rouges-feuilles-laitue_2829-1732.jpg?w=2000" },
    { name: "Menus", image: "https://previews.123rf.com/images/angelmaxmixam/angelmaxmixam1601/angelmaxmixam160100056/50819649-fond-d-%C3%A9cran-menu-pour-les-pizzerias-et-restaurants-produits-de-l-image.jpg" },  
    { name: "Wrapps", image: "https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d3JhcHxlbnwwfHwwfHw%3D&w=1000&q=80" },
    { name: "Tenders", image: "https://images.squarespace-cdn.com/content/v1/569119fc1c1210fdda2defba/1589758322371-KHSZ84RTVSO0OGCPEY83/image-asset.jpeg" },
    { name: "Glaces", image: "https://voyage-onirique.com/wp-content/uploads/2019/06/coupe-glaces2.jpg" },
  ];

  return (
    <>
    <Navbar/>
    <div className="menu">
      {items.map((item, index) => (
        <div className="menu2" key={index}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
    </>
  );
}

export default Menu;
