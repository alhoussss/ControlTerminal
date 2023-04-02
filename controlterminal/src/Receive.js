import React from "react";
import "../src/CssFiles/Receive.css";
import { PriceContext } from "./Products/Articles";




function Receive(){
    const value = React.useContext(PriceContext); 
    return(
        <div className="cardR">
            <h2> {value}</h2>
        </div>
    )
}
export default Receive