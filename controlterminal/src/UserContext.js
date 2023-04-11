import React, { createContext, useState } from "react";





export const UserContext = createContext()

function UsersContext(props){

    const [Valeur2, setValeur2] = useState("")
    
    return(

        <UserContext.Provider value={{Valeur2,setValeur2:(Valeurs2)=>setValeur2(Valeurs2)}}>
            
           
          {props.children}

        </UserContext.Provider>
       

    )
}

export default UsersContext;