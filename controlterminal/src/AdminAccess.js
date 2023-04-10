import React from "react";
import "../src/CssFiles/Receive.css";
import { NewContext } from "./Context";
import Navbar from "./Bootstrap/navbar";





function Administrator(){
    const order = React.useContext(NewContext);
    return(
        <>
        <Navbar/>
         <h1 id="head">Orders</h1>
         <div className="cardR">
                <h4>
                    {order.Valeur}  
                </h4>
            </div>
        </>
    )
}
export default Administrator;