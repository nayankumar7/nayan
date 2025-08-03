import React, { useState } from "react";
import './Navbar.css'


const Navbar = () => {

  let user = 0;
  
  return (
    <div className='body'>
        <div className="App">
      <header className="navbar">
        <div className="name"><a href="/" className='name'>Nayan</a></div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
          />
          <button className="search-btn">Search</button>
        </div>
        <div className="buttons">
          {
            user===0 ? <><button className="login-btn"><a href="/login" id='login'>Login</a></button><button className="signup-btn"><a href="/signup" id='signup'>SignUp</a></button></> :<button className='login-btn user'>User</button>
          }
          
          
          
          
        </div>
        
      </header>
    </div>
    </div>
  )

}

export default Navbar