import React from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Burger from "./Articles";

function Sauces() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/Sauces");
  };

  const sauce = [
    {
      name: "Curry Sauce",
      image: "https://img.cuisineaz.com/660x660/2017/10/30/i133645-.jpeg",
      description:
        "An Indian gravy or sauce that is used in tandem with meat, tofu, or vegetables",
    },
    {
      name: "Honey Mustard Dressing",
      image:
        "https://deliciouslittlebites.com/wp-content/uploads/2021/07/Honey-Mustard-Dipping-Sauce-Recipe-Image-1-3.jpg",
      description:
        "A combination of herbs and spices blended into a mustard base that is sweetened with honey",
    },
    {
      name: "Garlic Dipping Sauce",
      image:
        "https://iamhomesteader.com/wp-content/uploads/2020/07/garlic-sauce-1.jpg",
      description:
        "A sauce prepared using garlic as a primary ingredient, simple as that",
    },
    {
      name: "Bechamel Sauce",
      image:
        "https://www.allrecipes.com/thmb/8IflmQv8e6YuT_SZrKyvWHNuAfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/139987-BasicBechamelSauce-mfs-2X3-0875-6d1e50cbef474dd299b5bfedead019d2.jpg",
      description:
        "A silky white sauce made from milk and thickened with butter and flour. A true French delight.",
    },
    {
      name: "Homemade Ketchup",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2021/05/Homemade-Ketchup-007.jpg",
      description: "Ketchup, but our very own, with special twist",
    },
    {
      name: "Homemade Mayonnaise",
      image:
        "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/911_1_1439208219.jpg?tr=w-800,h-1066",
      description: "Mayonnaise, but our very own, with a special twist",
    },
  ];
  return (
    <div>
      <Burger items={sauce} />
    </div>
  );
}
export default Sauces;
