import React from "react";
import "../src/CssFiles/Receive.css";
import { NewContext } from "./Context";

function Receive() {
  const valeur = React.useContext(NewContext);
  return (
    <div className="cardR">
      <h2> {valeur.Valeur} </h2>
    </div>
  );
}
export default Receive;
