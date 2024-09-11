import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from "./Head";
function SignUp(){
    var navigate = useNavigate();
    const [value,setValue] = useState({
        
        email:"",
        password:""
    })
    function handleChange(event){
        setValue((prev)=>({
            ...prev, [event.target.name]:event.target.value
        }))
        console.log(value.email);
        console.log(value.password);
    }
    function handleSign(e){
        e.preventDefault();
        axios.post("http://localhost:3000/signup",{value}).
        then(navigate("/login"));
    }
    function handleLogin(event){
        event.preventDefault();
        navigate("/login");
    }
    return(
        <div>
            <Head />
            <div className="SignUpContainer">
                
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div className="form">
                <form >
                    
                    <input type="text" onChange={handleChange} placeholder="Enter your email-id" name="email" />
                    <br/>
                    <input type="password" onChange={handleChange} placeholder="Enter password" name="password"/>
                    <br/>
                    <div className="button">
                        <button type="submit" className="btn" onClick={handleSign}>Sign-up</button>
                        <button type="submit" className="btn" onClick={handleLogin}>Login</button>
                    </div>
                </form>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;