import React from 'react'
import './Home.css'
import Manie from '../../images/manie_pic.jpg'
import { Link } from 'react-router-dom'
import cloudearthview from '../../images/cloud earth view.jpg'
import { Paper, Typography } from '@mui/material'
import { useTheme, useMediaQuery } from '@mui/material'


const Home = () => {
  const theme = useTheme();
  const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
    <div className="w-full h-[100%] font-serif ">
      <div className="w-full h-72 flex items-center justify-center">
        <img src={cloudearthview} alt="atmosphere view" className='w-full relative'/>
        <div className="z-10 absolute flex items-center justify-center">
          <span className={isMediaMatch ?
           'font-serif text-2xl font-extrabold text-red-700 border-b-4 border-b-red-700'
          :
          'font-serif text-5xl font-extrabold text-red-700 border-b-4 border-b-red-700'
          }
          >
            DIXON RESEARCH GROUP 
          </span>
        </div>
      </div>
      <div className={ isMediaMatch ? "w-[80%] m-auto bg-white mt-28 flex items-center justify-center " 
      :
        "w-[80%] m-auto bg-white mt-32 flex items-center justify-center "}>
      <div className=''>
        <div className={isMediaMatch ? 'flex flex-col gap-5' : 'flex  gap-10'}>
          <Paper elevation={2} className="">
              <img src={Manie} alt="founder imag" className='max-w-[350px] max-h-[350px] rounded-lg'/>
          </Paper>
            <div className=''>
              <span className='text-2xl font-semibold font-sans'>Emmanuel Ogwuche Audu</span><br/>
              <span className='text-xl font-semibold font-sans'>Assistant Professor</span><br/>
              <span className='text-xl font-semibold font-sans'>Climate and Weather Variability</span><br/>
              <Link to='mailto: auduemmanuel112@gmail.com' target='blank' className='Link'>auduemmanuel112@gmail.com</Link>
            </div>
        </div>
          <div className='text-botton mt-4 mb-16'>
            <Typography className='font-serif'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ut
              commodi voluptate numquam repellendus consectetur sit debitis voluptatem
              adipisci exercitationem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Minus, ut commodi voluptate numquam repellendus
              consectetur sit debitis voluptatem adipisci exercitationem Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Minus, ut commodi voluptate
              numquam repellendus consectetur sit debitis voluptatem adipisci
              exercitationem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minus, ut commodi voluptate numquam repellendus consectetur sit debitis
              voluptatem adipisci exercitationem
            </Typography>
          </div>
      </div>
        
      </div>
    </div>
    {/* <div className="w-full h-36 bg-purple-400 fixed bottom-0 mt-10">
      <div className="about-details">
        <h2>About us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quod in provident 
          veniam deleniti quas labore magnam. Alias deserunt fugit<br/>
          omnis exercitationem aspernatur 
          cum possimus voluptates, repellendus aliquam, harum culpa <br/>
          totam at iusto tempore nobis provident ullam, explicabo nostrum? Obcaecati!
          </p>
      </div>
      <div className='contact'>
      <h2>Contact us</h2>
      <div className="icons">
        <Link to='https://t.me/MatheeMathinez' target='blank'><div className='contact-icons'><FaTelegramPlane className='icons'/></div> </Link>
        <Link  to='https://wa.me/2348104849150' target='blank'><div className='contact-icons'><FaWhatsapp className='icons'/></div></Link>
        <Link to='https://www.instagram.com/mathinez94?igsh=dmd2MXE3Z3Y0bTJ5&utm_source=qr' target='blank'><div className='contact-icons'><FaInstagram className='icons'/></div></Link> 
        <Link><div className='contact-icons'><FaFacebook className='icons'/></div></Link>
        <Link to='https://x.com/mathibliz' target='blank'><div className='contact-icons'><FaXTwitter className='icons'/></div></Link> 
      </div>
   </div>
    </div> */}
    </>
  )
}

export default Home 