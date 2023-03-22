import React from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Burger from "./Burgers";

function Drinks() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/Drinks");
  };
  const drink = [
    {
      name: "Cola",
      image:
        "https://www.artofdrink.com/wp-content/uploads/2010/11/homemade-cola-recipe.jpg",
      description: "Homemade Cola, our own special recipe",
    },
    {
      name: "Ice Tea",
      image:
        "https://www.artofdrink.com/wp-content/uploads/2010/11/homemade-cola-recipe.jpg",
      description: "Homemade peach iced tea made with lots of love",
    },
    {
      name: "Orange Juice",
      image:
        "https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Juice-1-of-1.jpeg",
      description: "Freshly squeezed orange juice",
    },
    {
      name: "Coffee",
      image:
        "https://www.fourseasons.com/magazine/wp-content/uploads/2015/12/azahar-coffee-shop-latte-bogota-colombia-992x672.jpg",
      description:
        "Wanna stay energized for the rest of the day? Our coffee definitely does the job",
    },
    {
      name: "Hot tea",
      image:
        "https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg",
      description:
        "Aromatic tea with a selection of fresh tasty leaves to warm you up",
    },
    {
      name: "Water",
      image: "https://pizzahampstead.com/wp-content/uploads/2016/09/45.jpg",
      description:
        "Very thirsty? Well you can't go wrong with a bottle of water",
    },
  ];
  return (
    <>
      <Burger data={drink} />
    </>
  );
}
export default Drinks;
