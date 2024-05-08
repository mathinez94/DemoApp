import React from 'react'
import '../root/Root.css'
import {  Link, NavLink, Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
    <div className='root' >

      <Link  className="logo"><div>Demo Research</div></Link>

      <nav className="links">            
          <NavLink to='/' className='navlink'>Home</NavLink> 
          <NavLink to='/research' className='navlink'>Research</NavLink>
          <NavLink to='/Peoples' className='navlink'>People</NavLink>
          <NavLink to='/Publications' className='navlink'>Publications</NavLink> 
          <NavLink to='/Teaching' className='navlink'>Teaching</NavLink> 
          <NavLink to='/Opportunities' className='navlink'>Opportunities</NavLink>        
          <NavLink to='/News' className='navlink'>News</NavLink>
      </nav>
    </div>
    
    <Outlet />
    </>
  )
}
