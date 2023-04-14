import React, { createContext, useState } from "react";





export const PhotossContext = createContext()

function PhotosContext(props){

    const [Photo, setPhoto] = useState("")
    
    return(

        <PhotossContext.Provider value={{Photo,setPhoto:(Photos)=>setPhoto(Photos)}}>
            
           
          {props.children}

        </PhotossContext.Provider>
       

    )
}

export default PhotosContext;