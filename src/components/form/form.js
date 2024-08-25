import React,{useState} from "react";
import Input from "./input";
import Label from "./label";
import Titlelogo from "./titlelogo";

import './form.css';

const Form=(props)=>{
    const [firstName,setfirstName]=useState('');
    const [lastName,setlastName]=useState('');
    const handleFirstChange = (e) =>{
        setfirstName(e.target.value);
    }
    const handleLastChange = (e)=>{
        setlastName(e.target.value);
    }
    const [isLogin,setisLogin]=useState('false');

    const handlerIsLogined = ()=>{
    setisLogin(false);
    }
    const handlerIsLogouted=()=>{
    setisLogin(true);
    }
    let button;
    let fo;
        if(isLogin){
            fo = (
                <>
                    <Titlelogo />
                    <div>
                    <Label labelName="Firstname" />
                <Input name="firstName" value = {firstName} onChange={handleFirstChange} />
                    </div>
                    <div>
                    <Label labelName="Lastname" />
                <Input name="lastName" value = {lastName} onChange={handleLastChange}  />
                    </div>
                </>
                )
            button = <button type="button" onClick={handlerIsLogined}>Login</button>
        }
        else{
            fo = <h1>YOU LOGED IN</h1>
            button = <button type="button" onClick={handlerIsLogouted}>Logout</button>   
        }
    return(
        <div>
            <form>
               {fo}
               {button}
            </form>
        </div> 
    );
}

export default Form;