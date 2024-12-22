import React from 'react'
import './Opportunities.css'
import cloudearthview from '../../images/cloud earth view.jpg'
import { Typography } from '@mui/material'

const Opportunities = () => {
  return (
    <div className='opportunities'>
     <div className="w-full h-72 flex items-center justify-center">
        <img src={cloudearthview} alt="atmosphere view" className='w-full relative'/>
        <div className="z-10 absolute flex items-center justify-center">
          <span className='font-serif text-5xl font-extrabold text-red-700 border-b-4 border-b-red-700'>OPPORTUNITIES </span>
        </div>
      </div>

      <div className={"w-[80%] m-auto mt-24 mb-16 flex flex-col gap-3"}>
        <Typography className="text-primary-main" variant="h4">
          Lorem Ipsum{" "}
        </Typography>

        <div className="flex flex-col gap-8 mt-8 ">
          <div className=" w-full">
            <Typography variant="h5">Undergraduate Opportunities</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </Typography>
          </div>
        <div className="flex flex-col mt-8 ">
            <Typography variant="h5">Graduate Opportunities</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </Typography>
          </div>
        <div className="flex flex-col  mt-8 ">
            <Typography variant="h5">Post-Doc Opportunities</Typography>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </Typography>
          </div>
        <div className="flex flex-col mt-8 ">
            <Typography variant="h5">Other Opportunities</Typography>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </Typography>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Opportunities