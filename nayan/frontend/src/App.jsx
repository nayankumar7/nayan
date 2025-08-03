import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/userEnter/Login'
import Signup from './pages/userEnter/Signup'
import Projects from './pages/projects/Projects'
import About from './pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
