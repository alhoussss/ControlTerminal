import React, { useState } from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";



  const items = [
    {
      name: "Classic Cheeseburger",
      price: 8.99,
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
      description:
        "A juicy beef patty topped with a slice of cheese, lettuce, fresh tomato and onions",
    },
    {
      name: "Steakhouse Burger",
      price: 8.99,
      image:
        "https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1630523299/recipe/a32ea69b366fd28012381f8eef6cf124.jpg",
      description:
        "A juicy beef patty topped with bacon, fresh tomato, melted cheese, onions, lettuce, mayonnaise and a deep smoky BBQ sauce",
    },
    {
      name: "Crispy Chicken Burger",
      price: 8.99,
      image:
        "https://gofry.com.fj/wp-content/uploads/2019/04/Chicken_Burger-scaled-e1624614963511.jpg",
      description:
        "A juicy, buttermilk-marinated chicken breast, topped with a slice of cheddar cheese, mayonnaise and fresh tomato and lettuce",
    },
    {
      name: "Chicken Louisiane Burger",
      price: 8.99,
      image:
        "https://lh3.googleusercontent.com/UpTFaZAgYxeI3lJUaPo1MVGgIApZ1w-v6ko6HmaHf4Eo5vSDdw474JkfNfnJp7anrNAEL8lOA1Lhp36MMLQo8ydsKIUxo4fNMsqyBRs=w512-rw",
      description:
        "Crispy breaded chicken topped with cheddar cheese, smoked bacon, cripsy onions , fresh lettuce, tomato, finished with a delicious cajun-style spicy sauce",
    },
    {
      name: "Swiss Mushroom Burger",
      price: 8.99,
      image:
        "https://www.fastfoodpost.com/wp-content/uploads/2022/10/Applebees-Adds-New-Bourbon-Street-Mushroom-Swiss-Burger-New-Neighborhood-Double-Burger-And-New-Cinnabon-Mini-Swirls.jpg",
      description:
        "Deliciously seasoned ground beef topped with Swiss Cheese, white mushrooms and a ravishing Worcestershire sauce",
    },
    {
      name: "Veggie Burger",
      price: 8.99,
      image:
        "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/4:3/w_3235,h_2426,c_limit/ultimate-veggie-burger.jpg",
      description:
        "A hamburger patty made with soybeans, tofu, nuts and grains, a slice of cheddar cheese, fresh lettuce, tomato, pickles and a tasty béarnaise sauce",
    },
  ];

  function Burger({ items }) {
    const [clickedItems, setClickedItems] = useState([]);
  
    const handleName = (itemName) => {
      setClickedItems([...clickedItems, itemName]);
    };
  
    const handleRemove = (index) => {
      const newClickedItems = [...clickedItems];
      newClickedItems.splice(index, 1);
      setClickedItems(newClickedItems);
    };
  
    return (
      <>
        <Navbar />
        <div className="burgers">
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <div className="burgers2" key={index}>
                <button className="menu2" onClick={() => handleName(item.name)}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <h4>{item.description}</h4>
                </button>
              </div>
            ))
          ) : (
            <p>No items to display.</p>
          )}
        </div>
        <div className="form">
          <h2 id="heading">Commande</h2>
          <ul>
            {clickedItems.map((itemName, index) => (
              <li className="name" key={index}>
                {itemName}
                <button1 className="tooltip" onClick={() => handleRemove(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="15" width="15">
                    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269
                      4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638
                      5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472
                      3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 
                      4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5
                      7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 
                      16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 
                      7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 
                      14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588
                      15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                  <span className="tooltiptext">remove</span>
                </button1>
              </li>
            ))}
          </ul>
          <button className="button3">Valider</button>
        </div>
      </>
    );
  }
  
  export default Burger;
  