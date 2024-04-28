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
          <NavLink to='/stories' className='navlink'>Stories</NavLink>
          <NavLink to='/interns' className='navlink'>Interns</NavLink>
          <NavLink to='/research' className='navlink'>Research</NavLink>
          <NavLink to='/contact' className='navlink'>Contact</NavLink>        
      </nav>
    </div>
    
    <Outlet />
    </>
  )
}
