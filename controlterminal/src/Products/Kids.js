import React from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Burger from "./Articles";

function KidsMeals() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/KidsMeals");
  };
  const kids = [
    {
      name: "Mac & Cheese",
      price: 5.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIFYwm6Y8Nu5XJJQQ0LhTE-j232-NkKaBBw&usqp=CAU",
      description: "Cooked macaroni pasta topped with cheddar cheese",
    },
    {
      name: "Fish burger",
      price: 5.99,
      image:
        "https://theeburgerdude.com/wp-content/uploads/2023/03/Filet-No-Fish-Square-scaled-735x735.jpg",
      description: "Buns, fish pané, slice of cheese",
    },
    {
      name: "Chicken Burger",
      price: 5.99,
      image:
        "https://mcdonalds.gr/wp-content/uploads/2022/09/Chicken-Burger-1280x866px.png",
      description:
        "Simple and effective. Chicken, mayo, lettuce, the perfect combo",
    },
    {
      name: "Hotdog",
      price: 5.99,
      image:
        "https://leitesculinaria.com/wp-content/uploads/2021/05/perfect-hot-dog.jpg",
      description: "Hotdog in a bun, nothing more to add, its very good though",
    },
    {
      name: "Spaghetti Bolognaise",
      price: 5.99,
      image:
        "https://leitesculinaria.com/wp-content/uploads/2021/05/perfect-hot-dog.jpg",
      description:
        "Small portion of delicious spaghetti bolognaise style, tomato sauce and minced beef",
    },
    {
      name: "Pepperoni Pizza",
      price: 5.99,
      image:
        "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/46/29/79/pic3ji6q3.jpg",
      description: "Small sized pizza for your child to enjoy",
    },
  ];
  return (
    <div>
      <Burger items={kids} />
    </div>
  );
}
export default KidsMeals;
