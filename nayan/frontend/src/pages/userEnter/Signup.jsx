import React, { useState } from 'react';
import axios from 'axios';
import Header from '../home/header/Header';
import './Login.css'
import CopyRight from '../home/footer/CopyRight';

const Signup = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSignup = async () => {
        if(fullname=="" || email=="" || password==""){
            alert("fill all column - correct");
        }
        else{
        try {
            const response = await axios.post('http://localhost:1234/api/users/signup', {
                fullname,
                email,
                password
            });
            
            alert("You signup is completed. please login now...");
        } catch (error) {
            alert("incorect or user already exists. please try again");
            console.error(error);
        }
    }
};
  return (
    <div>
        <Header/>
        <br />
        <br />
        <br />
    <div className='signup container'>
        
        <h2>Signup </h2>
        <br /><br />
            <input type="text" placeholder="Full Name" onChange={e => setFullname(e.target.value)} />
            <br /><br />
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <br /><br />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <br /><br />
            <button id='signup-btn' onClick={handleSignup}>Signup</button>
    </div>
    <CopyRight/>
    </div>
  )
}

export default Signup