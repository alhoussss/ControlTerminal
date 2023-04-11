import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <button className="button" onClick={() => navigate("/")}>
        <span></span>
        <span></span>
        <span></span>
        <span></span> <h2>GoodFood</h2>
      </button>
    </>
  );
}
export default Navbar;
