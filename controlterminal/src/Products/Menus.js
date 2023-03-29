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
  return (
    <div>
      <Burger items={menus} />
    </div>
  );
}
export default Menus;