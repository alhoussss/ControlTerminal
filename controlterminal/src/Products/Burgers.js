import React from "react";
import Burger from "./Articles";

function Burgers() {
  const Sandwitch = [
    {
      name: "Classic Cheeseburger",
      price: 8.99,
      path: "/Subscribe/Menu/burgers/Receive",
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
      description:
        "A juicy beef patty topped with a slice of cheese, lettuce, fresh tomato and onions",
    },
    {
      name: "Steakhouse Burger",
      path: "/Subscribe/Menu/burgers/Receive",
      price: 7.99,
      image:
        "https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1630523299/recipe/a32ea69b366fd28012381f8eef6cf124.jpg",
      description:
        "A juicy beef patty topped with bacon, fresh tomato, melted cheese, onions, lettuce, mayonnaise and a deep smoky BBQ sauce",
    },
    {
      name: "Crispy Chicken Burger",
      path: "/Subscribe/Menu/burgers/Receive",
      price: 8.5,
      image:
        "https://gofry.com.fj/wp-content/uploads/2019/04/Chicken_Burger-scaled-e1624614963511.jpg",
      description:
        "A juicy, buttermilk-marinated chicken breast, topped with a slice of cheddar cheese, mayonnaise and fresh tomato and lettuce",
    },
    {
      name: "Chicken Louisiane Burger",
      path: "/Subscribe/Menu/burgers/Receive",
      price: 8.0,
      image:
        "https://lh3.googleusercontent.com/UpTFaZAgYxeI3lJUaPo1MVGgIApZ1w-v6ko6HmaHf4Eo5vSDdw474JkfNfnJp7anrNAEL8lOA1Lhp36MMLQo8ydsKIUxo4fNMsqyBRs=w512-rw",
      description:
        "Crispy breaded chicken topped with cheddar cheese, smoked bacon, cripsy onions , fresh lettuce, tomato, finished with a delicious cajun-style spicy sauce",
    },
    {
      name: "Swiss Mushroom Burger",
      path: "/Subscribe/Menu/burgers/Receive",
      price: 10.0,
      image:
        "https://www.fastfoodpost.com/wp-content/uploads/2022/10/Applebees-Adds-New-Bourbon-Street-Mushroom-Swiss-Burger-New-Neighborhood-Double-Burger-And-New-Cinnabon-Mini-Swirls.jpg",
      description:
        "Deliciously seasoned ground beef topped with Swiss Cheese, white mushrooms and a ravishing Worcestershire sauce",
    },
    {
      name: "Veggie Burger",
      path: "/Subscribe/Menu/burgers/Receive",
      price: 9.99,
      image:
        "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/4:3/w_3235,h_2426,c_limit/ultimate-veggie-burger.jpg",
      description:
        "A hamburger patty made with soybeans, tofu, nuts and grains, a slice of cheddar cheese, fresh lettuce, tomato, pickles and a tasty béarnaise sauce",
    },
  ];

  return (
    <div>
      <Burger items={Sandwitch} />
    </div>
  );
}
export default Burgers;
