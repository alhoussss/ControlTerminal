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
}
