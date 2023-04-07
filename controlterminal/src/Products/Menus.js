import React from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Burger from "./Articles";

function Menus() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/Menus");
  };
  const menu = [
    {
      name: "Classic Cheeseburger Meal",
      price: 12.99,
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
      description: "+ Fries + Drink",
    },
    {
      name: "Steakhouse Burger Meal",
      price: 11.99,
      image:
        "https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1630523299/recipe/a32ea69b366fd28012381f8eef6cf124.jpg",
      description: "+ Fries + Drink",
    },
    {
      name: "Crispy Chicken Burger Meal",
      price: 12.5,
      image:
        "https://gofry.com.fj/wp-content/uploads/2019/04/Chicken_Burger-scaled-e1624614963511.jpg",
      description: "+ Fries + Drink",
    },
    {
      name: "Chicken Louisiane Burger Meal",
      price: 12,
      image:
        "https://lh3.googleusercontent.com/UpTFaZAgYxeI3lJUaPo1MVGgIApZ1w-v6ko6HmaHf4Eo5vSDdw474JkfNfnJp7anrNAEL8lOA1Lhp36MMLQo8ydsKIUxo4fNMsqyBRs=w512-rw",
      description: "+ Fries + Drink",
    },
    {
      name: "Swiss Mushroom Burger Meal",
      price: 14,
      image:
        "https://www.fastfoodpost.com/wp-content/uploads/2022/10/Applebees-Adds-New-Bourbon-Street-Mushroom-Swiss-Burger-New-Neighborhood-Double-Burger-And-New-Cinnabon-Mini-Swirls.jpg",
      description: "+ Fries + Drink",
    },
    {
      name: "Veggie Burger Meal",
      price: 13.99,
      image:
        "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/4:3/w_3235,h_2426,c_limit/ultimate-veggie-burger.jpg",
      description: "+ Fries + Drink",
    },
  ];
  return (
    <div>
      <Burger items={menu} />
    </div>
  );
}
export default Menus;
