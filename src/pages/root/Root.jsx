import React from 'react'
import '../root/Root.css'
import { Outlet, Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import Menu from '../../components/Menu';
import { useTheme, useMediaQuery } from '@mui/material'
import DrawerMenu from '../../components/DrawerMenu';
import logo from '../../images/Dixon research group.png'


export const Root = () => {

  const theme = useTheme();
    const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))
 
  return (
    <>
    <div className='m-0 p-0 w-full fixed top-0 z-40' >
      <Paper elevation={2} className=' py-4' >
      
       { 
        isMediaMatch ? 
        <div className='w-[100%] flex gap-2 items-center justify-center'>
          <div className='w-[20%] h-[100%] items-center justify-center '>
            <DrawerMenu /> 
          </div>
          <div className='w-[80%] items-center justify-center '>
              <Link  className=" flex items-center">
                <img src={logo} alt="research group logo"  className='h-28 w-52 '/>
              </Link>
            </div>
        </div>
        :
        <div>
           <Menu />
        </div>
        }
      </Paper>
    </div>
    <div className='mt-44'>
     <Outlet />
    </div>
    </>
  )
}
