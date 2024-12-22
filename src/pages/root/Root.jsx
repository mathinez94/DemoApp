import React from 'react'
import '../root/Root.css'
import {  Link, NavLink, Outlet } from 'react-router-dom';
import { Paper } from '@mui/material';
import logo from '../../images/Dixon research group.png'

export const Root = () => {

 
  return (
    <>
    <div className='m-0 p-0 w-full fixed top-0 z-40' >
      <Paper elevation={2} className=' py-4' >
        <div className='w-full flex items-center justify-center h-20'>
            <div className=' flex-1'>
              <Link  className=" flex items-center justify-center ">
                <img src={logo} alt="research group logo"  className='h-28 w-36 '/>
              </Link>
            </div>
            <div className="flex-2 py-3 font-semibold font-serif">
                <nav>            
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
      </Paper>
    </div>
    <div className='mt-44'>
     <Outlet />
    </div>
    </>
  )
}
