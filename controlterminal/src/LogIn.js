import React, { useState } from "react";
import "./CssFiles/Log.css";
import { useNavigate } from "react-router-dom";
import Administrator from "./AdminAccess";
import { UserContext } from "./UserContext";
import { ProfilContext } from "./Profilcontext";
import { PhotossContext } from "./Photocontext";

function LogIn(){
    const user = React.useContext(UserContext);
    const profil = React.useContext(ProfilContext);
    const photo = React.useContext(PhotossContext);
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleEmporterClick = () => {
        navigate('/Subscribe/LogIn/Menu');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && password) {
            handleEmporterClick();
        }
    }

    return(
       
        name == "admin" & password == "admin" ?(
            <>
            <Administrator/>
            </>
        ): (
        
        <form className="forms" onSubmit={handleSubmit}>
            <p>Login</p>
            <div className="group">
                <input required={true} className="main-input" type="text" value={name}
                 onChange={(e) => setName(e.target.value)}/>
                <span className="highlight-span"></span>
                <label className="label-email">Name</label>
            </div>
            <div className="container-1">
                <div className="group">
                    <input required={true} className="main-input" type="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>
                    <span className="highlight-span"></span>
                    <label className="label-email">password</label>
                </div>
            </div>
            <button className="submit" onClick={() => {{user.setValeur2(name);profil.setProfil(name);photo.setPhoto(name)}}} 
                disabled={!name || !password}>submit</button>
        </form>)
        
    )
}

export default LogIn;





