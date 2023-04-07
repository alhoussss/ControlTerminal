import React from "react";
import "../src/CssFiles/Receive.css";
import { NewContext } from "./Context";





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
}
export default Receive