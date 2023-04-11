import React from "react";
import "../src/CssFiles/Receive.css";
import { NewContext } from "./Context";
import { UserContext } from "./UserContext";
import Navbar from "./Bootstrap/navbar";

function Receive() {
    const valeur = React.useContext(NewContext);
    const user = React.useContext(UserContext)
    return (
        <>
            <Navbar />
            <div id="head">
                <h1 >Receipt</h1>
            
                <h2>{user.Valeur2}</h2>
            </div>
            <div className="cardR">
                <h4>
                    {valeur.Valeur}  
                </h4>
            </div>
        </>
    );
}

export default Receive;
