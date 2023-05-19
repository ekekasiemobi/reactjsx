import React, { useState } from "react";
import './styles.css'

function Form() {

    const [onSubmit, setOnSubmit] = useState(false)
    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: "",
    })

    function handleChange (event){
        const inputValue = event.target.value;
        const inputName = event.target.name;

        setFullName (prevValue => {
            if (inputName === "fName") {
                return{
                    fName: inputValue,
                    lName: prevValue.lName,
                    email: prevValue.email
                };
                
            }else if (inputName === "lName") {
                return{
                    fName: prevValue.fName,
                    lName: inputValue,
                    email: prevValue.email,
                };
            }else if ( inputName === "email"){
                return{
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: inputValue
                }
            }
        });

        
    }
   

    function handleSubmit(event){
        event.preventDefault();
        setOnSubmit (true)
    }

  return (
    <div className="container">
        <form method="POST" onSubmit={handleSubmit}>
            {!onSubmit ? <h2> Hello {fullName.fName} {fullName.lName} </h2> : <h2>Welcome {fullName.fName} {fullName.lName} </h2>}
            <p>{fullName.email}</p>
            <input 
                onChange={handleChange} 
                type="text" 
                placeholder="First name" 
                name="fName" 
                value={fullName.fName} 
            />
            <input 
                onChange={handleChange} 
                type="text" 
                placeholder="Last name" 
                name="lName" 
                value={fullName.lName}
            />
            <input 
                onChange={handleChange} 
                type="email" 
                placeholder="Email" 
                name="email" 
                value={fullName.Email}
            />


            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Form;
