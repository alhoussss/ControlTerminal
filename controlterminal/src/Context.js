import React, { createContext, useState } from "react";




export const NewContext = createContext()
/*export const UserContext = createContext()*/

function Context(props){

    const [Valeur, setValeur] = useState([])
    /*const [Valeur2, setValeur2] = useState("")*/
    
    return(

        <NewContext.Provider value={{Valeur,setValeur:(Valeurs)=>setValeur([...Valeur,Valeurs])/*,Valeur2,setValeur2:(Valeurs2)=>setValeur2(Valeurs2)*/}}>
            
           
          {props.children}

        </NewContext.Provider>

    )
}

export default Context;