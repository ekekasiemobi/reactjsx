import React, { useState } from "react";
import './styles.css'

function Form() {

    const [name, setName] = useState("")
    const [headText, setHeadText] = useState("")
    const [onClick, setOnClick] = useState(false)

    function handleChange (event){
        setName (event.target.value)
    }

    function handleClick(event){
        setOnClick (true)
        setHeadText(name)
    }

  return (
    <div className="container">
        <form>
            {!onClick ? <h2> Hello {name} </h2> : <h2>Welcome {headText} </h2>}
            <input onChange={handleChange} type="text" placeholder="What's your name?" />
            <button type="submit" onClick={handleClick}>Submit</button>
        </form>
    </div>
  );
}

export default Form;
