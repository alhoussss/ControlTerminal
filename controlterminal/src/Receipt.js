import React from "react";
import "../src/CssFiles/Receive.css";
import { NewContext } from "./Context";
import Navbar from "./Bootstrap/navbar";





function Receive(){
    const valeur = React.useContext(NewContext);
    return(
        <>
        <Navbar/>
         <h1 id="head">Receipt</h1>
        <div className="cardR">
           
            <ul>
                <li>
                    {valeur.Valeur}
                </li>
            </ul>  
        </div>
        </>
    )
}
export default Receive;
