import React from 'react' 

function Input (props){
    
    return(
           
        <div 
            onClick={()=>{
                props.onChecked(props.id)
            }}
        >
            <li>{props.text}</li>
        </div> 
    )  
}

export default Input;

