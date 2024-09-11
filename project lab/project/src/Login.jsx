import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from "./Head";
function Login(){
    var navigate = useNavigate();
    var [value,setValue] = useState({
        email:"",
        password:""
    })
    function handleChange(event){
        setValue(prev => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
        
    }
    function handleSubmit(event){
        event.preventDefault();
        
        axios.post("http://localhost:3000/login",{value})
        .then(res => {
            console.log(res);
            if(res.data === "success"){
                navigate("/home");
            }
            else{
                alert("invalid email or password");
            }
        })
        .catch(err => alert("error"))
    }
    return(
        <div>
            <Head />
            <div className="SignUpContainer">
                <div>
                    <h1>Login</h1>
                </div>
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} placeholder="Enter your email-id" name="email" />
                    <br/>
                    <input type="password" onChange={handleChange} placeholder="Enter password" name="password"/>
                    <br/>
                    <div className="button">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login;