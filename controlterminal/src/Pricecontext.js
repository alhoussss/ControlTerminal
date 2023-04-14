import React, { createContext, useState } from "react";





export const PriceContext = createContext()

function PricesContext(props){

    const [TotalPrice, setTotalPrice] = useState("")
    
    return(

        <PriceContext.Provider value={{TotalPrice,setTotalPrice:(TotalPrice)=>setTotalPrice(TotalPrice)}}>
            
           
          {props.children}

        </PriceContext.Provider>
       

    )
}

export default PricesContext;