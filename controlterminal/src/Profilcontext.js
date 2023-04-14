import React, { createContext, useState } from "react";





export const ProfilContext = createContext()

function ProfilsContext(props){

    const [Profil, setProfil] = useState("")
    
    return(

        <ProfilContext.Provider value={{Profil,setProfil:(Profil)=>setProfil(Profil)}}>
            
           
          {props.children}

        </ProfilContext.Provider>
       

    )
}

export default ProfilsContext;