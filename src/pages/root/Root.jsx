import React, { useState } from 'react'
import '../root/Root.css'
import {  Link, NavLink, Outlet } from 'react-router-dom';
import { FaTimesCircle, FaBook } from "react-icons/fa";

export const Root = () => {

  const [menu, setMenu] = useState(false)
  console.log(menu)
  return (
    <>
    <div className='root' >

      <Link  className="logo"><div>University of Nebraska</div></Link>

      <div className="mobileView">
        <div className="menu" onClick={() =>setMenu(!menu)}>{menu ? <FaTimesCircle className='mobileCloseIcon'/> : <FaBook className='mobileHomeIcon'/>}</div>
        <nav 
        className={`links ${menu ? 'ViewLink' : ""}`}
        onClick={() =>setMenu(!menu)} 
        >            
            <NavLink to='/' className='navlink'>Home</NavLink> 
            <NavLink to='/research' className='navlink'>Research</NavLink>
            <NavLink to='/Peoples' className='navlink'>People</NavLink>
            <NavLink to='/Publications' className='navlink'>Publications</NavLink> 
            <NavLink to='/Teaching' className='navlink'>Teaching</NavLink> 
            <NavLink to='/Opportunities' className='navlink'>Opportunities</NavLink>        
            <NavLink to='/News' className='navlink'>News</NavLink>
        </nav>
      </div>
    </div>
    
    <Outlet />
    </>
  )
}
