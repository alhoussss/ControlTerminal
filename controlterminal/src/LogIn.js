import React, { useState } from "react";
import "./Log.css";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";

function LogIn(){
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmporterClick = () => {
        navigate('/Subscribe/LogIn/Menu');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            handleEmporterClick();
        }
    }

    return(
       
        email == "admin" & password == "admin" ?(
            <>
            <Admin/>
            </>
        ): (
        
        <form className="forms" onSubmit={handleSubmit}>
            <p>Login</p>
            <div className="group">
                <input required={true} className="main-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <span className="highlight-span"></span>
                <label className="label-email">Email</label>
            </div>
            <div className="container-1">
                <div className="group">
                    <input required={true} className="main-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <span className="highlight-span"></span>
                    <label className="label-email">password</label>
                </div>
            </div><br/>
            <label class="checkbox">
                <a>I agree to the</a> <a href="#">terms and conditions</a>
                <input type="checkbox"/>
                    
            </label>
            <button className="submit" disabled={!email || !password}>submit</button>
        </form>)
        
    )
}

export default LogIn;





