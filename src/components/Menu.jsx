import React from 'react'
import logo from '../../src/images/Dixon research group.png'
import {  Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
        <div className='w-full flex items-center justify-center h-20'>
            <div className=' flex-1 '>
              <Link  className=" flex items-center px-5 ">
                <img src={logo} alt="research group logo"  className='h-28 w-52 '/>
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
    </div>
  )
}

export default Menu