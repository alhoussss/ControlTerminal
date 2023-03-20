import React, { useState } from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";

function Burger({ image, name, description }) {
  const [clickedItems, setClickedItems] = useState([]);

  const handleName = (itemName) => {
    setClickedItems([...clickedItems, itemName]);
  };

  const items = [
    {
      name: "Classic Cheeseburger",
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
      description:
        "A juicy beef patty topped with a slice of cheese, lettuce, fresh tomato and onions",
    },
    {
      name: "Steakhouse Burger",
      image:
        "https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1630523299/recipe/a32ea69b366fd28012381f8eef6cf124.jpg",
      description:
        "A juicy beef patty topped with bacon, fresh tomato, melted cheese, onions, lettuce, mayonnaise and a deep smoky BBQ sauce",
    },
    {
      name: "Crispy Chicken Burger",
      image:
        "https://gofry.com.fj/wp-content/uploads/2019/04/Chicken_Burger-scaled-e1624614963511.jpg",
      description:
        "A juicy, buttermilk-marinated chicken breast, topped with a slice of cheddar cheese, mayonnaise and fresh tomato and lettuce",
    },
    {
      name: "Chicken Louisiane Burger",
      image:
        "https://lh3.googleusercontent.com/UpTFaZAgYxeI3lJUaPo1MVGgIApZ1w-v6ko6HmaHf4Eo5vSDdw474JkfNfnJp7anrNAEL8lOA1Lhp36MMLQo8ydsKIUxo4fNMsqyBRs=w512-rw",
      description:
        "Crispy breaded chicken topped with cheddar cheese, smoked bacon, cripsy onions , fresh lettuce, tomato, finished with a delicious cajun-style spicy sauce",
    },
    {
      name: "Swiss Mushroom Burger",
      image:
        "https://www.fastfoodpost.com/wp-content/uploads/2022/10/Applebees-Adds-New-Bourbon-Street-Mushroom-Swiss-Burger-New-Neighborhood-Double-Burger-And-New-Cinnabon-Mini-Swirls.jpg",
      description:
        "Deliciously seasoned ground beef topped with Swiss Cheese, white mushrooms and a ravishing Worcestershire sauce",
    },
    {
      name: "Veggie Burger",
      image:
        "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/4:3/w_3235,h_2426,c_limit/ultimate-veggie-burger.jpg",
      description:
        "A hamburger patty made with soybeans, tofu, nuts and grains, a slice of cheddar cheese, fresh lettuce, tomato, pickles and a tasty béarnaise sauce",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="burgers">
        {items.map((item, index) => (
          <div className="burgers2" key={index}>
            <button className="menu2" onClick={() => handleName(item.name)}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <h4>{item.description}</h4>
            </button>
          </div>
        ))}
      </div>
      <div className="form">
        <h2 id="heading">Commande</h2>
        <ul>
          {clickedItems.map((itemName, index) => (
            <li className="name" key={index}>
              {itemName}
            </li>
          ))}
        </ul>
        <button className="button3">Valider</button>
      </div>
    </>
  );
}

export default Burger;
