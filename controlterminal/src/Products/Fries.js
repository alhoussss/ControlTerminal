import React from "react";
import Navbar from "../navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Fries() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate("/Menu/Fries");
  };
}
