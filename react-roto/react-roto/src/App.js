import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home.js"
import About from "./components/About.js"
import Services from "./components/Services.js"
import Contact from "./components/Contact.js"
import './App.css'

export default function App(){ 
  return ( 
    <div className='app'>
     
      <nav className='nav' style={{margin: 10}}> 
      
        <Link to='/' style={{padding: 5}}>Home</Link>
        <Link to='/About' style={{padding: 5}}>About</Link>
        <Link to='/Services' style={{padding: 5}}>Services</Link>
        <Link to='/Contact' style={{padding: 5}}>Contact</Link>
      </nav>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        
      </div>






  
  )
}