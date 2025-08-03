import React from 'react'
import Navbar from './Navbar'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <Navbar/>
        <div className="tools">

          <p><a href="/projects" className='links'>Projects</a></p>
          <p><a href="/projects" className='links'>DataSets</a></p>
          <p><a href="/solutions" className='links'>Solutions</a></p>
          <p><a href="/contests" className='links'>Contests</a></p>
          <p><a href="/requests" className='links'>Requests</a></p>
          <p><a href="/donates" className='links'>Donates</a></p>
          <p><a href="/donates" className='links'>Discusion</a></p>
          <p><a href="/about" className='links'>About</a></p>
          

        </div>
        
    </div>
  )
}

export default Header