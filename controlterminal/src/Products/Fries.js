import React from "react";
import "../CssFiles/App.css";
import Burger from "./Articles";

function Fries() {
  const frites = [
    {
      name: "Classic French Fries",
      price: 7,
      image:
        "https://www.nutmegnanny.com/wp-content/uploads/2021/02/garlic-parmesan-air-fryer-french-fries-6.jpg.webp",
      description:
        "Are you looking for a description for french fries? Well then ours are simply of the highest quality !",
    },
    {
      name: "Tex Mex Fries",
      price: 7,
      image:
        "https://www.thefoodjoy.com/wp-content/uploads/2019/08/cheese-fries-3.jpg",
      description:
        "French fries topped with our special cheddar sauce, fried onions, bacon and thinly sliced leeks",
    },
    {
      name: "Onion Rings",
      price: 7,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2022/06/Onion-Rings-Recipe-5.jpg",
      description: "Onion rings made with love",
    },
    {
      name: "Curly Fries'",
      price: 7,
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7ca9b307befa43d3b29d510997c50430/bfv8713_Curly_Fries-FB1080.jpg?resize=1200:*",
      description:
        "They are not just curly, they're seasoned with the best combination possible of salt, paprika, cumin and garlic powder",
    },
    {
      name: "Sweet Potato Fries",
      price: 7,
      image:
        "https://debraklein.com/wp-content/uploads//2017/01/Sweet-Potato-Fries-14.jpg",
      description:
        "A variant of potato chips produced using sweet potatoes instead of white potatoes. The healthier option",
    },
    {
      name: "Potato Wedges",
      price: 7,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/potato-wedges-recipe.jpg",
      description:
        "Salt, pepper and paprika are the special ingredients for these amazing wedges",
    },
  ];
  return (
    <div>
      <Burger items={frites} />
    </div>
  );
}
export default Fries;
