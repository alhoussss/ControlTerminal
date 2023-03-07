import React from "react";
import Navbar from "../navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Burger() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/Burgers");
  };
  const items = [
    {
      name: "Classic Cheeseburger",
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
      description:
        "A beef patty topped with a slice of cheese, lettuce, tomato and onions.",
    },
    {
      name: "Steakhouse Burger",
      image:
        "https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1630523299/recipe/a32ea69b366fd28012381f8eef6cf124.jpg",
    },
    {
      name: "Crispy Chicken Burger",
      image:
        "https://gofry.com.fj/wp-content/uploads/2019/04/Chicken_Burger-scaled-e1624614963511.jpg",
    },
    {
      name: "Chicken Louisiane Burger",
      image:
        "https://lh3.googleusercontent.com/UpTFaZAgYxeI3lJUaPo1MVGgIApZ1w-v6ko6HmaHf4Eo5vSDdw474JkfNfnJp7anrNAEL8lOA1Lhp36MMLQo8ydsKIUxo4fNMsqyBRs=w512-rw",
    },
    {
      name: "Swiss Mushroom Burger",
      image:
        "https://www.fastfoodpost.com/wp-content/uploads/2022/10/Applebees-Adds-New-Bourbon-Street-Mushroom-Swiss-Burger-New-Neighborhood-Double-Burger-And-New-Cinnabon-Mini-Swirls.jpg",
    },
    {
      name: "Veggie Burger",
      image:
        "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/4:3/w_3235,h_2426,c_limit/ultimate-veggie-burger.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="burgers">
        {items.map((item, index) => (
          <div className="burgers2" key={index}>
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

export default Burger;
