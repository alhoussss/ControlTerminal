import React from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Burger from "./Articles";

function Desserts() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/Desserts");
  };
  const dessert = [
    {
      name: "Cookie",
      price: 3,
      image:
        "https://www.realsimple.com/thmb/uwmEcWtairipZTGavdWVbkV_dqw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolatechip-cookies_300-d6a402fc30814fdf87af28be97b5fcdc.jpg",
      description:
        "Homemade cookies, three flavors to choose from : Chocolate Chip, Double Chocolate Chip, Peanut Butter",
    },
    {
      name: "Tiramisu",
      price: 4,
      image:
        "https://www.galbani.fr/wp-content/uploads/2017/07/le_veritable_tiramisu_par_il_gusto_italiano_0.png",
      description:
        "Homemade tiramisu, two flavors to choose from : Coffee, Chocolate",
    },
    {
      name: "Muffin",
      price: 3,
      image:
        "https://sugarspunrun.com/wp-content/uploads/2021/05/Best-Blueberry-Muffins-Recipe-1-of-1.jpg",
      description:
        "Homemade muffin, three flavors to choose from : Chocolate, Raspberry, Blueberry",
    },
    {
      name: "Donut",
      price: 2.5,
      image:
        "https://dessertsonadime.com/wp-content/uploads/2021/08/Baked-Glazed-Donuts-square-500x500.jpg",
      description:
        "Homemade donuts, three flavors to choose from : Glazed, Chocolate, Pink Frosted Sprinkles",
    },
    {
      name: "Sundae",
      price: 3.5,
      image:
        "https://www.dairyqueen.com/dA/a4a9c7f74f/fileAsset/strawberry-sundae.png",
      description:
        "Homemade sundae, two flavors to choose from : Caramel, Chocolate",
    },
    {
      name: "Cheesecake",
      price: 3.5,
      image:
        "https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F9f411c58-ccd5-4352-8fb4-241a8d0596b1.2Ejpeg/400x400/quality/80/crop-from/center/le-vrai-new-york-cheesecake.jpeg",
      description:
        "Homemade cheesecake, three flavors to choose from : Oreo, Pumpkin, Strawberry",
    },
  ];
  return (
    <div>
      <Burger items={dessert} />
    </div>
  );
}
export default Desserts;
