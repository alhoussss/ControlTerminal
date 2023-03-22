import React from "react";
import Navbar from "../Bootstrap/navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Burger from "./Burgers";

function KidsMeals() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/KidsMeals");
  };
  return (
    <div>
      <Burger items={kidsmeals} />
    </div>
  );
}
export default KidsMeals;
