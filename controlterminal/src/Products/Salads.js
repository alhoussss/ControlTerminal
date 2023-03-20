import React from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Burger from "./Burgers";

function Salads() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/Salads");
  };
  const salad = [
    {
      name: "Chicken Ceasar Salad",
      image:
        "https://thewoodenskillet.com/wp-content/uploads/2021/08/grilled-chicken-caesar-salad-recipe-1.jpg",
      description:
        "green salad of romaine with a highly seasoned dressing of pounded anchovies, olive oil, lemon juice, egg, chicken, bread and Parmesan cheese, garnished with croutons",
    },
    {
      name: "Greek Salad",
      image:
        "https://www.simplyrecipes.com/thmb/hcdnhU89fQgsmMkeppMwHx4TKnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__08__dads-greek-salad-horiz-a-1600-bc71b85bc907414a9bb3179a923b58fc.jpg",
      description:
        "A rough country salad of juicy tomatoes, crisp cucumber, sliced red onion, green pepper, crumbly feta cheese and plump Kalamata olives",
    },
    {
      name: "Pasta Salad",
      image:
        "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fbd5bbcce40edf5ea5bf0d8210b1c742db491c5e6",
      description:
        "Fresh and easy pasta salad packed with crisp vegetables, fresh mozzarella, and tossed with a simple homemade dressing",
    },
    {
      name: "Salade Nicoise",
      image:
        "https://www.simplyrecipes.com/thmb/P1zvV395CKAZSOj6QKbK7u46fgQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Nicoise-Salad-LEAD-10-142a737d4d3541f28c5bc330355b2f65.jpg",
      description:
        " French salad with tuna, green beans, hard boiled eggs, tomatoes, and potatoes that's hearty enough for a main dish",
    },
    {
      name: "Coleslaw",
      image:
        "https://www.simplyrecipes.com/thmb/zo53Nx9Z_E7xDmH80Ew5Q-icyAI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Classic-Coleslaw-LEAD-2-cf660416c9fa4bbb83b40bfcabb1d106.jpg",
      description:
        "Cold salad  made from sliced or chopped raw cabbage mixed with a dressing made with mayonnaise or vinegar. Also includes onions and carrots.",
    },
    {
      name: "Tabbouleh",
      image:
        "https://www.twopeasandtheirpod.com/wp-content/uploads/2012/09/Tabbouleh-Salad-500x427.jpg",
      description:
        "Traditional tabouli salad recipe with parsley, mint, bulgur wheat, finely chopped vegetables and a zesty dressing. A Lebanese delight.",
    },
  ];
  return (
    <>
      <Burger data={salad} />
    </>
  );
}
