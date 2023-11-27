import React from "react";

const Input = (props) =>{
     return(
        <input className="input-field" 
         placeholder= {props.placeholder}
         value={props.value}
         onChange={props.onChange}
        />
     )
}

export default Input;