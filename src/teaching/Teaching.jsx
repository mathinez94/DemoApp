import React from 'react'
import './Teaching.css'
import cloudearthview from '../../src/images/cloud earth view.jpg'
import { Typography } from '@mui/material'
import { useTheme, useMediaQuery } from '@mui/material'

const Teaching = () => {

  const theme = useTheme();
  const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className='teaching'>
     <div className="w-full h-72 flex items-center justify-center">
        <img src={cloudearthview} alt="atmosphere view" className='w-full relative'/>
        <div className="z-10 absolute flex items-center justify-center">
          <span className={isMediaMatch 
          ? 'font-serif text-2xl font-extrabold text-red-700 border-b-4 border-b-red-700'
          :'font-serif text-5xl font-extrabold text-red-700 border-b-4 border-b-red-700' }>TEACHINGS </span>
        </div>
      </div>
      <div className={ "w-[80%] m-auto mt-24 mb-16 flex flex-col gap-3"}>
        <Typography variant="h5">University Of Nebraska-Lincoln</Typography>

        <ul className="flex flex-col gap-6">
          <li>Lorem 100: Lorem ipsum dolor sit amet, </li>

          <li>Lorem 410/830: Ut enim ad minim veniam, quis nostrud exercitation</li>

          <li>Lorem 487/887: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
          <li>Lorem 100: Lorem ipsum dolor sit amet, </li>

          <li>Lorem 410/830: Ut enim ad minim veniam, quis nostrud exercitation</li>

          <li>Lorem 487/887: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
          <li>Lorem 100: Lorem ipsum dolor sit amet, </li>

          <li>Lorem 410/830: Ut enim ad minim veniam, quis nostrud exercitation</li>

          <li>Lorem 487/887: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>

        </ul>
      </div>
    </div>
  )
}

export default Teaching