import React from "react";
import "../src/CssFiles/Receive.css";
import { NewContext } from "./Context";

<<<<<<< HEAD




function Receive(){
    const valeur = React.useContext(NewContext);
    return(
        <>
         <h1 id="head">Receipt</h1>
        <div className="cardR">
           
            <p> {valeur.Valeur} </p>
        </div>
        </>
    )
=======
function Receive() {
  const valeur = React.useContext(NewContext);
  return (
    <div className="cardR">
      <h2> {valeur.Valeur} </h2>
    </div>
  );
>>>>>>> d03419a31f334f586d1b3c1724c40717e074f9c7
}
export default Receive;
