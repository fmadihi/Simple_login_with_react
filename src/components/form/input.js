import React,{useState} from "react";


const Input = (props) => {
    
    return (
        <input type = "text" name={props.name} value={props.value} onChange={props.onChange}
        />
    );
}
export default Input;