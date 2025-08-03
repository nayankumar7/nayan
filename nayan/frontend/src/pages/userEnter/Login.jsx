import React, { useState } from 'react';
import axios from 'axios';
import Header from '../home/header/Header';

import './Login.css'
import CopyRight from '../home/footer/CopyRight';

let a = 0;

const Login = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        if(email=="" || password==""){
            alert("fill all column - correct");
        }else{
        try {
            const response = await axios.post('http://localhost:1234/api/users/login', {
                email,
                password
            });
             a= 1;
           
           
            alert("you are login now!");
        } catch (error) {
            
            alert("Enter Correct details of email and password...");
            
            console.error(error);
        }
    }
    };
  return (
    <div>
        <Header className="header"/>
        
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="login">
                
                <div>

            <h2>Login</h2>
            <br /><br />
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <br /><br />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <br /><br />
            <button onClick={handleLogin}>Login</button>
        
                </div>
                
            </div>
        </div>
        <CopyRight/>
    </div>
  )
}

console.log(a);
export default Login