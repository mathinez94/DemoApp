import React from 'react'
import'./People.css';
// import Background from '../header/Background';
import cloudearthview from '../../images/cloud earth view.jpg'
import MediaPlatforms1 from "../../images/manie_pic.jpg";
import { Paper, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material'

const People = () => {

  const theme = useTheme();
  const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className="intern">
        <div className="w-full h-72 flex items-center justify-center">
          <img src={cloudearthview} alt="atmosphere view" className='w-full relative'/>
          <div className="z-10 absolute flex items-center justify-center">
            <span className={isMediaMatch 
          ? 'font-serif text-2xl font-extrabold text-red-700 border-b-4 border-b-red-700'
          :'font-serif text-5xl font-extrabold text-red-700 border-b-4 border-b-red-700' }
          >TEAM  
          </span>
          </div>
        </div>
      <div className="px-[3%] bg-white flex-col gap-10 mt-24 mb-24intern_content">
          <div className='flex-col items-center justify-center'>
            <Typography variant='h4' sx={{textAlign: 'center'}}>MEET THE TEAM </Typography>
            <Typography variant='subtitle2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ea repellat soluta laborum accusamus ad culpa inventore, mollitia nobis. 
              Deserunt, impedit laudantium inventore voluptatum nihil adipisci deleniti sit 
              numquam veritatis explicabo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Eaque assumenda aliquam odit doloremque neque modi quis animi provident itaque dolor!
              </Typography>
          </div>
      </div>
      <div className={ "px-[3%] mt-12 mb -32"}>
        <div className="mt-12">
          <div className={ isMediaMatch ? 'grid grid-cols-1 gap-16' : "grid grid-cols-3 gap-[40px]"}>
            <Paper
              elevation={2}
              className={
                isMediaMatch ? "relative hover:cursor-pointer transition-transform"
                 :
                "relative hover:cursor-pointer transition-transform transform hover:translate-x-4 hover:translate-y-4"
              }
              // style={{ overflow: "hidden" }}
            >
              <div className="relative">
                <img src={MediaPlatforms1} alt="MediaPlatforms1" className="max-h-[350px] max-w-[350px]" />
                <div className="absolute inset-0 flex items-start justify-center bg-[#3368c6]/80 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 py-8">
                  <Typography className="text-white font-bold text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.{" "}
                  </Typography>
                </div>
              </div>

              <Paper className={ "absolute -bottom-10 px-2 py-4"} elevation={2}>
                <Typography
                  variant="subtitle2"
                  className="font-bold hover:text-primary-main"
                >
                  Emmanuel Ogwuche
                </Typography>
                <Typography variant="subtitle2">Assistant Professor</Typography>
              </Paper>
            </Paper>
            <Paper
              elevation={2}
              className={
                isMediaMatch ? "relative hover:cursor-pointer transition-transform"
                 :
                "relative hover:cursor-pointer transition-transform transform hover:translate-x-4 hover:translate-y-4"
              }
              // style={{ overflow: "hidden" }}
            >
              <div className="relative">
                <img src={MediaPlatforms1} alt="MediaPlatforms1" className="max-h-[350px] max-w-[350px]" />
                <div className="absolute inset-0 flex items-start justify-center bg-[#3368c6]/80 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 py-8">
                  <Typography className="text-white font-bold text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.{" "}
                  </Typography>
                </div>
              </div>

              <Paper className={"absolute -bottom-10 px-2 py-4"} elevation={2}>
                <Typography
                  variant="subtitle2"
                  className="font-bold hover:text-primary-main"
                >
                  Emmanuel Ogwuche
                </Typography>
                <Typography variant="subtitle2">Assistant Professor</Typography>
              </Paper>
            </Paper>
            <Paper
              elevation={2}
              className={
                isMediaMatch ? "relative hover:cursor-pointer transition-transform"
                 :
                "relative hover:cursor-pointer transition-transform transform hover:translate-x-4 hover:translate-y-4"
              }
              // style={{ overflow: "hidden" }}
            >
              <div className="relative">
                <img src={MediaPlatforms1} alt="MediaPlatforms1" className="max-h-[350px] max-w-[350px]"/>
                <div className="absolute inset-0 flex items-start justify-center bg-[#3368c6]/80 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 py-8">
                  <Typography className="text-white font-bold text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.{" "}
                  </Typography>
                </div>
              </div>

              <Paper className={"absolute -bottom-10 px-2 py-4"} elevation={2}>
                <Typography
                  variant="subtitle2"
                  className="font-bold hover:text-primary-main"
                >
                  Emmanuel Ogwuche
                </Typography>
                <Typography variant="subtitle2">Assistant Professor</Typography>
              </Paper>
            </Paper>
          </div>
        </div>
      </div>
      <div className="mt-32">
      </div>
    </div>
  )
}

export default People