import React from "react";
import './styles.css'

let IsLoggedIn = false;

function ConditionalRendering(){
    if (IsLoggedIn === true){
        return(
            <h1>Hello</h1>
        );
    }else {
        return(
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        );
    }
}

function Form() {
  return (
    <div className="container">
      {ConditionalRendering()}
    </div>
  );
}

export default Form;
