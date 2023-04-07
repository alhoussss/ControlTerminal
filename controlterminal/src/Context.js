import React, { createContext, useState } from "react";
import Burger, {Receive, UserPrice} from "./Products/Articles"



export const NewContext = createContext()

function Context(props){

    const [Valeur, setValeur] = useState()
    
    return(

        <NewContext.Provider value={{Valeur,setValeur:(Valeurs)=>setValeur([...Valeur,Valeurs])}}>
            
           
          {props.children}

        </NewContext.Provider>

    )
}

export default Context;