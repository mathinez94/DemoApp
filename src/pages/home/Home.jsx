import React from 'react'
import './Home.css'
import lightening from '../../images/lightning.jpg'
import Background from '../background/Background'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";



const Home = () => {
  return (
    <>
    <div className="home">
      <div className="header_details">
        <Background />
        {/* <h1 className='home_hearder_text'>Sanhila Precipitation</h1> */}
      </div>
    <div className="content">
      <div className="content_pic">
        <img src={lightening} alt="founder imag" className='img'/>
      </div>
      <div className="content_text">
        <h2>Founder's Biography</h2><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis praesentium explicabo 
          maxime, magni animi error commodi veritatis temporibus! Provident?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis praesentium explicabo 
          maxime, magni animi error commodi veritatis temporibus! Provident?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div className="about">
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
    </div>
    </div>
    </>
  )
}

export default Home 