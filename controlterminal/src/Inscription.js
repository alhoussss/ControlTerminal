import React from "react";
import "./Log.css";

function LogIn(){
    return(
        <>
        <form class="form">
            <p>Login</p>
            <div class="group">
                <input required="true" class="main-input" type="text"/>
                <span class="highlight-span"></span>
                <label class="lebal-email">Email</label>
            </div>
            <div class="container-1">
                <div class="group">
                <input required="true" class="main-input" type="text"/>
                <span class="highlight-span"></span>
                <label class="lebal-email">password</label>
                </div>
            </div>
            <button class="submit">submit</button>
        </form>
        </>
    )
}
export default LogIn;