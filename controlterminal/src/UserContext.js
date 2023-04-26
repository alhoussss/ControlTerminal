import React, { createContext, useState } from "react";
import{
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import {auth} from "./firebase-config";




export const UserContext = createContext()

function UsersContext(props){

    const [Valeur2, setValeur2] = useState("")
    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);
    
    const signup = (name, password) => createUserWithEmailAndPassword(auth, name, password)
    return(

        <UserContext.Provider value={{Valeur2,setValeur2:(Valeurs2)=>setValeur2(Valeurs2), signup}}>
            
           
          {props.children}

        </UserContext.Provider>
       

    )
}

export default UsersContext;