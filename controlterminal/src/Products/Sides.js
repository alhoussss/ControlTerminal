import React from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Burger from "./Articles";

function Sides() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/Sides");
  };

  const side = [
    {
      name: "Chicken Wrap",
      image:
        "https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Buffalo-Chicken-Wrap-3.jpg",
      description:
        "Our juicy buffalo chicken wrap layered on crunchy fresh veggies and our special sauce to die for",
    },
    {
      name: "Chicken Wings",
      image:
        "https://www.thespruceeats.com/thmb/CWfeSCngoL5zOxlR2tsBWETtZ3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg",
      description:
        "Deep-fried unbreaded chicken wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter",
    },
    {
      name: "Nuggets",
      image:
        "https://www.aheadofthyme.com/wp-content/uploads/2020/06/easy-homemade-chicken-nuggets-8.jpg",
      description:
        "Large chunks of real white meat chicken battered and fried into nugget perfection",
    },
    {
      name: "Mozzarella Sticks",
      image:
        "https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-1-of-1.jpg",
      description:
        "Sticks of mozzarella cheese that are coated in seasoned Italian breadcrumbs, then deep fried until golden brown",
    },
    {
      name: "Nacho Chips",
      image:
        "https://lilluna.com/wp-content/uploads/2022/05/tortilla-chips-final-resize-7.jpg",
      description: "Homemade Chips, homemade sauces, your home to enjoy",
    },
    {
      name: "Apple Pie",
      image: "https://i.ytimg.com/vi/gWCvakWIVg4/maxresdefault.jpg",
      description:
        "This could've been in the dessert section, but our boss insisted it goes here. Either way it's delicious",
    },
  ];

  return (
    <div>
      <Burger items={side} />
    </div>
  );
}
export default Sides;
